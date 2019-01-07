!include FileFunc.nsh
!define PRODUCT_NAME "Blocklino"
!define PRODUCT_EXE "Blocklino.exe"
!define PRODUCT_VERSION 1.1
!define PRODUCT_PUBLISHER "Blocklino Technologie"
!define PRODUCT_WEB_SITE "http://lesormeaux.net/blocklino/start.html"
!define LOCAL_FILES_PATH "C:\Users\philippe\OneDrive - ac-rouen.fr\_blockly@rduino\appli"
!define PATH_ICON "${LOCAL_FILES_PATH}\ico"
!define SOURCE_PATH "${LOCAL_FILES_PATH}\files"

SetCompressor /SOLID lzma
Name "${PRODUCT_NAME}"
OutFile "Blocklino-win64-correctif-${PRODUCT_VERSION}.exe"
LoadLanguageFile "${NSISDIR}\Contrib\Language files\French.nlf"
InstallDir "C:\${PRODUCT_NAME}"
Icon "${PATH_ICON}\install.ico"
ShowInstDetails show

Section "Blocklino " SEC01
  SectionIn RO
  SetOutPath "$INSTDIR"
  SetOverwrite try
  File /r "${SOURCE_PATH}\www"
  File /r "${SOURCE_PATH}\resources" 
SectionEnd