import React, { useState } from "react";
import { FormulaLexer } from "./formulaLexer";
import { formulaParser } from "./formulaParser";
import { FormulaEvaluator } from "./formulaEvaluator";

export const ChevrotainFormulaEditor: React.FC = () => {
  const [input, setInput] = useState("1 + sum(2, 3)");
  const [result, setResult] = useState<number | string>("");
  const [error, setError] = useState("");

  const handleEvaluate = () => {
    const lexResult = FormulaLexer.tokenize(input);
      formulaParser.input = lexResult.tokens;
      const cst = formulaParser.expression();

      const evaluator = new FormulaEvaluator(
        {}, // 这里可以传入上下文变量，例如 { price: 100 }
        { sum: (...args) => args.reduce((a, b) => a + b, 0) }
      );

      const value = evaluator.evaluate(cst);
      setResult(value);
      setError("");
    // try {
    //   const lexResult = FormulaLexer.tokenize(input);
    //   formulaParser.input = lexResult.tokens;
    //   const cst = formulaParser.expression();

    //   const evaluator = new FormulaEvaluator(
    //     {}, // 这里可以传入上下文变量，例如 { price: 100 }
    //     { sum: (...args) => args.reduce((a, b) => a + b, 0) }
    //   );

    //   const value = evaluator.evaluate(cst);
    //   setResult(value);
    //   setError("");
    // } catch (err) {
    //   setError(err instanceof Error ? err.message : "Invalid expression");
    //   setResult("");
    // }
  };

  return (
    <div>
      <h2>Chevrotain Formula Editor</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入公式：例如 1 + 2 * 3"
        style={{ width: "300px", marginRight: "8px" }}
      />
      <button onClick={handleEvaluate}>计算</button>
      <div style={{ marginTop: "12px" }}>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {result !== "" && <div>结果: {result}</div>}
      </div>
    </div>
  );
};
