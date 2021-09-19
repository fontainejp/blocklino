/*
    Ffau - A blocky-based editor for teaching HTML & CSS .
	Developed by Pal Kerecsenyi, Geza Kerecsenyi and Oli Plant.
	Full details are avaliable at the Github repo: https://github.com/codeddraig/ffau
	Copyright (c) 2017-19 The CodeDdraig Organisation
	THIS IS VERSION 1.2.2
*/
'use strict';
goog.provide('Blockly.html');
goog.require('Blockly.Generator');
Blockly.html = new Blockly.Generator('html');
Blockly.html.addReservedWords("break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments");

Blockly.html.init = function (workspace) {
	Blockly.html.variables_ = Object.create(null);
	if (!Blockly.html.variableDB_) {
		Blockly.html.variableDB_ = new Blockly.Names(Blockly.html.RESERVED_WORDS_)
	} else {
		Blockly.html.variableDB_.reset()
	}
}
Blockly.html.finish = function (code) {
	var variables = [];
	for (var name in Blockly.html.variables_) variables.push(Blockly.html.variables_[name]);
	if (variables.length) variables.push('\n');
	return code
}
Blockly.html.addVariable = function(varName, code, overwrite) {
	var overwritten = false;
	if (overwrite || (Blockly.html.variables_[varName] === undefined)) {
		Blockly.html.variables_[varName] = code;
		overwritten = true
	}
	return overwritten
}
Blockly.html.scrub_ = function (block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.html.blockToCode(nextBlock);
    return code + nextCode
}
