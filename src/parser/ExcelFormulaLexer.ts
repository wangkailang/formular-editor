// Generated from ExcelFormula.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ExcelFormulaLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "FUNCTION_NAME", "CELL_REFERENCE", "NUMBER", 
		"STRING", "WS", "ADD", "SUB", "MUL", "DIV",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'('", "')'", "','", undefined, undefined, undefined, 
		undefined, undefined, "'+'", "'-'", "'*'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "FUNCTION_NAME", 
		"CELL_REFERENCE", "NUMBER", "STRING", "WS", "ADD", "SUB", "MUL", "DIV",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExcelFormulaLexer._LITERAL_NAMES, ExcelFormulaLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExcelFormulaLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ExcelFormulaLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "ExcelFormula.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExcelFormulaLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExcelFormulaLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ExcelFormulaLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ExcelFormulaLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0F_\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x06\x06\'\n\x06\r\x06\x0E\x06(\x03\x06\x07\x06,\n\x06" +
		"\f\x06\x0E\x06/\v\x06\x03\x07\x06\x072\n\x07\r\x07\x0E\x073\x03\x07\x06" +
		"\x077\n\x07\r\x07\x0E\x078\x03\b\x06\b<\n\b\r\b\x0E\b=\x03\b\x03\b\x06" +
		"\bB\n\b\r\b\x0E\bC\x05\bF\n\b\x03\t\x03\t\x07\tJ\n\t\f\t\x0E\tM\v\t\x03" +
		"\t\x03\t\x03\n\x06\nR\n\n\r\n\x0E\nS\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x03K\x02\x02\x0F\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x03\x02\x07\x04\x02C\\c|" +
		"\x05\x022;C\\c|\x03\x02C\\\x03\x022;\x05\x02\v\f\x0F\x0F\"\"\x02g\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x03\x1D\x03\x02\x02\x02\x05\x1F\x03\x02\x02\x02\x07!" +
		"\x03\x02\x02\x02\t#\x03\x02\x02\x02\v&\x03\x02\x02\x02\r1\x03\x02\x02" +
		"\x02\x0F;\x03\x02\x02\x02\x11G\x03\x02\x02\x02\x13Q\x03\x02\x02\x02\x15" +
		"W\x03\x02\x02\x02\x17Y\x03\x02\x02\x02\x19[\x03\x02\x02\x02\x1B]\x03\x02" +
		"\x02\x02\x1D\x1E\x07?\x02\x02\x1E\x04\x03\x02\x02\x02\x1F \x07*\x02\x02" +
		" \x06\x03\x02\x02\x02!\"\x07+\x02\x02\"\b\x03\x02\x02\x02#$\x07.\x02\x02" +
		"$\n\x03\x02\x02\x02%\'\t\x02\x02\x02&%\x03\x02\x02\x02\'(\x03\x02\x02" +
		"\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)-\x03\x02\x02\x02*,\t\x03\x02" +
		"\x02+*\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02" +
		"\x02.\f\x03\x02\x02\x02/-\x03\x02\x02\x0202\t\x04\x02\x0210\x03\x02\x02" +
		"\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0246\x03\x02\x02" +
		"\x0257\t\x05\x02\x0265\x03\x02\x02\x0278\x03\x02\x02\x0286\x03\x02\x02" +
		"\x0289\x03\x02\x02\x029\x0E\x03\x02\x02\x02:<\t\x05\x02\x02;:\x03\x02" +
		"\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>E\x03\x02" +
		"\x02\x02?A\x070\x02\x02@B\t\x05\x02\x02A@\x03\x02\x02\x02BC\x03\x02\x02" +
		"\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x03\x02\x02\x02E?\x03\x02\x02" +
		"\x02EF\x03\x02\x02\x02F\x10\x03\x02\x02\x02GK\x07$\x02\x02HJ\v\x02\x02" +
		"\x02IH\x03\x02\x02\x02JM\x03\x02\x02\x02KL\x03\x02\x02\x02KI\x03\x02\x02" +
		"\x02LN\x03\x02\x02\x02MK\x03\x02\x02\x02NO\x07$\x02\x02O\x12\x03\x02\x02" +
		"\x02PR\t\x06\x02\x02QP\x03\x02\x02\x02RS\x03\x02\x02\x02SQ\x03\x02\x02" +
		"\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UV\b\n\x02\x02V\x14\x03\x02\x02" +
		"\x02WX\x07-\x02\x02X\x16\x03\x02\x02\x02YZ\x07/\x02\x02Z\x18\x03\x02\x02" +
		"\x02[\\\x07,\x02\x02\\\x1A\x03\x02\x02\x02]^\x071\x02\x02^\x1C\x03\x02" +
		"\x02\x02\f\x02(-38=CEKS\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExcelFormulaLexer.__ATN) {
			ExcelFormulaLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExcelFormulaLexer._serializedATN));
		}

		return ExcelFormulaLexer.__ATN;
	}

}

