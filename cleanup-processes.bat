@echo off
echo 🔄 Cleaning up SketchWiz processes...

echo Killing all Node.js processes...
taskkill /F /IM node.exe >nul 2>&1

echo Waiting for processes to fully terminate...
timeout /t 3 /nobreak >nul

echo Checking port usage:
echo Port 5000:
netstat -ano | findstr :5000
echo Port 8081:
netstat -ano | findstr :8081
echo Port 3000:
netstat -ano | findstr :3000

echo ✅ Cleanup complete!
pause
