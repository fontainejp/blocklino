
# arduino-cli

`arduino-cli` est une solution tout-en-un qui fournit le compilateur, le gestionnaire de cartes/bibliothèques, le système de téléversement, la découverte et de nombreux autres outils nécessaires à l'utilisation de toute carte et plate-forme compatible Arduino.

Ce logiciel est actuellement en état alpha : de nouvelles fonctionnalités seront ajoutées et certaines pourront être modifiées.

Il sera bientôt utilisé comme bloc de construction dans l'EDI Arduino et Arduino Create.

## Utilisation

Le but de l'Arduino CLI est d'être utilisé soit en l'incluant dans Makefile, soit dans tout type de script pour la ligne de commande.
L'Arduino CLI vise à remplacer la majorité des fonctionnalités de l'EDI Arduino sans l'interface graphique.

## Étapes usuelles

### 1. Créer un nouveau programme
La commande suivante créera un nouveau fichier vide nommé MyFirstSketch dans le répertoire par défaut sous $HOME/Arduino/.

    $ arduino-cli sketch new MyFirstSketch
    Sketch created in: /home/luca/Arduino/MyFirstSketch

    $ cat /home/luca/Arduino/MyFirstSketch/MyFirstSketch.ino
    void setup() {
    }

    void loop() {
    }

### 2. Modifier le programme
Utilisez votre éditeur de texte favori ou un EDI pour modifier le fichier .ino sous : `$HOME/Arduino/MyFirstSketch/MyFirstSketch.ino` et modifier le fichier pour qu'il ressemble à celui ci-dessous :

    void setup() {
      pinMode(LED_BUILTIN, OUTPUT);
    }

    void loop() {
      digitalWrite(LED_BUILTIN, HIGH);
      delay(1000);
      digitalWrite(LED_BUILTIN, LOW);
      delay(1000);
    }

### 3. Connecter la carte au PC
Si vous exécutez une nouvelle installation de l'arduino-cli, vous aurez probablement besoin de mettre à jour les index de la plate-forme en cours d'exécution :

    $ arduino-cli core update-index
    Updating index: package_index.json downloaded

Maintenant, connectez simplement la carte à votre PC à l'aide du câble USB. Dans cet exemple, nous utiliserons la carte MKR1000.

    $ arduino-cli board list
    FQBN    Port            ID              Board Name
            /dev/ttyACM0    2341:804E       unknown

la carte a été découverte mais nous n'avons pas encore le bon noyau pour la programmer. Installons-le !

### 4. Trouver et installer le bon noyau

Nous devons regarder le noyau disponible avec la commande `core search`. Il fournira une liste des noyaux disponibles correspondant au nom arduino

    $ arduino-cli core search arduino
    Searching for platforms matching 'arduino'

    ID              Version Installed       Name
    Intel:arc32     2.0.2   No              Intel Curie Boards
    arduino:avr     1.6.21  No              Arduino AVR Boards
    arduino:nrf52   1.0.2   No              Arduino nRF52 Boards
    arduino:sam     1.6.11  No              Arduino SAM Boards (32-bits ARM Cortex-M3)
    arduino:samd    1.6.18  No              Arduino SAMD Boards (32-bits ARM Cortex-M0+)
    arduino:stm32f4 1.0.1   No              Arduino STM32F4 Boards
    littleBits:avr  1.0.0   No              littleBits Arduino AVR Modules

Si vous n'êtes pas sûr, vous pouvez essayer d'affiner la recherche avec le nom de la carte.

    $ arduino-cli core search mkr1000
    Searching for platforms matching 'mkr1000'

    ID              Version Installed   Name
    arduino:samd    1.6.19  No          Arduino SAMD Boards (32-bits ARM Cortex-M0+)

Ainsi, la bonne plate-forme pour l'Arduino MKR1000 est arduino:samd, maintenant nous pouvons l'installer

    $ arduino-cli core install arduino:samd
    Downloading tools...
    arduino:arm-none-eabi-gcc@4.8.3-2014q1 downloaded
    arduino:bossac@1.7.0 downloaded
    arduino:openocd@0.9.0-arduino6-static downloaded
    arduino:CMSIS@4.5.0 downloaded
    arduino:CMSIS-Atmel@1.1.0 downloaded
    arduino:arduinoOTA@1.2.0 downloaded
    Downloading cores...
    arduino:samd@1.6.19 downloaded
    Installing tools...
    Installing platforms...
    Results:
    arduino:samd@1.6.19 - Installed
    arduino:arm-none-eabi-gcc@4.8.3-2014q1 - Installed
    arduino:bossac@1.7.0 - Installed
    arduino:openocd@0.9.0-arduino6-static - Installed
    arduino:CMSIS@4.5.0 - Installed
    arduino:CMSIS-Atmel@1.1.0 - Installed
    arduino:arduinoOTA@1.2.0 - Installed

Maintenant, vérifions que nous avons correctement installé le noyau en exécutant

    $ arduino-cli core list
    ID              Installed       Latest  Name
    arduino:samd    1.6.19          1.6.19  Arduino SAMD Boards (32-bits ARM Cortex-M0+)


Nous pouvons enfin vérifier si la carte est maintenant reconnue comme une MKR1000

    $ arduino-cli board list
    FQBN                    Port            ID              Board Name
    arduino:samd:mkr1000    /dev/ttyACM0    2341:804E       Arduino/Genuino MKR1000

Si la carte n'est pas détectée pour une raison quelconque, vous pouvez lister toutes les cartes supportées avec `arduino-cli-cli board listall` et rechercher également une carte spécifique :

    $ arduino-cli board listall mkr
    Board Name             	FQBN
    Arduino MKR FOX 1200   	arduino:samd:mkrfox1200
    Arduino MKR GSM 1400   	arduino:samd:mkrgsm1400
    Arduino MKR WAN 1300   	arduino:samd:mkrwan1300
    Arduino MKR WiFi 1010  	arduino:samd:mkrwifi1010
    Arduino MKRZERO        	arduino:samd:mkrzero
    Arduino/Genuino MKR1000	arduino:samd:mkr1000

Super ! Nous avons maintenant le Board FQBN (Fully Qualified Board Name) `arduino:samd:mkr1000` et le nom de la carte a l'air bon, nous sommes prêts à compiler et à téléverser le programme

### 5. Compiler le programme
Pour compiler le programme, nous devons exécuter la commande `compile` avec le bon FQBN que nous venons d'obtenir dans la commande précédente.

    $ arduino-cli compile --fqbn arduino:samd:mkr1000 Arduino/MyFirstSketch
    Sketch uses 9600 bytes (3%) of program storage space. Maximum is 262144 bytes.

### 6. Téléverser le programme
Nous allons bientôt pouvoir téléverser le programme et voir notre carte clignoter, nous devons maintenant spécifier le port série utilisé par notre carte :

    $ arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:samd:mkr1000 Arduino/MyFirstSketch
    No new serial port detected.
    Atmel SMART device 0x10010005 found
    Device       : ATSAMD21G18A
    Chip ID      : 10010005
    Version      : v2.0 [Arduino:XYZ] Dec 20 2016 15:36:43
    Address      : 8192
    Pages        : 3968
    Page Size    : 64 bytes
    Total Size   : 248KB
    Planes       : 1
    Lock Regions : 16
    Locked       : none
    Security     : false
    Boot Flash   : true
    BOD          : true
    BOR          : true
    Arduino      : FAST_CHIP_ERASE
    Arduino      : FAST_MULTI_PAGE_WRITE
    Arduino      : CAN_CHECKSUM_MEMORY_BUFFER
    Erase flash
    done in 0.784 seconds

    Write 9856 bytes to flash (154 pages)
    [==============================] 100% (154/154 pages)
    done in 0.069 seconds

    Verify 9856 bytes of flash with checksum.
    Verify successful
    done in 0.009 seconds
    CPU reset.

### 7. Ajouter des bibliothèques
Maintenant nous pouvons essayer d'ajouter une bibliothèque utile à notre programme. On peut d'abord vérifier le nom d'une bibliothèque, notre préférée est la wifi101, voici la commande pour obtenir plus d'informations :

    $ arduino-cli lib search wifi101
      Name: "WiFi101OTA"
      Author:  Arduino
      Maintainer:  Arduino <info@arduino.cc>
      Sentence:  Update sketches to your board over WiFi
      Paragraph:  Requires an SD card and SAMD board
      Website:  http://www.arduino.cc/en/Reference/WiFi101OTA
      Category:  Other
      Architecture:  samd
      Types:  Arduino
      Versions:  [1.0.2, 1.0.0, 1.0.1]
      Name: "WiFi101"
      Author:  Arduino
      Maintainer:  Arduino <info@arduino.cc>
      Sentence:  Network driver for ATMEL WINC1500 module (used on Arduino/Genuino Wifi Shield 101 and MKR1000 boards)
      Paragraph:  This library implements a network driver for devices based on the ATMEL WINC1500 wifi module
      Website:  http://www.arduino.cc/en/Reference/WiFi101
      Category:  Communication
      Architecture:  *
      Types:  Arduino
      Versions:  [0.5.0, 0.6.0, 0.10.0, 0.11.0, 0.11.1, 0.11.2, 0.12.0, 0.15.2, 0.8.0, 0.9.0, 0.12.1, 0.14.1, 0.14.4, 0.14.5, 0.15.1, 0.7.0, 0.14.0, 0.14.2, 0.14.3, 0.9.1, 0.13.0, 0.15.0, 0.5.1]

Nous sommes maintenant prêts à l'installer ! Veuillez vous assurer d'utiliser le **nom complet** de la bibliothèque comme spécifié dans la section "*Name:*" comme vue dans le paragraphe précédent.

    $ arduino-cli lib install "WiFi101"
    Downloading libraries...
    WiFi101@0.15.2 downloaded
    Installed WiFi101@0.15.2

### 8. Mettre à jour toutes les bibliothèques
Il suffit de taper :

    $ arduino-cli lib upgrade
      

## Commandes usuelles

    arduino-cli core update-index
    arduino-cli board list
    arduino-cli core list
    arduino-cli compile --fqbn arduino: ...
    arduino-cli upload -p COMx --fqbn arduino: ...
    arduino-cli lib install "WiFi101"
	arduino-cli lib upgrade

## Quoi est où ?
Le dossier **arduino** contient les exécutables.
	

 - Le dossier **arduino\libraries** contient les bibliothèques officielles,    avec l'EDI au départ.
 - Le dossier **arduino\packages** contient les définitions, les noyaux, etc.
 - Le dossier **arduino\tmp** sert de façon temporaire pour la compilation/téléversement.
	
Le dossier **sketchbook** contient *vos* fichiers .ino.
	
 - Le dossier **sketchbook\libraries** contient VOS bibliothqèues personnelles.

## Aide en ligne

`arduino-cli` est un conteneur de commandes, pour voir la liste complète il faut exécuter :
```bash
$ arduino-cli
Arduino Command Line Interface (arduino-cli).

Usage:
  arduino-cli [command]

Examples:
arduino <command> [flags...]

Available Commands:
  board         Arduino board commands.
  compile       Compiles Arduino sketches.
  config        Arduino Configuration Commands.
  core          Arduino Core operations.
  help          Help about any command
  lib           Arduino commands about libraries.
  sketch        Arduino CLI Sketch Commands.
  upload        Upload Arduino sketches.
  version       Shows version number of Arduino CLI.
....
```

Chaque commande a sa propre aide spécifique qui peut être obtenue avec la commande `help', par exemple :

```bash
$ arduino-cli help core
Arduino Core operations.

Usage:
  arduino-cli core [command]

Examples:
arduino-cli core update-index # to update the package index file.

Available Commands:
  download     Downloads one or more cores and corresponding tool dependencies.
  install      Installs one or more cores and corresponding tool dependencies.
  list         Shows the list of installed cores.
  update-index Updates the index of cores.

Flags:
  -h, --help   help for core

Global Flags:
      --config-file string   The custom config file (if not specified ./.cli-config.yml will be used). (default "/home/megabug/Workspace/go/src/github.com/arduino/arduino-cli/.cli-config.yml")
      --debug                Enables debug output (super verbose, used to debug the CLI).
      --format string        The output format, can be [text|json]. (default "text")

Use "arduino-cli core [command] --help" for more information about a command.

```

# FAQ

#### Pourquoi l'Arduino Uno/Mega/Duemilanove n'est pas détectée lorsque je lance `arduino-cli board list`?

Parce que votre carte :

- est un clone moins cher, ou
- contient un convertisseur USB2Serial comme le FT232 ou CH320 : ces puces renvoient toujours le même VID/PID au système d'exploitation, donc la seule chose que nous savons est que la carte monte cette puce USB2Serial spécifique, mais nous ne savons pas de quelle carte il s'agit.

#### Quel est le noyau des Uno/Mega/Nano/Duemilanove ?

`arduino:avr`

#### Quel est le bon FQBN pour...?

* Arduino UNO: `arduino:avr:uno`
* Arduino Mega: `arduino:avr:mega`
* Arduino Nano: `arduino:avr:nano` ou `arduino:avr:nano:cpu=atmega328old` si vous avez l'ancien bootloader.

#### Comment je peux trouver le bon noyau/FQBN pour une carte ?

Voir : https://github.com/arduino/arduino-cli#step-4-find-and-install-the-right-core
