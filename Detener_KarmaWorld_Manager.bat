@echo off
cd /d "%~dp0"
if not exist manager.pid (
  echo No existe manager.pid. El manager puede no estar arrancado.
  pause
  exit /b 1
)
set /p MYPID=<manager.pid
if "%MYPID%"=="" (
  echo PID vacio.
  pause
  exit /b 1
)
taskkill /PID %MYPID% /F
if %errorlevel%==0 (
  echo Manager detenido.
) else (
  echo No se pudo detener el manager con ese PID.
)
pause
