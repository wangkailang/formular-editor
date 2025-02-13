grammar ExcelFormula;

formula: '=' expr EOF;
expr:
    expr op=('+'|'-'|'*'|'/') expr   # BinaryOp
  | '(' expr ')'                     # Parens
  | FUNCTION_NAME '(' arguments? ')' # FunctionCall
  | CELL_REFERENCE                   # CellRef
  | NUMBER                           # Number
  | STRING                           # StringLiteral
  ;

arguments: expr (',' expr)*;

FUNCTION_NAME: [A-Za-Z]+[A-Za-z0-9]*;
CELL_REFERENCE: [A-Z]+[0-9]+;
NUMBER: [0-9]+ ('.' [0-9]+)?;
STRING: '"' .*? '"';

WS: [ \t\r\n]+ -> skip;

// 运算符定义
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
