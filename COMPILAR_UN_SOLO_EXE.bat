@echo off
setlocal
cd /d "%~dp0"

echo.
echo ================================================
echo  KARMAWORLD SERVER KIT - BUILD ONEFILE WINDOWS
echo ================================================
echo.

python -m pip install --upgrade pip
if errorlevel 1 goto :error

python -m pip install pyinstaller pywebview
if errorlevel 1 goto :error

if exist build rmdir /s /q build
if exist dist rmdir /s /q dist
if exist "KarmaWorld Server Kit.spec" del /f /q "KarmaWorld Server Kit.spec"

python -m PyInstaller --noconfirm --clean "KarmaWorld_Server_Kit_OneFile.spec"
if errorlevel 1 goto :error

echo.
echo ================================================
echo  BUILD COMPLETADO
echo  EXE: dist\KarmaWorld Server Kit.exe
echo ================================================
echo.
pause
exit /b 0

:error
echo.
echo ERROR: No se pudo generar el EXE.
pause
exit /b 1
