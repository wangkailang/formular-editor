import type React from 'react';
import { useState, useMemo } from 'react';
import { ExcelFormulaLexer } from '../parser/ExcelFormulaLexer';
import { ExcelFormulaParser } from '../parser/ExcelFormulaParser';
// import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { FormulaErrorListener } from './FormulaErrorListener';
import { CharStreams } from 'antlr4ts/CharStreams';
import { CommonTokenStream } from 'antlr4ts/CommonTokenStream';
import { highlightTokens } from './utils';
import { FormulaCalculator } from './FormulaCalculator';
import { DefaultCellProvider } from './CellContext';

interface FormulaEditorProps {
  onParseSuccess?: (result: any) => void;
  onParseError?: (errors: string[]) => void;
}

export const FormulaEditor: React.FC<FormulaEditorProps> = ({
  onParseSuccess,
  onParseError,
}) => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState<string | null>(null);
  const cellProvider = useMemo(() => new DefaultCellProvider(), []);

  // 解析逻辑
  const parseFormula = (input: string) => {
     // 1. 创建输入流
    const inputStream = CharStreams.fromString(input);
    
    // 2. 初始化词法分析器
    const lexer = new ExcelFormulaLexer(inputStream);
    
    // 3. 创建 Token 流
    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();
    
    // 4. 初始化语法解析器
    const parser = new ExcelFormulaParser(tokenStream);
    
    // 添加错误监听器
    const errorListener = new FormulaErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    const parseTree = parser.formula();
    
    if (errorListener.errors.length > 0) {
      onParseError?.(errorListener.errors);
      setError(errorListener.errors.join('\n'));
    } else {
      // try {
      //   const calculator = new FormulaCalculator(cellProvider);
      //   const value = calculator.visit(parseTree);

      //   console.log('value', value);
        
      //   // if (value instanceof Error) {
      //   //   setResult(`Error: ${value.message}`);
      //   // } else {
      //   //   setResult(`Result: ${value}`);
      //   // }
      // } catch (e) {
      //   setResult('Invalid formula');
      // }
      const calculator = new FormulaCalculator(cellProvider);
      calculator.visitFormula(parseTree);
      onParseSuccess?.(parseTree);
      setError(null);
    }
  };

  return (
    <div className="formula-editor">
      <input
        type="text"
        value={formula}
        onChange={(e) => {
          setFormula(e.target.value);
          parseFormula(e.target.value);
        }}
        placeholder="Enter formula here..."
      />
      {error && <div className="text-red-500">{error}</div>}
      <h2>Formula highlight:</h2>
      <div className="border-1 border-solid border-gray-300 p-2 mt-2">
        {highlightTokens(formula)}
      </div>
      <div>
        <h2>Result:</h2>
        <div>{result}</div>
      </div>
    </div>
  );
};
