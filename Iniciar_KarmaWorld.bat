@echo off
cd /d "%~dp0"
if exist "%LocalAppData%\Programs\Python\Python313\pythonw.exe" (
  start "KarmaWorld Server Kit" "%LocalAppData%\Programs\Python\Python313\pythonw.exe" app.pyw
  exit /b
)
where pythonw >nul 2>nul
if %errorlevel%==0 (
  start "KarmaWorld Server Kit" pythonw app.pyw
  exit /b
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "KarmaWorld Server Kit" python app.pyw
  exit /b
)
echo Python no esta instalado o no esta en PATH.
pause
