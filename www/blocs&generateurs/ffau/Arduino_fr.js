'use strict';
goog.provide('Blockly.Msg.fr');
goog.require('Blockly.Msg');

// commun à tous les blocs
Blockly.Msg.discard= "Supprimer tous les blocs pour commencer un nouveau programme ?";
Blockly.Msg.HELPURL="http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ReferenceMaxi"; //ne pas traduire
Blockly.Msg.pin="sur la broche";
Blockly.Msg._AT="à";
Blockly.Msg.AV="avant";
Blockly.Msg.AR="arrière";
Blockly.Msg.high="HIGH"; //ne pas traduire
Blockly.Msg.low="LOW"; //ne pas traduire
Blockly.Msg.right="droit";
Blockly.Msg.left="gauche";
Blockly.Msg.LetR="droit & gauche";
Blockly.Msg.direction="direction";
Blockly.Msg.vitesse="vitesse ";

//FIELDDROPDOWN
Blockly.Msg.instru=[["piano", "0"],["orgue", "19"],["basse", "32"],["synthétiseur", "81"],["guitare", "24"],["violon", "40"],["clarinette", "71"],["trompette", "56"]];
Blockly.Msg.percu=[["grosse caisse", "36"],["caisse claire", "38"],["tom basse", "43"],["tom médium", "47"],["tom aigu", "50"],["cymbale crash", "49"],["cymbale ride", "51"]];
Blockly.Msg.midi=[["DO\u2082","36"],["DO#\u2082","37"],["RE\u2082","38"],["RE#\u2082","39"],["MI\u2082","40"],["FA\u2082","41"],["FA#\u2082","42"],["SOL\u2082","43"],["SOL#\u2082","44"],["LA\u2082","45"],["LA#\u2082","46"],["SI\u2082","47"],["DO\u2083","48"],["DO#\u2083","49"],["RE\u2083","50"],["RE#\u2083","51"],["MI\u2083","52"],["FA\u2083","53"],["FA#\u2083","54"],["SOL\u2083","55"],["SOL#\u2083","56"],["LA\u2083","57"],["LA#\u2083","58"],["SI\u2083","59"],["DO\u2084","60"],["DO#\u2084","61"],["RE\u2084","62"],["RE#\u2084","63"],["MI\u2084","64"],["FA\u2084","65"],["FA#\u2084","66"],["SOL\u2084","67"],["SOL#\u2084","68"],["LA\u2084","69"],["LA#\u2084","70"],["SI\u2084","71"]];
Blockly.Msg.note=[["DO\u2083","261"],["DO#\u2083","277"],["RE\u2083","293"],["RE#\u2083","311"],["MI\u2083","329"],["FA\u2083","349"],["FA#\u2083","370"],["SOL\u2083","392"],["SOL#\u2083","415"],["LA\u2083","440"],["LA#\u2083","466"],["SI\u2083","493"],["DO\u2084","523"],["DO#\u2084","554"],["RE\u2084","587"],["RE#\u2084","622"],["MI\u2084","659"],["FA\u2084","698"],["FA#\u2084","740"],["SOL\u2084","784"],["SOL#\u2084","831"],["LA\u2084","880"]];
Blockly.Msg.tempo=[["1", "125"], ["2", "250"], ["4", "500"], ["8", "1000"], ["16", "2000"]];
Blockly.Msg.true_false=[["vrai", "true"], ["faux", "false"]];
Blockly.Msg.menublink=[["lentement", "1000"],["rapidement", "100"]];
Blockly.Msg.AV_AR=[[Blockly.Msg.AV, "FORWARD"],[Blockly.Msg.AR, "BACKWARD"]];//ne pas traduire
Blockly.Msg.times=[["secondes", "s"],["millisecondes", "m"],["microsecondes", "u"]];
Blockly.Msg.time=[["secondes", "s"],["millisecondes", "m"]];
Blockly.Msg.char_lcd=[["n°1","1"],["n°2","2"],["n°3","3"],["n°4","4"],["n°5","5"],["n°6","6"],["n°7","7"],["n°8","8"]];
Blockly.Msg.rxtx=[["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"]];
Blockly.Msg.FIELDDROPDOWN=[["1(état haut)", Blockly.Msg.high], ["0(état bas)",Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1=[["HAUT", Blockly.Msg.high], ["BAS",Blockly.Msg.low]];
Blockly.Msg.ligne=[["1", "0"], ["2", "1"]];
Blockly.Msg.colonne=[["1","0"],["2","1"],["3","2"],["4","3"],["5","4"],["6","5"],["7","6"],["8","7"],["9","8"],["10","9"],["11","10"],["12","11"],["13","12"],["14","13"],["15", "14"],["16", "15"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF=[["allumer", Blockly.Msg.high], ["éteindre",Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice=[["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar=[[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR,Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN=[['front montant', "RISING"], ['front descendant', "FALLING"], ["changement d'état", "CHANGE"], ["état bas",Blockly.Msg.low]];
Blockly.Msg.irq=[['front montant', "Pin.IRQ_RISING"], ['front descendant', "Pin.IRQ_FALLING"], ["état haut", "Pin.IRQ_HIGH_LEVEL"], ["état bas", "Pin.IRQ_LOW_LEVEL"]];
Blockly.Msg.menudht=[["humidité", "h"],["température", "t"]];
Blockly.Msg.couleur=[["bleu", "bleu"],["jaune", "jaune"],["rouge", "rouge"],["vert", "vert"]];
Blockly.Msg.sens=[["avancer", "a"],["tourner à droite", "d"],["tourner à gauche", "g"]];
