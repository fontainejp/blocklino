function convert2Dec(numR,numG,numB,doneString) {      
   if ( (!numR || !numG || !numB ) && (!doneString) ) {
	  alert("Entrez une valeur dans chaque case.");
	  return false;
   }
   numR = numR.toUpperCase();
   numG = numG.toUpperCase();
   numB = numB.toUpperCase();
   decRval = hex2dec(numR)
   decGval = hex2dec(numG);
   decBval = hex2dec(numB);
   if ( (decRval == "BAD") || (decGval == "BAD") || (decBval == "BAD") ) {
	  return false;
   } else {
	document.converter.decR.value = decRval;
	document.converter.decG.value = decGval;
	document.converter.decB.value = decBval;
	document.converter.hexR.value = numR;
	document.converter.hexG.value = numG;
	document.converter.hexB.value = numB;
	//document.converter.dec.value = parseInt(hexNum,16);
	hexStringOut =  "" + numR + numG + numB;
	hexStringOut.toUpperCase();
	document.getElementById('color_show').style.backgroundColor = "#" + hexStringOut;
	document.converter.hexString.value = hexStringOut;  
  }
	convert2Hex(decRval,decGval,decBval,"DONE");
	//return true;
	if (document.converter.names.value != document.converter.hexString.value) {
	  document.converter.names.selectedIndex = 0;
	}
}
function hex2dec(theHex) {
		   if ( (theHex.charAt(0) > "F") || (theHex.charAt(1) > "F") ) {
			  alert("Code hexadécimal (00-FF) uniquement.");
			  return "BAD";
		   }
		   var retDec  = parseInt(theHex,16);
		   return retDec;
}
function fixHex(theDec) { 
		   var hNum = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
		   var retHex = hNum[theDec];
		   return retHex;
}
function dec2hex(theDec) {
		   for (var k=0;k<theDec.length;k++) {
			  var thisChar = theDec.charAt(k);
			  if ( (thisChar < "0") || (thisChar > "9") ) {
				 alert("Code décimal (0-255) uniquement.");
				 return "BAD";
			  }
		   }
		   var leftNum;
		   var rightNum;
		   var leftNumS;
		   var rightNumS;
		   var retNum;
		   if (theDec > 255) {
			  alert("Pas plus que 255.");
			  return "BAD";
		   }
		   else {
			  leftNum = Math.floor(theDec / 16);
			  leftNumS = fixHex(leftNum);
			  rightNum = theDec%16;
			  rightNumS = fixHex(rightNum);
			  retNum = leftNumS + rightNumS;
		   }
		   return retNum;
}
function convert2Hex(numR,numG,numB,doneString) {      
		   if ( (!numR || !numG || !numB ) && (!doneString) ) {
			  alert("Entrez une valeur dans chaque case.");
			  return false;
		   }
		   hexRval = dec2hex(numR);
		   hexGval = dec2hex(numG);
		   hexBval = dec2hex(numB);
		   if ( (hexRval == "BAD") || (hexGval == "BAD") || (hexBval == "BAD") ) {
			  return false;
		   }
		   else {
			  document.converter.hexR.value = dec2hex(numR);
			  document.converter.hexG.value = dec2hex(numG);
			  document.converter.hexB.value = dec2hex(numB);
			  hexStringOut =  "" + hexRval + hexGval + hexBval;
			  hexStringOut = hexStringOut.toUpperCase();
			  document.getElementById('color_show').style.backgroundColor = "#" + hexStringOut;
			  document.converter.hexString.value = hexStringOut;  
		   }
		   //return true;
}
function showHex(hexStringIn) {
		   if (hexStringIn.length != 6) {
			  alert ('N\entrez qu\'une valeur hexadécimale à 6 caractères !');
			  return false;
		   }
		   hexRval = "" + hexStringIn.charAt(0) + hexStringIn.charAt(1);
		   hexGval = "" + hexStringIn.charAt(2) + hexStringIn.charAt(3);
		   hexBval = "" + hexStringIn.charAt(4) + hexStringIn.charAt(5);
		   convert2Dec(hexRval,hexGval,hexBval,"DONE");
		   convert2Hex(decRval,decGval,decBval,"DONE")
}
function reduceVal(theType) {
		   decRval = document.converter.decR.value;
		   decGval = document.converter.decG.value;
		   decBval = document.converter.decB.value;
		   eval ("newNum = dec" + theType + "val - 8");
		   if (newNum < 0) {
			  newNum = 0;
		   }
		   eval ("dec" + theType + "val = newNum");
		   document.converter.decR.value = decRval;
		   document.converter.decG.value = decGval;
		   document.converter.decB.value = decBval;
		   convert2Hex(decRval,decGval,decBval,"DONE");
		   convert2Dec(hexRval,hexGval,hexBval,"DONE");
}
function increaseVal(theType) {
		   decRval = document.converter.decR.value;
			decGval = document.converter.decG.value;
		   decBval = document.converter.decB.value;
		   eval ("newNum = dec" + theType + "val - -8");
		   if (newNum > 255) {
			  newNum = 255;
		   }
		   eval ("dec" + theType + "val = newNum");
		   document.converter.decR.value = decRval;
		   document.converter.decG.value = decGval;
		   document.converter.decB.value = decBval;
		   convert2Hex(decRval,decGval,decBval,"DONE");
		   convert2Dec(hexRval,hexGval,hexBval,"DONE");
}