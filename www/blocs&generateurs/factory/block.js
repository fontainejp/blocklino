'use strict';

var ALIGNMENT_OPTIONS = [['à gauche', 'LEFT'], ['à droite', 'RIGHT'], ['centré', 'CENTRE']];
var dropdown_colour = [["gris foncé", "#727272"],["vert clair", "#00CC00"],["rose", "#FD6C9E"],["marron", "#804000"],["orange", "#FFA500"],["rouge", "#FF0000"],["violet", "#4a235a"],["vert olive", "#787746"],["gris clair", "#bbbbbb"],["vert foncé", "#006000"],["bleu marine", "#154360"]];

Blockly.Blocks['factory_base'] = { init: function() {
	this.contextMenu = false;
    this.setColour("#154360");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('monbloc'), 'NAME');
    this.appendStatementInput('INPUTS').setCheck('Input');
    var dropdown = new Blockly.FieldDropdown([
        ['bloc externe', 'EXT'],
        ['bloc interne', 'INT']]);
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(dropdown, 'INLINE');
    dropdown = new Blockly.FieldDropdown([
        ["pas d'accroches", 'NONE'],
        ['↑ accroche en haut', 'TOP'],
        ['↓ accroche en bas', 'BOTTOM'],
        ['↕ accroches haut&bas', 'BOTH'],
        ['← accroche à gauche', 'LEFT']],
        function(option) {
          this.sourceBlock_.updateShape_(option);
        });
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(dropdown, 'CONNECTIONS');
    this.appendValueInput('COLOUR').setAlign(Blockly.ALIGN_RIGHT).setCheck('Colour').appendField('couleur')
  },
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('connections', this.getFieldValue('CONNECTIONS'));
    return container;
  },
  domToMutation: function(xmlElement) {
    var connections = xmlElement.getAttribute('connections');
    this.updateShape_(connections);
  },
  updateShape_: function(option) {
    var outputExists = this.getInput('OUTPUTTYPE');
    var topExists = this.getInput('TOPTYPE');
    var bottomExists = this.getInput('BOTTOMTYPE');
    if (option == 'LEFT') {
      if (!outputExists) {
        this.appendValueInput('OUTPUTTYPE')
            .setCheck('Type')
			.setAlign(Blockly.ALIGN_RIGHT)
            .appendField('type');
        this.moveInputBefore('OUTPUTTYPE', 'COLOUR');
      }
    } else if (outputExists) {
      this.removeInput('OUTPUTTYPE');
    }
    if (option == 'TOP' || option == 'BOTH') {
      if (!topExists) {
        this.appendValueInput('TOPTYPE')
            .setCheck('Type')
			.setAlign(Blockly.ALIGN_RIGHT)
            .appendField('type haut');
        this.moveInputBefore('TOPTYPE', 'COLOUR');
      }
    } else if (topExists) {
      this.removeInput('TOPTYPE');
    }
    if (option == 'BOTTOM' || option == 'BOTH') {
      if (!bottomExists) {
        this.appendValueInput('BOTTOMTYPE')
            .setCheck('Type')
			.setAlign(Blockly.ALIGN_RIGHT)
            .appendField('type bas');
        this.moveInputBefore('BOTTOMTYPE', 'COLOUR');
      }
    } else if (bottomExists) {
      this.removeInput('BOTTOMTYPE');
    }
  }
};
Blockly.Blocks['input_value'] = { init: function() {
    this.setColour("#696969");
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("media/value.png","17","24"))
		.appendField('valeur')
		.appendField(new Blockly.FieldTextInput('_block'), 'INPUTNAME')
		.appendField(new Blockly.FieldDropdown(ALIGNMENT_OPTIONS), 'ALIGN');
    this.appendStatementInput('FIELDS')
        .setCheck('Field');
    this.appendValueInput('TYPE')
        .setCheck('Type')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('type');
    this.setPreviousStatement(true, 'Input');
    this.setNextStatement(true, 'Input')
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    inputNameCheck(this);
  }
};
Blockly.Blocks['input_statement'] = { init: function() {
    this.setColour("#696969");
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("media/statement.png","19","24"))
		.appendField('déclaration')
        .appendField(new Blockly.FieldTextInput('_statement'), 'INPUTNAME')
		.appendField(new Blockly.FieldDropdown(ALIGNMENT_OPTIONS), 'ALIGN');
    this.appendStatementInput('FIELDS')
        .setCheck('Field');
    this.appendValueInput('TYPE')
        .setCheck('Type')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('type');
    this.setPreviousStatement(true, 'Input');
    this.setNextStatement(true, 'Input')
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    inputNameCheck(this);
  }
};
Blockly.Blocks['input_dummy'] = { init: function() {
    this.setColour("#696969");
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("media/dummy.png","21","24"))
		.appendField('entrée')
		.appendField(new Blockly.FieldDropdown(ALIGNMENT_OPTIONS), 'ALIGN');
    this.appendStatementInput('FIELDS')
        .setCheck('Field');
    this.setPreviousStatement(true, 'Input');
    this.setNextStatement(true, 'Input')
  }
};
Blockly.Blocks['field_static'] = { init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('texte')
        .appendField(new Blockly.FieldTextInput('action'), 'TEXT');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field')}
};
Blockly.Blocks['field_input'] = { init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('texte pour utilisateur')
        .appendField(new Blockly.FieldTextInput('abc'), 'TEXT')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('_text'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    fieldNameCheck(this);
  }
};
Blockly.Blocks['field_math'] = { init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('nombre')
        .appendField(new Blockly.FieldNumber('123'), 'TEXT')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('_number'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field')
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    fieldNameCheck(this);
  }
};
Blockly.Blocks['field_angle'] = { init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('angle')
        .appendField(new Blockly.FieldAngle('90'), 'ANGLE')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('_angle'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field')
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    fieldNameCheck(this);
  }
};
Blockly.Blocks['field_dropdown'] = { init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('menu')
        .appendField(new Blockly.FieldTextInput('_dropdown'), 'FIELDNAME');
    this.appendDummyInput('OPTION0')
        .appendField(new Blockly.FieldTextInput('option1'), 'USER0')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('VALUE1'), 'CPU0');
    this.appendDummyInput('OPTION1')
        .appendField(new Blockly.FieldTextInput('option2'), 'USER1')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('VALUE2'), 'CPU1');
    this.appendDummyInput('OPTION2')
        .appendField(new Blockly.FieldTextInput('option3'), 'USER2')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('VALUE3'), 'CPU2');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setMutator(new Blockly.Mutator(['field_dropdown_option']));
    this.optionCount_ = 3;
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('options', this.optionCount_);
    return container;
  },
  domToMutation: function(container) {
    for (var x = 0; x < this.optionCount_; x++) {
      this.removeInput('OPTION' + x);
    }
    this.optionCount_ = parseInt(container.getAttribute('options'), 10);
    for (var x = 0; x < this.optionCount_; x++) {
      var input = this.appendDummyInput('OPTION' + x);
      input.appendField(new Blockly.FieldTextInput('option'), 'USER' + x);
      input.appendField(',');
      input.appendField(new Blockly.FieldTextInput('VALUE'), 'CPU' + x);
    }
  },
  decompose: function(workspace) {
    var containerBlock =
        Blockly.Block.obtain(workspace, 'field_dropdown_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.optionCount_; x++) {
      var optionBlock =
          Blockly.Block.obtain(workspace, 'field_dropdown_option');
      optionBlock.initSvg();
      connection.connect(optionBlock.previousConnection);
      connection = optionBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Disconnect all input blocks and remove all inputs.
    for (var x = this.optionCount_ - 1; x >= 0; x--) {
      this.removeInput('OPTION' + x);
    }
    this.optionCount_ = 0;
    // Rebuild the block's inputs.
    var optionBlock = containerBlock.getInputTargetBlock('STACK');
    while (optionBlock) {
      this.appendDummyInput('OPTION' + this.optionCount_)
          .appendField(new Blockly.FieldTextInput(
              optionBlock.userData_ || 'option'), 'USER' + this.optionCount_)
          .appendField(',')
          .appendField(new Blockly.FieldTextInput(
              optionBlock.cpuData_ || 'VALUE'), 'CPU' + this.optionCount_);
      this.optionCount_++;
      optionBlock = optionBlock.nextConnection &&
          optionBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function(containerBlock) {
    // Store names and values for each option.
    var optionBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (optionBlock) {
      optionBlock.userData_ = this.getFieldValue('USER' + x);
      optionBlock.cpuData_ = this.getFieldValue('CPU' + x);
      x++;
      optionBlock = optionBlock.nextConnection &&
          optionBlock.nextConnection.targetBlock();
    }
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    if (this.optionCount_ < 1) {
      this.setWarningText('Drop down menu must\nhave at least one option.');
    } else {
      fieldNameCheck(this);
    }
  }
};
Blockly.Blocks['field_dropdown_container'] = {
  // Container.
  init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('menu');
    this.appendStatementInput('STACK');
    this.contextMenu = false;
  }
};
Blockly.Blocks['field_dropdown_option'] = {
  // Add option.
  init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('option');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};
Blockly.Blocks['field_checkbox'] = { init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('case à cocher')
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'CHECKED')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('_check'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    fieldNameCheck(this);
  }
};
Blockly.Blocks['field_colour'] = { init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('couleur')
        .appendField(new Blockly.FieldColour('#ff0000'), 'COLOUR')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('_colour'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field')
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    fieldNameCheck(this);
  }
};
Blockly.Blocks['field_variable'] = { init: function() {
    this.setColour("#00cc00");
    this.appendDummyInput()
        .appendField('variable')
        .appendField(new Blockly.FieldTextInput('item'), 'TEXT')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('_var'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field')
  },
  onchange: function() {
    if (!this.workspace) {
      // Block has been deleted.
      return;
    }
    fieldNameCheck(this);
  }
};
Blockly.Blocks['field_image'] = { init: function() {
    this.setColour("#00cc00");
    var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNEFBOEU3ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNEFBOEU2ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmZlYzFmZjgtZjI0MS00MTdhLWJmYTQtMjZiOTdkYTJkZGI2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJhODNmYmQtY2NkNC0xMTc4LTg4N2EtOWQ5MDZmZTFhNmQ0Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uc19zb2NpYWw8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS4AF8AAADxSURBVHjatFbbDcMgDDRV/8sGzQjdoIySbtAROkpHyAiMwAjJBjABhcpIfBCwE0A6BSFzhx+YAACoABvgOyNyKoGTG4wZDk6ccCXaHSKeMbRDBGbv//sWiv31SGCFEDp8niTb5EYlSQbnOeGGHjwQ1SLZc+8bIGM4MCQy4B0J01q2vnBzoHOSFvAwLAHFIJ/ZVcQ8va4JXAo52Xpe5ZLAnclhWwYl1yZGiBQ3RGkTaQSRmINXamxUD1hlip6s3F7Uq1SrXVMSyGXjwapeEpNEsOd8EFNGbs62a7tDYihPbaubDrlo3QXcQH4Ho39bfgIMAMz8AJn0V4bRAAAAAElFTkSuQmCC';
    this.appendDummyInput()
        .appendField('image')
        .appendField(new Blockly.FieldTextInput(src), 'SRC');
    this.appendDummyInput()
        .appendField('largeur')
        .appendField(new Blockly.FieldNumber('28'), 'WIDTH')
        .appendField('hauteur')
        .appendField(new Blockly.FieldNumber('28'), 'HEIGHT')
        .appendField('alternative')
        .appendField(new Blockly.FieldTextInput('*'), 'ALT');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field')
  }
};
Blockly.Blocks['type_boolean'] = {
  // Boolean type.
  valueType: 'Boolean',
  init: function() {
    this.setColour("#ff0000");
    this.appendDummyInput()
        .appendField('binaire');
    this.setOutput(true, 'Type')
  }
};
Blockly.Blocks['type_number'] = {
  // Number type.
  valueType: 'Number',
  init: function() {
    this.setColour("#ff0000");
    this.appendDummyInput()
        .appendField('nombre');
    this.setOutput(true, 'Type')
  }
};
Blockly.Blocks['type_string'] = {
  // String type.
  valueType: 'String',
  init: function() {
    this.setColour("#ff0000");
    this.appendDummyInput()
        .appendField('texte');
    this.setOutput(true, 'Type')
  }
};
Blockly.Blocks['type_other'] = {
  // Other type.
  init: function() {
    this.setColour("#ff0000");
    this.appendDummyInput()
        .appendField('autre')
        .appendField(new Blockly.FieldTextInput(''), 'TYPE');
    this.setOutput(true, 'Type')
  }
};
Blockly.Blocks['colour_hue'] = { init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle('0', this.validator), 'HUE');
    this.setOutput(true, 'Colour')
  },
  validator: function(text) {
    // Update the current block's colour to match.
    this.sourceBlock_.setColour(text);
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('colour', this.getColour());
    return container;
  },
  domToMutation: function(container) {
    this.setColour(container.getAttribute('colour'));
  }
};
Blockly.Blocks['colour_rrggbb'] = { init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('#FFA500', this.validator), 'HUE');
    this.setOutput(true, 'Colour')
  },
  validator: function(text) {
    // Update the current block's colour to match.
    this.sourceBlock_.setColour(text);
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('colour', this.getColour());
    return container;
  },
  domToMutation: function(container) {
    this.setColour(container.getAttribute('colour'));
  }
};
Blockly.Blocks['colour_choice'] = { init: function() {
    this.setColour("#727272");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(dropdown_colour, this.validator), 'HUE');
    this.setOutput(true, 'Colour')
  },
  validator: function(text) {
    // Update the current block's colour to match.
    this.sourceBlock_.setColour(text);
  },
  mutationToDom: function(workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('colour', this.getColour());
    return container;
  },
  domToMutation: function(container) {
    this.setColour(container.getAttribute('colour'));
  }
};
function fieldNameCheck(referenceBlock) {
  var name = referenceBlock.getFieldValue('FIELDNAME').toLowerCase();
  var count = 0;
  var blocks = referenceBlock.workspace.getAllBlocks();
  for (var x = 0, block; block = blocks[x]; x++) {
    var otherName = block.getFieldValue('FIELDNAME');
    if (!block.disabled && !block.getInheritedDisabled() &&
        otherName && otherName.toLowerCase() == name) {
      count++;
    }
  }
  var msg = (count > 1) ?
      'There are ' + count + ' field blocks\n with this name.' : null;
  referenceBlock.setWarningText(msg);
}
function inputNameCheck(referenceBlock) {
  var name = referenceBlock.getFieldValue('INPUTNAME').toLowerCase();
  var count = 0;
  var blocks = referenceBlock.workspace.getAllBlocks();
  for (var x = 0, block; block = blocks[x]; x++) {
    var otherName = block.getFieldValue('INPUTNAME');
    if (!block.disabled && !block.getInheritedDisabled() &&
        otherName && otherName.toLowerCase() == name) {
      count++;
    }
  }
  var msg = (count > 1) ? 'There are ' + count + ' input blocks\n with this name.' : null;
  referenceBlock.setWarningText(msg);
}