// formulaEvaluator.ts
import { CST, IToken } from "chevrotain";

type VariableContext = Record<string, number>;
type FunctionMap = Record<string, (...args: number[]) => number>;

class FormulaEvaluator {
  private variables: VariableContext;
  private functions: FunctionMap;

  constructor(variables: VariableContext = {}, functions: FunctionMap = {}) {
    this.variables = variables;
    this.functions = {
      sum: (...args) => args.reduce((a, b) => a + b, 0),
      max: (...args) => Math.max(...args),
      ...functions,
    };
  }

  evaluate(cst: CST.CstNode): number {
    return this.evaluateNode(cst);
  }

  private evaluateNode(node: CST.CstNode): number {
    switch (node.name) {
      case "expression":
        return this.evaluateNode(node.children.additionExpression[0]);

      case "additionExpression":
        return this.evaluateAdditionExpression(node);

      case "multiplicationExpression":
        return this.evaluateMultiplicationExpression(node);

      case "atomicExpression":
        return this.evaluateAtomicExpression(node);

      default:
        throw new Error(`Unsupported node type: ${node.name}`);
    }
  }

  private evaluateAdditionExpression(node: CST.CstNode): number {
    const terms = node.children.multiplicationExpression as CST.CstNode[];
    const operators = node.children.Plus || node.children.Minus || [];

    let result = this.evaluateNode(terms[0]);
    for (let i = 1; i < terms.length; i++) {
      const termValue = this.evaluateNode(terms[i]);
      const operatorToken = (operators[i - 1] as IToken).image;
      result = operatorToken === "+" ? result + termValue : result - termValue;
    }
    return result;
  }

  private evaluateMultiplicationExpression(node: CST.CstNode): number {
    const factors = node.children.atomicExpression as CST.CstNode[];
    const operators = node.children.Multiply || node.children.Divide || [];

    let result = this.evaluateNode(factors[0]);
    for (let i = 1; i < factors.length; i++) {
      const factorValue = this.evaluateNode(factors[i]);
      const operatorToken = (operators[i - 1] as IToken).image;
      result = operatorToken === "*" ? result * factorValue : result / factorValue;
    }
    return result;
  }

  private evaluateAtomicExpression(node: CST.CstNode): number {
    const children = node.children;
  
    if (children.NumberLiteral) {
      return parseFloat((children.NumberLiteral[0] as IToken).image);
    } else if (children.identifierUsage) {
      // 识别 identifierUsage 节点
      const identifierUsageNode = children.identifierUsage[0];
      return this.evaluateIdentifierUsage(identifierUsageNode);
    } else if (children.LeftParen) {
      return this.evaluateNode(children.expression[0]);
    }
    throw new Error("Invalid atomic expression");
  }

  private evaluateIdentifierUsage(node: CST.CstNode): number {
    const identifierToken = node.children.Identifier[0] as IToken;
    const funcName = identifierToken.image;
  
    // 检查是否为函数调用（存在括号）
    if (node.children.LeftParen) {
      const args = node.children.expression?.map((exprNode) =>
        this.evaluateNode(exprNode)
      ) || [];
      return this.executeFunction(funcName, args);
    } else {
      // 普通变量
      return this.getVariable(funcName);
    }
  }

  private executeFunction(name: string, args: number[]): number {
    const func = this.functions[name];
    if (!func) throw new Error(`Undefined function: ${name}`);
    return func(...args);
  }

  private getVariable(name: string): number {
    const value = this.variables[name];
    if (value === undefined) throw new Error(`Undefined variable: ${name}`);
    return value;
  }
}

export { FormulaEvaluator };
