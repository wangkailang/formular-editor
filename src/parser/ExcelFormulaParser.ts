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

import { ExcelFormulaVisitor } from "./ExcelFormulaVisitor";


export class ExcelFormulaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly FUNCTION_NAME = 5;
	public static readonly CELL_REFERENCE = 6;
	public static readonly NUMBER = 7;
	public static readonly STRING = 8;
	public static readonly WS = 9;
	public static readonly ADD = 10;
	public static readonly SUB = 11;
	public static readonly MUL = 12;
	public static readonly DIV = 13;
	public static readonly RULE_formula = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_arguments = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "expr", "arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'('", "')'", "','", undefined, undefined, undefined, 
		undefined, undefined, "'+'", "'-'", "'*'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "FUNCTION_NAME", 
		"CELL_REFERENCE", "NUMBER", "STRING", "WS", "ADD", "SUB", "MUL", "DIV",
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 6;
			this.match(ExcelFormulaParser.T__0);
			this.state = 7;
			this.expr(0);
			this.state = 8;
			this.match(ExcelFormulaParser.EOF);
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
			this.state = 24;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ExcelFormulaParser.T__1:
				{
				_localctx = new ParensContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 11;
				this.match(ExcelFormulaParser.T__1);
				this.state = 12;
				this.expr(0);
				this.state = 13;
				this.match(ExcelFormulaParser.T__2);
				}
				break;
			case ExcelFormulaParser.FUNCTION_NAME:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 15;
				this.match(ExcelFormulaParser.FUNCTION_NAME);
				this.state = 16;
				this.match(ExcelFormulaParser.T__1);
				this.state = 18;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExcelFormulaParser.T__1) | (1 << ExcelFormulaParser.FUNCTION_NAME) | (1 << ExcelFormulaParser.CELL_REFERENCE) | (1 << ExcelFormulaParser.NUMBER) | (1 << ExcelFormulaParser.STRING))) !== 0)) {
					{
					this.state = 17;
					this.arguments();
					}
				}

				this.state = 20;
				this.match(ExcelFormulaParser.T__2);
				}
				break;
			case ExcelFormulaParser.CELL_REFERENCE:
				{
				_localctx = new CellRefContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 21;
				this.match(ExcelFormulaParser.CELL_REFERENCE);
				}
				break;
			case ExcelFormulaParser.NUMBER:
				{
				_localctx = new NumberContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 22;
				this.match(ExcelFormulaParser.NUMBER);
				}
				break;
			case ExcelFormulaParser.STRING:
				{
				_localctx = new StringLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 23;
				this.match(ExcelFormulaParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 31;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BinaryOpContext(new ExprContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, ExcelFormulaParser.RULE_expr);
					this.state = 26;
					if (!(this.precpred(this._ctx, 6))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
					}
					this.state = 27;
					(_localctx as BinaryOpContext)._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ExcelFormulaParser.ADD) | (1 << ExcelFormulaParser.SUB) | (1 << ExcelFormulaParser.MUL) | (1 << ExcelFormulaParser.DIV))) !== 0))) {
						(_localctx as BinaryOpContext)._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 28;
					this.expr(7);
					}
					}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ExcelFormulaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.expr(0);
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ExcelFormulaParser.T__3) {
				{
				{
				this.state = 35;
				this.match(ExcelFormulaParser.T__3);
				this.state = 36;
				this.expr(0);
				}
				}
				this.state = 41;
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
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0F-\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x15" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03 \n\x03\f\x03\x0E\x03#\v\x03\x03\x04\x03\x04\x03\x04\x07" +
		"\x04(\n\x04\f\x04\x0E\x04+\v\x04\x03\x04\x02\x02\x03\x04\x05\x02\x02\x04" +
		"\x02\x06\x02\x02\x03\x03\x02\f\x0F\x020\x02\b\x03\x02\x02\x02\x04\x1A" +
		"\x03\x02\x02\x02\x06$\x03\x02\x02\x02\b\t\x07\x03\x02\x02\t\n\x05\x04" +
		"\x03\x02\n\v\x07\x02\x02\x03\v\x03\x03\x02\x02\x02\f\r\b\x03\x01\x02\r" +
		"\x0E\x07\x04\x02\x02\x0E\x0F\x05\x04\x03\x02\x0F\x10\x07\x05\x02\x02\x10" +
		"\x1B\x03\x02\x02\x02\x11\x12\x07\x07\x02\x02\x12\x14\x07\x04\x02\x02\x13" +
		"\x15\x05\x06\x04\x02\x14\x13\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15" +
		"\x16\x03\x02\x02\x02\x16\x1B\x07\x05\x02\x02\x17\x1B\x07\b\x02\x02\x18" +
		"\x1B\x07\t\x02\x02\x19\x1B\x07\n\x02\x02\x1A\f\x03\x02\x02\x02\x1A\x11" +
		"\x03\x02\x02\x02\x1A\x17\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1A\x19" +
		"\x03\x02\x02\x02\x1B!\x03\x02\x02\x02\x1C\x1D\f\b\x02\x02\x1D\x1E\t\x02" +
		"\x02\x02\x1E \x05\x04\x03\t\x1F\x1C\x03\x02\x02\x02 #\x03\x02\x02\x02" +
		"!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"\x05\x03\x02\x02\x02#!\x03\x02" +
		"\x02\x02$)\x05\x04\x03\x02%&\x07\x06\x02\x02&(\x05\x04\x03\x02\'%\x03" +
		"\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*\x07" +
		"\x03\x02\x02\x02+)\x03\x02\x02\x02\x06\x14\x1A!)";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExcelFormulaParser.__ATN) {
			ExcelFormulaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExcelFormulaParser._serializedATN));
		}

		return ExcelFormulaParser.__ATN;
	}

}

export class FormulaContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public EOF(): TerminalNode { return this.getToken(ExcelFormulaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ExcelFormulaParser.RULE_formula; }
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
export class BinaryOpContext extends ExprContext {
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
	public ADD(): TerminalNode | undefined { return this.tryGetToken(ExcelFormulaParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(ExcelFormulaParser.SUB, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(ExcelFormulaParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(ExcelFormulaParser.DIV, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitBinaryOp) {
			return visitor.visitBinaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitParens) {
			return visitor.visitParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends ExprContext {
	public FUNCTION_NAME(): TerminalNode { return this.getToken(ExcelFormulaParser.FUNCTION_NAME, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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
export class CellRefContext extends ExprContext {
	public CELL_REFERENCE(): TerminalNode { return this.getToken(ExcelFormulaParser.CELL_REFERENCE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitCellRef) {
			return visitor.visitCellRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberContext extends ExprContext {
	public NUMBER(): TerminalNode { return this.getToken(ExcelFormulaParser.NUMBER, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends ExprContext {
	public STRING(): TerminalNode { return this.getToken(ExcelFormulaParser.STRING, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
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
	public accept<Result>(visitor: ExcelFormulaVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


