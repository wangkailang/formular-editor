import { ExcelFormulaLexer } from '../parser/ExcelFormulaLexer';
import { CharStreams } from 'antlr4ts/CharStreams';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';

export const highlightTokens = (input: string) => {
  const inputStream =  CharStreams.fromString(input);
  const lexer = new ExcelFormulaLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  tokenStream.fill();

  console.log('tokens', tokenStream.getTokens())

  return tokenStream.getTokens().map(token => {
    switch (token.type) {
      case ExcelFormulaLexer.FUNCTION_NAME:
        return <span className="function">{token.text}</span>;
      case ExcelFormulaLexer.CELL_REFERENCE:
        return <span className="cell-ref">{token.text}</span>;
      default:
        return token.text;
    }
  });
};
