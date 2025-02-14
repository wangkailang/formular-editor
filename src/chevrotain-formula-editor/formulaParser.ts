import { CstParser } from "chevrotain";
import { allTokens, NumberLiteral, Identifier, Plus, Minus, Multiply, Divide, LeftParen, RightParen, Comma } from "./formulaLexer";

class FormulaParser extends CstParser {
  constructor() {
    super(allTokens);
    this.performSelfAnalysis();
  }

  // 入口规则：expression
  public expression = this.RULE("expression", () => {
    this.SUBRULE(this.additionExpression);
  });

  private additionExpression = this.RULE("additionExpression", () => {
    this.SUBRULE(this.multiplicationExpression);
    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Plus) },
        { ALT: () => this.CONSUME(Minus) },
      ]);
      this.SUBRULE2(this.multiplicationExpression);
    });
  });

  private multiplicationExpression = this.RULE("multiplicationExpression", () => {
    this.SUBRULE(this.atomicExpression);
    this.MANY(() => {
      this.OR([
        { ALT: () => this.CONSUME(Multiply) },
        { ALT: () => this.CONSUME(Divide) },
      ]);
      this.SUBRULE2(this.atomicExpression);
    });
  });

  private atomicExpression = this.RULE("atomicExpression", () => {
    this.OR([
      { ALT: () => this.CONSUME(NumberLiteral) },
      { ALT: () => this.SUBRULE(this.identifierUsage) }, // 整合标识符的两种用法
      { ALT: () => {
        this.CONSUME(LeftParen);
        this.SUBRULE(this.expression);
        this.CONSUME(RightParen);
      }}
    ]);
  });

  /**
   * 统一解析标识符可能为变量或函数调用
   */
  private identifierUsage = this.RULE("identifierUsage", () => {
    this.CONSUME(Identifier);
    this.OPTION(() => {
      this.CONSUME(LeftParen);
      this.MANY_SEP({
        SEP: Comma,
        DEF: () => this.SUBRULE(this.expression)
      });
      this.CONSUME(RightParen);
    });
  });
}

const formulaParser = new FormulaParser();
export { formulaParser };
