// Generated from ExcelFormula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralExprContext } from "./ExcelFormulaParser";
import { CellRefExprContext } from "./ExcelFormulaParser";
import { FunctionExprContext } from "./ExcelFormulaParser";
import { ParensExprContext } from "./ExcelFormulaParser";
import { MulDivExprContext } from "./ExcelFormulaParser";
import { AddSubExprContext } from "./ExcelFormulaParser";
import { FormulaContext } from "./ExcelFormulaParser";
import { ExprContext } from "./ExcelFormulaParser";
import { LiteralContext } from "./ExcelFormulaParser";
import { CellReferenceContext } from "./ExcelFormulaParser";
import { FunctionCallContext } from "./ExcelFormulaParser";
import { ArgumentsContext } from "./ExcelFormulaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExcelFormulaParser`.
 */
export interface ExcelFormulaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `CellRefExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCellRefExpr?: (ctx: CellRefExprContext) => void;
	/**
	 * Exit a parse tree produced by the `CellRefExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCellRefExpr?: (ctx: CellRefExprContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionExpr?: (ctx: FunctionExprContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionExpr?: (ctx: FunctionExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ParensExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParensExpr?: (ctx: ParensExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ParensExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParensExpr?: (ctx: ParensExprContext) => void;

	/**
	 * Enter a parse tree produced by the `MulDivExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMulDivExpr?: (ctx: MulDivExprContext) => void;
	/**
	 * Exit a parse tree produced by the `MulDivExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMulDivExpr?: (ctx: MulDivExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AddSubExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddSubExpr?: (ctx: AddSubExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSubExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddSubExpr?: (ctx: AddSubExprContext) => void;

	/**
	 * Enter a parse tree produced by `ExcelFormulaParser.formula`.
	 * @param ctx the parse tree
	 */
	enterFormula?: (ctx: FormulaContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelFormulaParser.formula`.
	 * @param ctx the parse tree
	 */
	exitFormula?: (ctx: FormulaContext) => void;

	/**
	 * Enter a parse tree produced by `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `ExcelFormulaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelFormulaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ExcelFormulaParser.cellReference`.
	 * @param ctx the parse tree
	 */
	enterCellReference?: (ctx: CellReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelFormulaParser.cellReference`.
	 * @param ctx the parse tree
	 */
	exitCellReference?: (ctx: CellReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `ExcelFormulaParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelFormulaParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `ExcelFormulaParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ExcelFormulaParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
}

