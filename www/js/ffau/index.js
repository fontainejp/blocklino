/*
    Ffau - A blocky-based editor for teaching HTML & CSS .
	Developed by Pal Kerecsenyi, Geza Kerecsenyi and Oli Plant.
	Full details are avaliable at the Github repo: https://github.com/codeddraig/ffau
	Copyright (c) 2017-19 The CodeDdraig Organisation
	THIS IS VERSION 1.2.2
*/

/*
 * @class Class representing a Ffau instance, including all components.
 */
class Ffau {
    /**
     * Generate an ID for a ffau component
     *
     * @param {HTMLElement} object - The element to generate an ID for
     * @param {string} objectType - The name of the component
     * @returns {string}
     */
    static generateID(object, objectType) {
        return object.id || "ffau-" + objectType + "-" + Math.floor(Math.random() * 10000);
    }
    /**
     * Inject the blockly editor (should be called first)
     *
     * @param {HTMLElement} frame - The frame to put the editor in
     * @param {HTMLElement} toolbox - The XML toolbox
     *
     * @param {string} theme - The name of the theme to initiate Blockly with.
     * @param {settingsDialogueType} [settings]
     *
     * @param {object} [options] - Custom options for the Blockly editor. Ffau will apply some default options if this is not specified.
     * @returns {*}
     */
    renderBlockly(frame, toolbox, theme, settings, options) {
        // generate a random ID for the frame to avoid duplication
        frame.id = Ffau.generateID(frame, 'blockly');
        let editorOptions = {
            toolbox: toolbox
        }
        if (options) {
            editorOptions = Object.assign(editorOptions, options);
        } else {
            editorOptions = Object.assign(editorOptions, {
                zoom: {
                    controls: true,
                    wheel: true,
                    startScale: 1.0,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                },
                trashcan: true,
				sounds:false,media:'media/'
            })
        }
        // inject blockly
        this.ffauWorkspace = Blockly.inject(frame.id, editorOptions);
        this.workspaceDiv = frame;
        this.toolboxDiv = this.workspaceDiv.getElementsByClassName("blocklyToolboxDiv")[0];
        // Return workspace info
        return this.ffauWorkspace
    }
    /**
     *
     * Checks if a theme name is a valid Ffau theme, using the CSS-based checking mechanics automatically added by `dist/compile_styles.py`.
     *
     * @param {string} className - The name of the theme
     * @param {boolean} appendPrefix - Specifies the format of the theme name: if true, then a theme in a format like `panda` or `dark` is expected. If false, a full classname, like `blocklyThemePanda` or `blocklyThemeDark` is expected.
     * @returns {boolean} - Whether or not the input refers to a real Ffau theme.
     
    isFfauTheme(className, appendPrefix) {
        if (!appendPrefix) {
            if (className.split("blocklyTheme").length > 1) {
                className = className.split("blocklyTheme")[1].toLowerCase();
            } else {
                return false;
            }
        }

        let testObj = document.createElement("p");
        testObj.className = "verifyBlocklyTheme" + className[0].toUpperCase() + className.slice(1).toLowerCase();
        testObj.style.display = "none";

        document.body.appendChild(testObj);
        const computedText = getComputedStyle(testObj, ':before')
            .getPropertyValue('content');

        const isGood = computedText.substr(1, computedText.length - 2)
            === 'verify-' + className.toLowerCase();

        testObj.parentNode.removeChild(testObj);

        return isGood;
    }
    /**
     * Render the iframe preview
     *
     * @param {HTMLElement} frame - The frame to put the preview in
     * @returns {HTMLElement} - The generated iframe
     */
    renderPreview(frame) {
        // generate a random id to avoid duplication
        frame.id = Ffau.generateID(frame, 'iframe');
        // set the innerhtml of the frame specified
        frame.innerHTML = `<iframe style="border:#ddd 1px solid;height:100%;width:100%" id="${frame.id}-iframe"></iframe>`;
        // save the frame for later use
        this.iframe = document.getElementById(frame.id + '-iframe');
        return this.iframe;
    }
    /**
     * Add the event listener for Blockly to generate a preview and code
     *
     * @param {function} customFunction - a function to execute at the end of the change event. Gets passed the scope as a parameter.
     */
    addEvent(customFunction) {
        // add listener to workspace
        this.ffauWorkspace.addChangeListener(function () {
            // generate the code using Blockly.html from generator.js
            let code = Blockly.html.workspaceToCode(this.ffauWorkspace);
            // if iframe has been initialised
            if (this.iframe) {
                this.iframe.src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
            }
			document.getElementById('blockly_r').innerHTML = code;
        }.bind(this) /* bind parent scope */);
    }
    /**
     * Return the XML block code in string format
     *
     * @returns {string}
     */
    generateXML() {
        // workspace -> XML
        const dom = Blockly.Xml.workspaceToDom(this.ffauWorkspace);
        // XML -> string
        return Blockly.Xml.domToText(dom);
    }
    /**
     * Downloads a txt file containing the XML data of the project, which can be used to save it locally.
     *
     * @param {string} [fileName=ffau-export.txt] - The name of the txt file
     * @returns {string} - The XML data as a string
     */
    downloadXML(fileName) {
        const data = this.generateXML();
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', fileName || 'pageHTML.www');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        return data
    }
	/**
     * Downloads a html file containing the data of the project, which can be used to save it locally.
     */
    downloadHTML() {
        var data = editor.getValue();
        var element = document.createElement('a');
		var datenow = Date.now();
		var fileName = "page"+datenow+".html";
        element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element)
    }
    /**
     * Set the Blockly workspace to a specified XML string
     *
     * @param {string} xmlString - The XML string to use
     */
    setXML(xmlString) {
        // change the text to dom
        const dom = Blockly.Xml.textToDom(xmlString);
        // clear the workspace to avoid adding code on top
        this.clearWorkspace();
        // set the dom into the workspace
        Blockly.Xml.domToWorkspace(dom, this.ffauWorkspace);
    }
    /**
     * Clears all blocks from the workspace without further confirmation
     */
    clearWorkspace() {
        this.ffauWorkspace.clear();
    }
    /**
     * Make a screenshot from the workspace
     */
	workspace_capture () {
		var ws = this.ffauWorkspace.svgBlockCanvas_.cloneNode(true);
		ws.removeAttribute("width");
		ws.removeAttribute("height");
		ws.removeAttribute("transform");
		var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
		styleElem.textContent = Blockly.Css.CONTENT.join('') ;
		ws.insertBefore(styleElem, ws.firstChild);
		var bbox = this.ffauWorkspace.svgBlockCanvas_.getBBox();
		var canvas = document.createElement( "canvas" );
		canvas.width = Math.ceil(bbox.width+10);
		canvas.height = Math.ceil(bbox.height+10);
		var ctx = canvas.getContext( "2d" );
		var xml = new XMLSerializer().serializeToString(ws);
		xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="' + bbox.x + ' ' + bbox.y + ' '  + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
		var img = new Image();
		img.setAttribute( "src", 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(xml))));
		img.onload = function() {
			ctx.drawImage( img, 5, 5 );
			var canvasdata = canvas.toDataURL("image/png",1);
			var datenow = Date.now();
			var a = document.createElement("a");
			a.download = "capture"+datenow+".png";
			a.href = canvasdata;
			document.body.appendChild(a);
			a.click();
		}	
	}
	undo() {
        this.ffauWorkspace.undo(0);
    }
	redo() {
        this.ffauWorkspace.undo(1);
    }
}