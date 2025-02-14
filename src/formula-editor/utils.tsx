import { ExcelFormulaLexer } from '../parser/ExcelFormulaLexer';
import { CharStreams } from 'antlr4ts/CharStreams';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';
import './style.css';

export const highlightTokens = (input: string) => {
  const inputStream =  CharStreams.fromString(input);
  const lexer = new ExcelFormulaLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  tokenStream.fill();

  return tokenStream.getTokens()
    // EOF 结束符不显示
    // .filter(token => token.type !== -1)
    .map(token => {
      switch (token.type) {
        case ExcelFormulaLexer.FUNCTION_NAME:
          return <span className="t_call">{token.text}</span>;
        case ExcelFormulaLexer.NUMBER:
          return <span className="t_number">{token.text}</span>;
        case ExcelFormulaLexer.STRING:
          return <span className="t_string">{token.text}</span>;
        case ExcelFormulaLexer.CELL_REFERENCE:
          return <span className="cell-ref">{token.text}</span>;
        default:
          return token.text;
    }
  });
};
