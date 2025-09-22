@echo off
title Publicando cambios en Netlify...

echo.
echo ==========================================================
echo ==      INICIANDO PROCESO DE PUBLICACION EN NETLIFY     ==
echo ==========================================================
echo.

REM Paso 1: Preparar todos los archivos para ser guardados.
echo Agregando todos los archivos modificados...
git add .
echo.

REM Paso 2: Pedir al usuario el mensaje para el commit.
echo Escribi un mensaje breve describiendo los cambios que hiciste.
set /p commitMessage="Mensaje del commit: "
echo.

REM Paso 3: Guardar los cambios con el mensaje del usuario.
echo Guardando cambios con el mensaje: "%commitMessage%"
git commit -m "%commitMessage%"
echo.

REM Paso 4: Enviar los cambios a GitHub (Netlify hara el resto).
echo Enviando cambios a GitHub para desplegar en Netlify...
git push
echo.

echo ==========================================================
echo ==                 PROCESO COMPLETADO                   ==
echo ==========================================================
echo.
echo ¡Listo! Tus cambios han sido enviados.
echo Netlify comenzara a construir la nueva version en segundos.
echo Podes cerrar esta ventana.
echo.

pause
