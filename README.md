# <img src="https://fontainejp.github.io/media/icon.png" alt="Blocklino icon"> BLOCKLINO

A mini development environment for free and open source graphic language. Programs are created by assembling blocks, they are then compiled and sent to the board.

This app works on Windows operating systems. You can [download the latest release](https://github.com/fontainejp/blocklino/releases)

![blocklino Screenshots](https://fontainejp.github.io/start/img/Capture.PNG)

## Demo

Blocklino is a web tool. You can give it a try [here.](https://fontainejp.github.io/blocklino.html)

You can link directly to examples :
* [make default LED blink](https://fontainejp.github.io/blocklino.html?url=./examples/blink.xml) 
* [control LED Matrix](https://fontainejp.github.io/blocklino.html?url=./examples/matrice.xml) 

Or watch the [video demo](https://www.youtube.com/watch?v=XqfNAjnf6_8)

## How to Use

Clone or [download the source code](https://github.com/fontainejp/blocklino/archive/master.zip).

### Requirements

You'll need [Node.js](https://nodejs.org) installed on your computer.

Install all the required tools :

run as Administrator

``` bash
> npm install -g windows-build-tools
```

and

``` bash
> npm install -g node-gyp
```

### Getting Started 

```bash
> git clone https://github.com/fontainejp/blocklino
> cd blocklino-master
> npm install
```
### from Arduino IDE

copy / paste all files and directories

| Arduino | Blocklino |
| ------- | --------- |
| hardware\arduino | compilation\arduino\arduino |
| hardware\tools | compilation\arduino\tools |
| tools-builder | compilation\arduino\tools-builder |

### Build 

You can use electron-builder to pack your electron app in zip, nsis (Installer), portable (portable app without installation) formats.

```bash
> cd blocklino-master
> build --win --ia32
```
or 

```bash
> cd blocklino-master
> npm run compiler
```

### Publish

GitHub personal access token is required. You can generate it [here](https://github.com/settings/tokens/new).
The access token should have the repo scope/permission.
Define GH_TOKEN environment variable.

```bash
> cd blocklino-master
> build --win --ia32 -p -always
```
or

```bash
> cd blocklino-master
> npm run publier
```

## Links

Tools without which nothing would not have been possible :

- [Node.js](https://nodejs.org/fr/)
- [Blockly@rduino](https://github.com/technologiescollege/Blockly-at-rduino)
- [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino)
- [Ardublockly](https://github.com/carlosperate/ardublockly)
- [Blockly](https://developers.google.com/blockly)
- [Bootstrap](http://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [JQuerry](https://jquery.com)
- [electron](https://electronjs.org/)
- [electron-builder](https://github.com/electron-userland/electron-builder)
- [Serialport](https://github.com/node-serialport/node-serialport)
- [tableify](https://github.com/wankdanker/node-tableify)
- [arduino-builder](https://github.com/arduino/arduino-builder)
- [winAVR](https://sourceforge.net/projects/winavr)
- [Avrdude](http://www.nongnu.org/avrdude)
- [microbit](https://microbit.org/fr/guide/)
- [micropython](https://wiki.mchobby.be/index.php?title=MicroPython-Accueil)
- [Python](https://docs.python.org/fr/3/)
- [ampy](https://github.com/pycampers/ampy)
- [pyflakes](https://github.com/PyCQA/pyflakes)
- [NSIS](https://sourceforge.net/projects/nsis)
- [ACE](https://ace.c9.io/)
- [CodeDragon](https://codedragon.org/)
- [neutralinojs](https://neutralino.js.org/)
