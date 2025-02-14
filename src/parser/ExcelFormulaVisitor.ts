// Generated from ExcelFormula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExcelFormulaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ExcelFormulaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `CellRefExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellRefExpr?: (ctx: CellRefExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionExpr?: (ctx: FunctionExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParensExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParensExpr?: (ctx: ParensExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `MulDivExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivExpr?: (ctx: MulDivExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSubExpr`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubExpr?: (ctx: AddSubExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ExcelFormulaParser.formula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormula?: (ctx: FormulaContext) => Result;

	/**
	 * Visit a parse tree produced by `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ExcelFormulaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ExcelFormulaParser.cellReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellReference?: (ctx: CellReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ExcelFormulaParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ExcelFormulaParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
}

