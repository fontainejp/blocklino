!macro preInit
    SetRegView 64
    WriteRegExpandStr HKLM “{INSTALL_REGISTRY_KEY}" InstallLocation "C:\myApp" WriteRegExpandStr HKCU "{INSTALL_REGISTRY_KEY}” InstallLocation "C:\myApp"
    SetRegView 32
    WriteRegExpandStr HKLM “{INSTALL_REGISTRY_KEY}" InstallLocation "C:\myApp" WriteRegExpandStr HKCU "{INSTALL_REGISTRY_KEY}” InstallLocation “C:\myApp”
!macroend

Function .onInstSuccess
    SetOutPath "$INSTDIR"
    CopyFiles “$INSTDIR\resources\app*” "$INSTDIR"
FunctionEnd

!include FileFunc.nsh

!define PRODUCT_NAME "Blocklino"
!define PRODUCT_EXE "Blocklino.exe"
!define PRODUCT_VERSION 1.0.0
!define PRODUCT_PUBLISHER "Blocklino Technologie"
!define PRODUCT_WEB_SITE "http://lesormeaux.net/blocklino/start.html"
!define PRODUCT_DIR_REGKEY "Software\Microsoft\Windows\CurrentVersion\App Paths\${PRODUCT_EXE}"
!define PRODUCT_UNINST_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\${PRODUCT_NAME}"
!define PRODUCT_UNINST_ROOT_KEY "HKLM"
!define LOCAL_FILES_PATH "C:\Users\philippe\OneDrive - ac-rouen.fr\_blockly@rduino\appli"
!define PATH_ICON "${LOCAL_FILES_PATH}\ico"
!define LICENSE_PATH "${LOCAL_FILES_PATH}"
!define SOURCE_PATH "${LOCAL_FILES_PATH}\files"

SetCompressor /SOLID lzma
Name "${PRODUCT_NAME}"
OutFile "../../../Blocklino-win64-${PRODUCT_VERSION}.exe"
LoadLanguageFile "${NSISDIR}\Contrib\Language files\French.nlf"
InstallDir "C:\${PRODUCT_NAME}"
Icon "${PATH_ICON}\install.ico"
UninstallIcon "${PATH_ICON}\uninstall.ico"
InstallDirRegKey HKLM "${PRODUCT_DIR_REGKEY}" ""
ComponentText "Choisissez les composants de $(^NameDA) que vous souhaitez installer."
DirText "L'installation de $(^Name) se fera dans le dossier suivant.$\r$\n$\r$\nPour choisir un autre dossier cliquer sur parcourir."
LicenseText "Vous devez accepter la licence utilisateur avant l'installation de $(^NameDA)."
LicenseData "${LICENSE_PATH}\license.txt"
ShowInstDetails hide
ShowUnInstDetails hide

Section "Blocklino " SEC01
  SectionIn RO
  SetOutPath "$INSTDIR"
  SetOverwrite try
  File /r "${SOURCE_PATH}\" 
  CreateDirectory "$SMPROGRAMS\${PRODUCT_NAME}"
SectionEnd

Section "Raccourci du menu demarrer" SEC02
  CreateShortCut "$SMPROGRAMS\${PRODUCT_NAME}\${PRODUCT_NAME}.lnk" "$INSTDIR\${PRODUCT_EXE}" "" "$INSTDIR\www\media\app.ico"
SectionEnd

Section "Raccourci du bureau" SEC03
  CreateShortCut "$DESKTOP\${PRODUCT_NAME}.lnk" "$INSTDIR\${PRODUCT_EXE}" "" "$INSTDIR\www\media\app.ico"
SectionEnd

Section "Association des fichiers BLOC" SEC04
  DetailPrint "Association des fichiers BLOC"
  WriteRegStr HKCR ".bloc" "" "Files BLOC"
  WriteRegStr HKCR "Files BLOC" "" "Files BLOC"
  WriteRegStr HKCR "Files BLOC\shell" "" "open"
  WriteRegStr HKCR "Files BLOC\DefaultIcon" "" "$INSTDIR\www\media\file.ico"
  WriteRegStr HKCR "Files BLOC\shell\open\command" "" '"$INSTDIR\${PRODUCT_EXE}" "%1"'
SectionEnd

Section -AdditionalIcons
  SetOutPath $INSTDIR
  CreateShortCut "$SMPROGRAMS\${PRODUCT_NAME}\Uninstall.lnk" "$INSTDIR\uninst.exe"
SectionEnd

Section -Post
  WriteUninstaller "$INSTDIR\uninst.exe"
  WriteRegStr HKLM "${PRODUCT_DIR_REGKEY}" "" "$INSTDIR\${PRODUCT_EXE}"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "DisplayName" "$(^Name)"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "UninstallString" "$INSTDIR\uninst.exe"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "DisplayIcon" "$INSTDIR\www\media\app.ico"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "DisplayVersion" "${PRODUCT_VERSION}"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "URLInfoAbout" "${PRODUCT_WEB_SITE}"
  WriteRegStr ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}" "Publisher" "${PRODUCT_PUBLISHER}"
SectionEnd

Function .onInit
  Var /GLOBAL version
  ReadRegStr $R0 HKLM \
  "${PRODUCT_UNINST_KEY}" \
  "UninstallString"
  StrCmp $R0 "" done
  ReadRegStr $version HKLM \
  "${PRODUCT_UNINST_KEY}" \
  "DisplayVersion"
  MessageBox MB_OKCANCEL|MB_ICONEXCLAMATION \
    "Une version de ${PRODUCT_NAME} exixte deja. $\n$\n'OK' pour desinstaller,$\n$\n'Annuler' sinon."\
  IDOK uninst
  Abort
uninst:
  ClearErrors
  ExecWait '$R0 _?=$INSTDIR'
  IfErrors no_remove_uninstaller done
  no_remove_uninstaller:
  Abort
done:
FunctionEnd

Function un.onUninstSuccess
  HideWindow
  MessageBox MB_ICONINFORMATION|MB_OK " $(^Name) est desinstalle."
FunctionEnd

Section Uninstall
  MessageBox MB_OKCANCEL "ATTENTION : Suppression de tous les fichiers !" IDYES uninstall_file IDCANCEL not_uninstall
  uninstall_file:
  RMDir /r "$INSTDIR"
  DeleteRegKey ${PRODUCT_UNINST_ROOT_KEY} "${PRODUCT_UNINST_KEY}"
  DeleteRegKey HKLM "${PRODUCT_DIR_REGKEY}"
  DeleteRegKey HKCR ".bloc"
  DeleteRegKey HKCR "Files BLOC"
  RMDir /r "$SMPROGRAMS\${PRODUCT_NAME}"
  Delete "$DESKTOP\${PRODUCT_NAME}.lnk"
  SetAutoClose false
  return
  not_uninstall:
  Abort
SectionEnd