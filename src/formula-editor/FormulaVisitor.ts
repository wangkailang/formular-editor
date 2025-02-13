import type { ExcelFormulaVisitor } from '../parser/ExcelFormulaVisitor';
import type { ParseTree } from 'antlr4ts/tree/ParseTree';

export class FormulaValidator implements ExcelFormulaVisitor<void> {
  visit(ctx: ParseTree) {
    // 实现访问逻辑
  }

  visitBinaryOp(ctx: ExcelFormulaParser.BinaryOpContext) {
    console.log('Found binary operation:', ctx.op.text);
  }

  visitFunctionCall(ctx: ExcelFormulaParser.FunctionCallContext) {
    const funcName = ctx.FUNCTION_NAME().text;
    console.log('Function call:', funcName);
  }
}
