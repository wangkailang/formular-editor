// Generated from ExcelFormula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ExcelFormulaListener } from "./ExcelFormulaListener";
import { ExcelFormulaVisitor } from "./ExcelFormulaVisitor";


export class ExcelFormulaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly FUNCTION_NAME = 8;
	public static readonly CELL_REFERENCE = 9;
	public static readonly NUMBER = 10;
	public static readonly STRING = 11;
	public static readonly WS = 12;
	public static readonly RULE_formula = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_literal = 2;
	public static readonly RULE_cellReference = 3;
	public static readonly RULE_functionCall = 4;
	public static readonly RULE_arguments = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "expr", "literal", "cellReference", "functionCall", "arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'*'", "'/'", "'+'", "'-'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "FUNCTION_NAME", "CELL_REFERENCE", "NUMBER", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExcelFormulaParser._LITERAL_NAMES, ExcelFormulaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExcelFormulaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ExcelFormula.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExcelFormulaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExcelFormulaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ExcelFormulaParser._ATN, this);
	}
	// @RuleVersion(0)
	public formula(): FormulaContext {
		let _localctx: FormulaContext = new FormulaContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ExcelFormulaParser.RULE_formula);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.expr(0);
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExcelFormulaParser.T__0) | (1 << ExcelFormulaParser.FUNCTION_NAME) | (1 << ExcelFormulaParser.CELL_REFERENCE) | (1 << ExcelFormulaParser.NUMBER) | (1 << ExcelFormulaParser.STRING))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, ExcelFormulaParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExcelFormulaParser.NUMBER:
			case ExcelFormulaParser.STRING:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 18;
				this.literal();
				}
				break;
			case ExcelFormulaParser.CELL_REFERENCE:
				{
				_localctx = new CellRefExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 19;
				this.cellReference();
				}
				break;
			case ExcelFormulaParser.FUNCTION_NAME:
				{
				_localctx = new FunctionExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 20;
				this.functionCall();
				}
				break;
			case ExcelFormulaParser.T__0:
				{
				_localctx = new ParensExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 21;
				this.match(ExcelFormulaParser.T__0);
				this.state = 22;
				this.expr(0);
				this.state = 23;
				this.match(ExcelFormulaParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 35;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 33;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new MulDivExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExcelFormulaParser.RULE_expr);
						this.state = 27;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 28;
						(_localctx as MulDivExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ExcelFormulaParser.T__2 || _la === ExcelFormulaParser.T__3)) {
							(_localctx as MulDivExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 29;
						this.expr(3);
						}
						break;

					case 2:
						{
						_localctx = new AddSubExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ExcelFormulaParser.RULE_expr);
						this.state = 30;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 31;
						(_localctx as AddSubExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ExcelFormulaParser.T__4 || _la === ExcelFormulaParser.T__5)) {
							(_localctx as AddSubExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 32;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ExcelFormulaParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			_la = this._input.LA(1);
			if (!(_la === ExcelFormulaParser.NUMBER || _la === ExcelFormulaParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cellReference(): CellReferenceContext {
		let _localctx: CellReferenceContext = new CellReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ExcelFormulaParser.RULE_cellReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(ExcelFormulaParser.CELL_REFERENCE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ExcelFormulaParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(ExcelFormulaParser.FUNCTION_NAME);
			this.state = 43;
			this.match(ExcelFormulaParser.T__0);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExcelFormulaParser.T__0) | (1 << ExcelFormulaParser.FUNCTION_NAME) | (1 << ExcelFormulaParser.CELL_REFERENCE) | (1 << ExcelFormulaParser.NUMBER) | (1 << ExcelFormulaParser.STRING))) !== 0)) {
				{
				this.state = 44;
				this.arguments();
				}
			}

			this.state = 47;
			this.match(ExcelFormulaParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ExcelFormulaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.expr(0);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ExcelFormulaParser.T__6) {
				{
				{
				this.state = 50;
				this.match(ExcelFormulaParser.T__6);
				this.state = 51;
				this.expr(0);
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E<\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03$\n\x03\f\x03\x0E\x03" +
		"\'\v\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06" +
		"0\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x077\n\x07\f\x07\x0E" +
		"\x07:\v\x07\x03\x07\x02\x02\x03\x04\b\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x02\x05\x03\x02\x05\x06\x03\x02\x07\b\x03\x02\f\r\x02=\x02" +
		"\x0F\x03\x02\x02\x02\x04\x1B\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b*\x03" +
		"\x02\x02\x02\n,\x03\x02\x02\x02\f3\x03\x02\x02\x02\x0E\x10\x05\x04\x03" +
		"\x02\x0F\x0E\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\x0F\x03\x02\x02" +
		"\x02\x11\x12\x03\x02\x02\x02\x12\x03\x03\x02\x02\x02\x13\x14\b\x03\x01" +
		"\x02\x14\x1C\x05\x06\x04\x02\x15\x1C\x05\b\x05\x02\x16\x1C\x05\n\x06\x02" +
		"\x17\x18\x07\x03\x02\x02\x18\x19\x05\x04\x03\x02\x19\x1A\x07\x04\x02\x02" +
		"\x1A\x1C\x03\x02\x02\x02\x1B\x13\x03\x02\x02\x02\x1B\x15\x03\x02\x02\x02" +
		"\x1B\x16\x03\x02\x02\x02\x1B\x17\x03\x02\x02\x02\x1C%\x03\x02\x02\x02" +
		"\x1D\x1E\f\x04\x02\x02\x1E\x1F\t\x02\x02\x02\x1F$\x05\x04\x03\x05 !\f" +
		"\x03\x02\x02!\"\t\x03\x02\x02\"$\x05\x04\x03\x04#\x1D\x03\x02\x02\x02" +
		"# \x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02" +
		"\x02&\x05\x03\x02\x02\x02\'%\x03\x02\x02\x02()\t\x04\x02\x02)\x07\x03" +
		"\x02\x02\x02*+\x07\v\x02\x02+\t\x03\x02\x02\x02,-\x07\n\x02\x02-/\x07" +
		"\x03\x02\x02.0\x05\f\x07\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03" +
		"\x02\x02\x0212\x07\x04\x02\x022\v\x03\x02\x02\x0238\x05\x04\x03\x0245" +
		"\x07\t\x02\x0257\x05\x04\x03\x0264\x03\x02\x02\x027:\x03\x02\x02\x028" +
		"6\x03\x02\x02\x0289\x03\x02\x02\x029\r\x03\x02\x02\x02:8\x03\x02\x02\x02" +
		"\b\x11\x1B#%/8";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExcelFormulaParser.__ATN) {
			ExcelFormulaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExcelFormulaParser._serializedATN));
		}

		return ExcelFormulaParser.__ATN;
	}

}

export class FormulaContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExcelFormulaParser.RULE_formula; }
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterFormula) {
			listener.enterFormula(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitFormula) {
			listener.exitFormula(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitFormula) {
			return visitor.visitFormula(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExcelFormulaParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExprContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CellRefExprContext extends ExprContext {
	public cellReference(): CellReferenceContext {
		return this.getRuleContext(0, CellReferenceContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterCellRefExpr) {
			listener.enterCellRefExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitCellRefExpr) {
			listener.exitCellRefExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitCellRefExpr) {
			return visitor.visitCellRefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionExprContext extends ExprContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterFunctionExpr) {
			listener.enterFunctionExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitFunctionExpr) {
			listener.exitFunctionExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitFunctionExpr) {
			return visitor.visitFunctionExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterParensExpr) {
			listener.enterParensExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitParensExpr) {
			listener.exitParensExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitParensExpr) {
			return visitor.visitParensExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterMulDivExpr) {
			listener.enterMulDivExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitMulDivExpr) {
			listener.exitMulDivExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitMulDivExpr) {
			return visitor.visitMulDivExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterAddSubExpr) {
			listener.enterAddSubExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitAddSubExpr) {
			listener.exitAddSubExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitAddSubExpr) {
			return visitor.visitAddSubExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ExcelFormulaParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ExcelFormulaParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExcelFormulaParser.RULE_literal; }
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CellReferenceContext extends ParserRuleContext {
	public CELL_REFERENCE(): TerminalNode { return this.getToken(ExcelFormulaParser.CELL_REFERENCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExcelFormulaParser.RULE_cellReference; }
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterCellReference) {
			listener.enterCellReference(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitCellReference) {
			listener.exitCellReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitCellReference) {
			return visitor.visitCellReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public FUNCTION_NAME(): TerminalNode { return this.getToken(ExcelFormulaParser.FUNCTION_NAME, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExcelFormulaParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExcelFormulaParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ExcelFormulaListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ExcelFormulaListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


