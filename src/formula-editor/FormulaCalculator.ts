// FormulaCalculator.ts
import type { ExcelFormulaVisitor } from '../parser/ExcelFormulaVisitor';
import { ExcelFormulaParser } from '../parser/ExcelFormulaParser';
import type { CellValueProvider } from './CellContext';

type CalculationResult = number | string | boolean | Error;

export class FormulaCalculator implements ExcelFormulaVisitor<CalculationResult> {
  constructor(
    private cellValueProvider: CellValueProvider,
    private functions: Record<string, (...args: number[]) => number | Error> = {}
  ) {
    this.functions = {
      SUM: (...args: number[]) => args.reduce((a, b) => a + b, 0),
      AVERAGE: (...args: number[]) => args.length > 0 ? 
        args.reduce((a, b) => a + b, 0) / args.length : 
        new Error('#DIV/0!'),
      // 添加其他函数...
    };
  }

  // 显式声明 visit 方法
  visit(ctx: ExcelFormulaParser.ExprContext): CalculationResult {
    if (ctx instanceof ExcelFormulaParser.FormulaContext) {
      return this.visitFormula(ctx);
    } else if (ctx instanceof ExcelFormulaParser.BinaryOpContext) {
      return this.visitBinaryOp(ctx);
    } else if (ctx instanceof ExcelFormulaParser.CellRefContext) {
      return this.visitCellRef(ctx);
    } else if (ctx instanceof ExcelFormulaParser.FunctionCallContext) {
      return this.visitFunctionCall(ctx);
    } else if (ctx instanceof ExcelFormulaParser.NumberContext) {
      return this.visitNumber(ctx);
    } else {
      return this.defaultResult();
    }
  }

  // 访问根节点
  visitFormula(ctx: ExcelFormulaParser.FormulaContext): CalculationResult {
    return this.visit(ctx.expr());
  }

  // 处理二进制操作符
  visitBinaryOp(ctx: ExcelFormulaParser.BinaryOpContext): CalculationResult {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const operator = ctx.op.text;

    if (left instanceof Error) return left;
    if (right instanceof Error) return right;

    const numLeft = Number(left);
    const numRight = Number(right);

    switch (operator) {
      case '+': return numLeft + numRight;
      case '-': return numLeft - numRight;
      case '*': return numLeft * numRight;
      case '/': 
        return numRight === 0 ? 
          new Error('#DIV/0!') : 
          numLeft / numRight;
      default: return new Error('#OPERATOR!');
    }
  }

  // 处理单元格引用
  visitCellRef(ctx: ExcelFormulaParser.CellRefContext): CalculationResult {
    const cellAddress = ctx.CELL_REFERENCE().text;
    const value = this.cellValueProvider.getCellValue(cellAddress);
    
    if (value === undefined) return new Error('#REF!');
    const numericValue = Number(value);
    
    return isNaN(numericValue) ? 
      new Error('#VALUE!') : 
      numericValue;
  }

  // 处理函数调用
  visitFunctionCall(ctx: ExcelFormulaParser.FunctionCallContext): CalculationResult {
    const funcName = ctx.FUNCTION_NAME().text.toUpperCase();
    const args = ctx.arguments()?.expr().map(arg => this.visit(arg)) || [];
    
    const hasError = args.some(arg => arg instanceof Error);
    if (hasError) return new Error('#VALUE!');

    const func = this.functions[funcName];
    if (!func) return new Error('#NAME?');

    try {
      return func(...args);
    } catch (e) {
      return new Error('#CALC!');
    }
  }

  // 处理数字字面量
  visitNumber(ctx: ExcelFormulaParser.NumberContext): number {
    return parseFloat(ctx.NUMBER().text);
  }
  
  // EOF
  // visitEof(ctx: ExcelFormulaParser.EofContext): CalculationResult {
  //   return this.defaultResult();
  // }

  // 默认处理其他节点
  protected defaultResult(): CalculationResult {
    return 0;
  }
}
