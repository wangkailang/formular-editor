grammar ExcelFormula;

formula: expr+ ; // 保持对完整公式的要求

// 修改 expr 规则以明确最小语法单元
expr:
    literal                   # LiteralExpr
  | cellReference             # CellRefExpr
  | functionCall              # FunctionExpr
  | '(' expr ')'              # ParensExpr
  | expr op=('*'|'/') expr    # MulDivExpr
  | expr op=('+'|'-') expr    # AddSubExpr
  ;

literal: NUMBER | STRING;
cellReference: CELL_REFERENCE;
functionCall: FUNCTION_NAME '(' arguments? ')';
arguments: expr (',' expr)*;

// 确保词法规则正确
FUNCTION_NAME: [A-Za-z]+;
CELL_REFERENCE: [A-Z]+[0-9]+;
NUMBER : ('-')?[0-9]+('.' [0-9]+)? ;
STRING: '"' .*? '"';
WS: [ \t\r\n]+ -> skip;
