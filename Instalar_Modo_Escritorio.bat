@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  py -m pip install --upgrade pywebview
  pause
  exit /b
)
where python >nul 2>nul
if %errorlevel%==0 (
  python -m pip install --upgrade pywebview
  pause
  exit /b
)
echo No se encontro Python en PATH.
pause
