# <img src="http://lesormeaux.net/blocklino/media/icon.png" alt="Blocklino icon"> BLOCKLINO

A mini development environment for free and open source graphic language. Programs are created by assembling blocks, they are then compiled and sent to the board.

This app works on Windows operating systems. You can [download the latest release](https://github.com/fontainejp/blocklino/releases)

![blocklino Screenshots](http://lesormeaux.net/blockly-arduino/assets/img/Capture.PNG)

## Demo

Blocklino is a web tool. You can give it a try [here.](http://lesormeaux.net/blocklino)

You can link directly to examples :
* [make default LED blink](http://lesormeaux.net/blocklino/index.html?url=./examples/blink/blink.xml) 
* [control LED Matrix](http://lesormeaux.net/blocklino/index.html?url=./examples/matrice/matrice.xml) 

Or watch the [video demo](http://)

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
> cd blocklino
> npm install
> npm start
```

### Build and Publish 

GitHub personal access token is required. You can generate it [here](https://github.com/settings/tokens/new).
The access token should have the repo scope/permission.
Define GH_TOKEN environment variable.

```bash
> cd blocklino
> build -p always
```

## Links

Tools without which nothing would not have been possible :

- [Electron](https://electronjs.org/)
- [Node.js](https://nodejs.org/fr/)
- [Blockly@rduino](https://github.com/technologiescollege/Blockly-at-rduino)
- [BlocklyDuino](https://github.com/BlocklyDuino/BlocklyDuino)
- [Ardublockly](https://github.com/carlosperate/ardublockly)
- [Blockly](https://developers.google.com/blockly)
- [Bootstrap](http://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [JQuerry](https://jquery.com)
- [electron-builder](https://github.com/electron-userland/electron-builder)
- [Serialport](https://github.com/node-serialport/node-serialport)
- [arduino-builder](https://github.com/arduino/arduino-builder)
- [winAVR](https://sourceforge.net/projects/winavr)
- [Avrdude](http://www.nongnu.org/avrdude)
- [NSIS](https://sourceforge.net/projects/nsis)
