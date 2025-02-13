import { ANTLRErrorListener, Recognizer, Token } from 'antlr4ts';

export class FormulaErrorListener implements ANTLRErrorListener<Token> {
  public errors: string[] = [];

  syntaxError(
    recognizer: Recognizer<Token, any>,
    offendingSymbol: Token | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
  ) {
    this.errors.push(`Error at ${line}:${charPositionInLine} - ${msg}`);
  }
}
