'use strict';
goog.provide('Blockly.html');
goog.require('Blockly.Generator');

Blockly.html.quote_ = function(string) {
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\"' + string + '\"';
};

// controle
Blockly.html['controls_switch']=function(block){
    var n = 0;
    var switchvar = Blockly.html.variableDB_.getName(block.getFieldValue('SWVAR'), Blockly.Variables.NAME_TYPE);
    var argument = Blockly.html.valueToCode(block, 'CASE' + n, Blockly.html.ORDER_NONE);
    var branch = Blockly.html.statementToCode(block, 'DO' + n);
    var code = 'switch (' + switchvar + ') {\n' + 'case ' + argument + ': \n' + branch + '  break;\n';
    for (n = 1; n <= block.casebreakCount_; n++) {
        argument = Blockly.html.valueToCode(block, 'CASE' + n, Blockly.html.ORDER_NONE);
        branch = Blockly.html.statementToCode(block, 'DO' + n);
        code += ' case ' + argument + ': \n' + branch + '  break;\n';
    }
    if (block.defaultCount_) {
        branch = Blockly.html.statementToCode(block, 'DEFAULT');
        code += ' default :\n' + branch + ' ';
    }
    code += '}\n'
    return code;
};
Blockly.html["controls_for"]=function(block){
    var variable0 = Blockly.html.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.html.valueToCode(block, "FROM", Blockly.html.ORDER_ASSIGNMENT);
    var argument1 = Blockly.html.valueToCode(block, "TO", Blockly.html.ORDER_ASSIGNMENT);
    var argument2 = Blockly.html.valueToCode(block, "BY", Blockly.html.ORDER_ASSIGNMENT);
    var branch = Blockly.html.statementToCode(block, "DO");
    if (Blockly.html.INFINITE_LOOP_TRAP) branch = Blockly.html.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    return "for (" + variable0 + "=" + argument0 + "; " + variable0 + "<=" + argument1 + "; " + variable0 + "=" + variable0 + "+" + argument2 + ") {\n" + branch + "}\n"
};
Blockly.html["controls_if"]=function(block){
    var n = 0;
    var argument = Blockly.html.statementToCode(block, "IF" + n, Blockly.html.ORDER_ATOMIC).trim();
    var branch = Blockly.html.statementToCode(block, "DO" + n);
    var code = "if (" + argument + ") {\n" + branch + "}";
    for (n = 1; n <= block.elseifCount_; n++) {
        argument = Blockly.html.valueToCode(block, "IF" + n, Blockly.html.ORDER_NONE);
        branch = Blockly.html.statementToCode(block, "DO" + n);
        code += " else if (" + argument + ") {\n" + branch + "}"
    }
    if (block.elseCount_) {
        branch = Blockly.html.statementToCode(block, "ELSE");
        code += " else {\n" + branch + "}"
    }
    return code + "\n"
};
Blockly.html["controls_repeat_ext"]=function(block){
    var repeats = Blockly.html.valueToCode(block, "TIMES", Blockly.html.ORDER_ASSIGNMENT);
    var branch = Blockly.html.statementToCode(block, "DO");
    if (Blockly.html.INFINITE_LOOP_TRAP) branch = Blockly.html.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var loopVar = Blockly.html.variableDB_.getName("count", Blockly.Variables.NAME_TYPE);
    var code = "for (int " + loopVar + "=0; " + loopVar + "<" + repeats + "; " + loopVar + "++) {\n" + branch + "}\n";
    return code
};
Blockly.html["controls_whileUntil"]=function(block){
    var argument0 = Blockly.html.valueToCode(block, "BOOL", Blockly.html.ORDER_NONE);
    var branch = Blockly.html.statementToCode(block, "DO");
    if (Blockly.html.INFINITE_LOOP_TRAP) branch = Blockly.html.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    if (block.getFieldValue("MODE") == "UNTIL") {
        if (!argument0.match(/^\w+$/)) argument0 = "(" + argument0 + ")";
        argument0 = "!" + argument0
    }
    return "while (" + argument0 + ") {\n" + branch + "}\n"
};
Blockly.html["controls_forEach"]=function(block){
    var variable0 = Blockly.html.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.html.valueToCode(block, "LIST", Blockly.html.ORDER_ASSIGNMENT);
    var branch = Blockly.html.statementToCode(block, "DO");
    if (Blockly.html.INFINITE_LOOP_TRAP) branch = Blockly.html.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code = "for (var " + variable0 + " in  " + argument0 + ") {\n" + branch + "}\n";
    return code
};
Blockly.html["controls_flow_statements"]=function(block){
    switch (block.getFieldValue("FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n"
    }
    throw "Unknown flow statement.";
};
Blockly.html["logic_operation"]=function(block){
    var operator = block.getFieldValue("OP");
    var argument0 = Blockly.html.statementToCode(block, "A", Blockly.html.ORDER_ATOMIC).trim();
    var argument1 = Blockly.html.statementToCode(block, "B", Blockly.html.ORDER_ATOMIC).trim();
    return argument0 + " " + operator + " " + argument1
}
Blockly.html["logic_negate"]=function(block){
    var argument0 = Blockly.html.statementToCode(block, "BOOL", Blockly.html.ORDER_ATOMIC);
    return "!" + argument0
};
Blockly.html["logic_null"]=function(block){
    return "null"
}
Blockly.html["true_false"]=function(block){
    return block.getFieldValue("BOOL")
};
// math
Blockly.html["logic_compare"]=function(block){
    var operator = block.getFieldValue("OP");
    var argument0 = Blockly.html.statementToCode(block, "A", Blockly.html.ORDER_ATOMIC).trim();
    var argument1 = Blockly.html.statementToCode(block, "B", Blockly.html.ORDER_ATOMIC).trim();
    return argument0 + " " + operator + " " + argument1
};
Blockly.html['intervalle']=function(block){
    var OPERATORS = {
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
    };
    var value_inf = Blockly.html.valueToCode(block, 'inf', Blockly.html.ORDER_ATOMIC);
    var dropdown_comp_inf = block.getFieldValue('comp_inf');
    var value_valeur = Blockly.html.valueToCode(block, 'valeur', Blockly.html.ORDER_ATOMIC);
    var dropdown_comp_sup = OPERATORS[block.getFieldValue('comp_sup')];
    var value_sup = Blockly.html.valueToCode(block, 'sup', Blockly.html.ORDER_ATOMIC);
    var code = '';
    if (dropdown_comp_inf == 'LT') {
        code += '(' + value_valeur + ' > ' + value_inf + ')';
    }
    if (dropdown_comp_inf == 'GT') {
        code += '(' + value_valeur + ' < ' + value_inf + ' )';
    }
    if (dropdown_comp_inf == 'GTE') {
        code += '(' + value_valeur + ' <= ' + value_inf + ' )';
    }
    if (dropdown_comp_inf == 'LTE') {
        code += '(' + value_valeur + ' >= ' + value_inf + ' )';
    }
    code += ' && ( ' + value_valeur + ' ' + dropdown_comp_sup + ' ' + value_sup + ')';
    return code
};
Blockly.html["math_number"]=function(block){
    return block.getFieldValue("NUM")
};
Blockly.html["math_arithmetic"]=function(block){
    var operator = block.getFieldValue("OP");
    var argument0 = Blockly.html.statementToCode(block, "A", Blockly.html.ORDER_ATOMIC).trim();
    var argument1 = Blockly.html.statementToCode(block, "B", Blockly.html.ORDER_ATOMIC).trim();
	if (operator=="POWER") {
		return "Math.pow(" + argument0 + ", " + argument1 + ")";
	} else {
		return argument0 + " " + operator + " " + argument1 ;
	}
};
Blockly.html["math_single"]=function(block){
    var operator = block.getFieldValue("OP");
    var arg = Blockly.html.statementToCode(block, "NUM", Blockly.html.ORDER_ATOMIC).trim();
    var code;
    switch (operator) {
        case "NEG":
            code = "-"+ arg;
            break;
        case "ABS":
            code = "Math.abs(" + arg + ")";
            break;
        case "ROOT":
            code = "Math.sqrt(" + arg + ")";
            break;
        case "ROUND":
            code = "Math.round(" + arg + ")";
            break;
        case "ROUNDUP":
            code = "Math.ceil(" + arg + ")";
            break;
        case "ROUNDDOWN":
            code = "Math.floor(" + arg + ")";
            break;
        case "SIN":
            code = "Math.sin(" + arg + ")";
            break;
        case "COS":
            code = "Math.cos(" + arg + ")";
            break;
        case "TAN":
            code = "Math.tan(" + arg + ")";
            break;
    }
    return code
};
Blockly.html["math_constant"]=function(block){
    return block.getFieldValue("CONSTANT")
};
Blockly.html["math_number_property"]=function(block){
    var number_to_check = Blockly.html.valueToCode(block, "NUMBER_TO_CHECK", Blockly.html.ORDER_MODULUS);
    var dropdown_property = block.getFieldValue("PROPERTY");
    var code;
    if (dropdown_property == "PRIME") {
        var functionName = Blockly.html.provideFunction_("math_isPrime", ["function " + Blockly.html.FUNCTION_NAME_PLACEHOLDER_ + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||" + " n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).", "  for (var x = 6; x <= sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"]);
        code = functionName + "(" + number_to_check + ")";
        return [code, Blockly.html.ORDER_FUNCTION_CALL]
    }
    switch (dropdown_property) {
        case "EVEN":
            code = number_to_check + " % 2 == 0";
            break;
        case "ODD":
            code = number_to_check + " % 2 == 1";
            break;
        case "WHOLE":
            code = number_to_check + " % 1 == 0";
            break;
        case "POSITIVE":
            code = number_to_check + " > 0";
            break;
        case "NEGATIVE":
            code = number_to_check + " < 0";
            break;
        case "DIVISIBLE_BY":
            var divisor = Blockly.html.valueToCode(block, "DIVISOR", Blockly.html.ORDER_MODULUS);
            code = number_to_check + " % " + divisor + " == 0";
            break
    }
    return [code, Blockly.html.ORDER_EQUALITY]
};
Blockly.html["math_round"] = Blockly.html["math_single"];
Blockly.html["math_trig"] = Blockly.html["math_single"];
Blockly.html["math_modulo"]=function(block){
    var argument0 = Blockly.html.valueToCode(block, "DIVIDEND", Blockly.html.ORDER_MODULUS);
    var argument1 = Blockly.html.valueToCode(block, "DIVISOR", Blockly.html.ORDER_MODULUS);
    return argument0 + " % " + argument1
};
Blockly.html["math_random_int"]=function(block){
    var argument0 = Blockly.html.statementToCode(block, "FROM", Blockly.html.ORDER_ATOMIC).trim();
    var argument1 = Blockly.html.statementToCode(block, "TO", Blockly.html.ORDER_ATOMIC).trim();
	return "Math.trunc(" + argument0 + "+" + argument1 + "*Math.random())" 
};
// texte
Blockly.html["text_char"]=function(block){
    return block.getFieldValue('TEXT')
};
Blockly.html["text"]=function(block){
    return Blockly.html.quote_(block.getFieldValue("TEXT"))
};
Blockly.html["text_2"]=function(block){
    return Blockly.html.quote_(block.getFieldValue("TEXT1"))+", "+Blockly.html.quote_(block.getFieldValue("TEXT2"))
};
Blockly.html["text_join"]=function(block){
    var code;
    if (block.itemCount_ == 0) return ['""', Blockly.html.ORDER_ATOMIC];
    else if (block.itemCount_ == 1) {
        var argument0 = Blockly.html.valueToCode(block, "ADD0", Blockly.html.ORDER_UNARY_POSTFIX);
        code = "String(" + argument0 + ")";
        return [code, Blockly.html.ORDER_UNARY_POSTFIX]
    } else {
        var argument;
        code = [];
        for (var n = 0; n < block.itemCount_; n++) {
            argument = Blockly.html.valueToCode(block, "ADD" + n, Blockly.html.ORDER_NONE);
            if (argument == "") code[n] = '""';
            else code[n] = "String(" + argument + ")"
        }
        code = code.join(" + ");
        return [code, Blockly.html.ORDER_UNARY_POSTFIX]
    }
};
Blockly.html["text_length"]=function(block){
    var argument0 = Blockly.html.valueToCode(block, "VALUE", Blockly.html.ORDER_UNARY_POSTFIX);
    var code = "String(" + argument0 + ").length()";
    return [code, Blockly.html.ORDER_UNARY_POSTFIX]
};
Blockly.html["text_isEmpty"]=function(block){
    var func = [];
    func.push("boolean " + Blockly.html.DEF_FUNC_NAME + "(String msg) {");
    func.push("  if (msg.length() == 0) {");
    func.push("    return true;");
    func.push("  } else {");
    func.push("    return false;");
    func.push("  }");
    func.push("}");
    var funcName = Blockly.html.addFunction("isStringEmpty", func.join("\n"));
    var argument0 = Blockly.html.valueToCode(block, "VALUE", Blockly.html.ORDER_UNARY_POSTFIX);
    if (argument0 == "") argument0 = '""';
    else argument0 = "String(" + argument0 + ")";
    var code = funcName + "(" + argument0 + ")";
    return [code, Blockly.html.ORDER_UNARY_POSTFIX]
};
// variable
Blockly.html["math_change"]=function(block){
    var argument0 = Blockly.html.statementToCode(block, "DELTA", Blockly.html.ORDER_ADDITIVE).trim();
    var varName = Blockly.html.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var code = varName + " = " + varName + " + " + argument0 + ";\n";
    return code
};
Blockly.html['variables_get']=function(block){
    return Blockly.html.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
};
Blockly.html['variables_set']=function(block){
    var argument0 = Blockly.html.statementToCode(block, 'VALUE', Blockly.html.ORDER_ASSIGNMENT).trim();
    var varName = Blockly.html.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + ' = ' + argument0 + ';\n';
    return code;
};
Blockly.html['variables_set_init']=function(block){
	var argument0 = Blockly.html.statementToCode(block, 'VALUE', Blockly.html.ORDER_ASSIGNMENT).trim();
	var varName = Blockly.html.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	return 'var ' + varName + ' = ' + argument0 + ';\n'
};
