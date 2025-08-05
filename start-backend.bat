@echo off
echo Starting VisionSpace Backend Server...

echo Checking for processes using port 5000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5000') do (
    echo Killing process %%a using port 5000...
    taskkill /PID %%a /F >nul 2>&1
)

echo Waiting 2 seconds for port to free up...
timeout /t 2 /nobreak >nul

cd /d "c:\Users\manas\OneDrive\Desktop\Personal Projects\Write\VisionSpace\apps\server"
echo Building TypeScript...
call pnpm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)
echo Starting server on port 5000...
set PORT=5000
call node dist/index.js
pause
