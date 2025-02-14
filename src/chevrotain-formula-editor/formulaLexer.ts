// formulaLexer.ts
import { createToken, Lexer }  from "chevrotain";

// 定义词法单元
export const Identifier = createToken({
  name: "Identifier",
  pattern: /[a-zA-Z_]\w*/,
});

export const NumberLiteral = createToken({
  name: "NumberLiteral",
  pattern: /-?\d+(\.\d+)?/,
});

export const Plus = createToken({ name: "Plus", pattern: /\+/ });
export const Minus = createToken({ name: "Minus", pattern: /-/ });
export const Multiply = createToken({ name: "Multiply", pattern: /\*/ });
export const Divide = createToken({ name: "Divide", pattern: /\// });
export const LeftParen = createToken({ name: "LeftParen", pattern: /\(/ });
export const RightParen = createToken({ name: "RightParen", pattern: /\)/ });
export const Comma = createToken({ name: "Comma", pattern: /,/ });
export const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

// 词法单元集合（顺序敏感，较长模式在上）
export const allTokens = [
  WhiteSpace,
  NumberLiteral,
  Identifier,
  Plus,
  Minus,
  Multiply,
  Divide,
  LeftParen,
  RightParen,
  Comma,
];

export const FormulaLexer = new Lexer(allTokens);
