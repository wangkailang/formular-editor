// Generated from ExcelFormula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { BinaryOpContext } from "./ExcelFormulaParser";
import { ParensContext } from "./ExcelFormulaParser";
import { FunctionCallContext } from "./ExcelFormulaParser";
import { CellRefContext } from "./ExcelFormulaParser";
import { NumberContext } from "./ExcelFormulaParser";
import { StringLiteralContext } from "./ExcelFormulaParser";
import { FormulaContext } from "./ExcelFormulaParser";
import { ExprContext } from "./ExcelFormulaParser";
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
	 * Visit a parse tree produced by the `BinaryOp`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOp?: (ctx: BinaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `Parens`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParens?: (ctx: ParensContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionCall`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `CellRef`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellRef?: (ctx: CellRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `Number`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringLiteral`
	 * labeled alternative in `ExcelFormulaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

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
	 * Visit a parse tree produced by `ExcelFormulaParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
}

