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
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly FUNCTION_NAME = 8;
	public static readonly CELL_REFERENCE = 9;
	public static readonly NUMBER = 10;
	public static readonly STRING = 11;
	public static readonly WS = 12;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "FUNCTION_NAME", 
		"CELL_REFERENCE", "NUMBER", "STRING", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'*'", "'/'", "'+'", "'-'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "FUNCTION_NAME", "CELL_REFERENCE", "NUMBER", "STRING", "WS",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0EX\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x06\t+\n\t\r\t\x0E\t,\x03\n" +
		"\x06\n0\n\n\r\n\x0E\n1\x03\n\x06\n5\n\n\r\n\x0E\n6\x03\v\x05\v:\n\v\x03" +
		"\v\x06\v=\n\v\r\v\x0E\v>\x03\v\x03\v\x06\vC\n\v\r\v\x0E\vD\x05\vG\n\v" +
		"\x03\f\x03\f\x07\fK\n\f\f\f\x0E\fN\v\f\x03\f\x03\f\x03\r\x06\rS\n\r\r" +
		"\r\x0E\rT\x03\r\x03\r\x03L\x02\x02\x0E\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x03\x02\x06\x04\x02C\\c|\x03\x02C\\\x03\x022" +
		";\x05\x02\v\f\x0F\x0F\"\"\x02`\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
		"\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1D\x03\x02\x02" +
		"\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\v#\x03\x02\x02\x02\r%" +
		"\x03\x02\x02\x02\x0F\'\x03\x02\x02\x02\x11*\x03\x02\x02\x02\x13/\x03\x02" +
		"\x02\x02\x159\x03\x02\x02\x02\x17H\x03\x02\x02\x02\x19R\x03\x02\x02\x02" +
		"\x1B\x1C\x07*\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x07+\x02\x02\x1E" +
		"\x06\x03\x02\x02\x02\x1F \x07,\x02\x02 \b\x03\x02\x02\x02!\"\x071\x02" +
		"\x02\"\n\x03\x02\x02\x02#$\x07-\x02\x02$\f\x03\x02\x02\x02%&\x07/\x02" +
		"\x02&\x0E\x03\x02\x02\x02\'(\x07.\x02\x02(\x10\x03\x02\x02\x02)+\t\x02" +
		"\x02\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02" +
		"\x02\x02-\x12\x03\x02\x02\x02.0\t\x03\x02\x02/.\x03\x02\x02\x0201\x03" +
		"\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0235\t" +
		"\x04\x02\x0243\x03\x02\x02\x0256\x03\x02\x02\x0264\x03\x02\x02\x0267\x03" +
		"\x02\x02\x027\x14\x03\x02\x02\x028:\x07/\x02\x0298\x03\x02\x02\x029:\x03" +
		"\x02\x02\x02:<\x03\x02\x02\x02;=\t\x04\x02\x02<;\x03\x02\x02\x02=>\x03" +
		"\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?F\x03\x02\x02\x02@B\x07" +
		"0\x02\x02AC\t\x04\x02\x02BA\x03\x02\x02\x02CD\x03\x02\x02\x02DB\x03\x02" +
		"\x02\x02DE\x03\x02\x02\x02EG\x03\x02\x02\x02F@\x03\x02\x02\x02FG\x03\x02" +
		"\x02\x02G\x16\x03\x02\x02\x02HL\x07$\x02\x02IK\v\x02\x02\x02JI\x03\x02" +
		"\x02\x02KN\x03\x02\x02\x02LM\x03\x02\x02\x02LJ\x03\x02\x02\x02MO\x03\x02" +
		"\x02\x02NL\x03\x02\x02\x02OP\x07$\x02\x02P\x18\x03\x02\x02\x02QS\t\x05" +
		"\x02\x02RQ\x03\x02\x02\x02ST\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02" +
		"\x02\x02UV\x03\x02\x02\x02VW\b\r\x02\x02W\x1A\x03\x02\x02\x02\f\x02,1" +
		"69>DFLT\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExcelFormulaLexer.__ATN) {
			ExcelFormulaLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExcelFormulaLexer._serializedATN));
		}

		return ExcelFormulaLexer.__ATN;
	}

}

