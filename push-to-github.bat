@echo off
REM Git Push Helper Script for Challenge Quest
REM This script helps you push your code to GitHub

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════════════════════╗
echo ║                                                                        ║
echo ║                    🚀 CHALLENGE QUEST - GIT PUSH HELPER 🚀             ║
echo ║                                                                        ║
echo ╚════════════════════════════════════════════════════════════════════════╝
echo.

REM Check if we're in the right directory
if not exist "index.html" (
    echo ❌ ERROR: index.html not found!
    echo.
    echo Make sure you're in the challenges-project directory:
    echo C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project
    echo.
    pause
    exit /b 1
)

echo ✅ Project found! (index.html detected)
echo.

REM Check git remote
echo Checking git remote...
for /f "tokens=2" %%A in ('git remote get-url origin 2^>nul') do set "REMOTE_URL=%%A"

if "%REMOTE_URL%"=="" (
    echo ⚠️  No git remote found! Setting up...
    git remote add origin https://github.com/MrWahidR/challenges-project.git
    echo ✅ Remote added: https://github.com/MrWahidR/challenges-project.git
) else (
    echo Current remote: %REMOTE_URL%
)

echo.
echo ════════════════════════════════════════════════════════════════════════
echo.

REM Show git status
echo 📊 Current Status:
git status -s
echo.

REM Check if there are uncommitted changes
git status --porcelain | findstr /R "." >nul
if %ERRORLEVEL% EQU 0 (
    echo ⚠️  You have uncommitted changes!
    echo.
    echo Would you like to commit and push? (Y/N)
    set /p CHOICE=
    
    if /i "%CHOICE%"=="Y" (
        echo.
        echo 📝 Staging all changes...
        git add .
        
        echo.
        echo ✏️  Enter commit message (or press Enter for default):
        set /p COMMIT_MSG=
        
        if "%COMMIT_MSG%"=="" (
            set COMMIT_MSG=Update project files
        )
        
        echo.
        echo 🔖 Creating commit: "%COMMIT_MSG%"
        git commit -m "%COMMIT_MSG%"
        
        if !ERRORLEVEL! NEQ 0 (
            echo ❌ Commit failed!
            pause
            exit /b 1
        )
    ) else (
        echo Skipping commit.
    )
)

echo.
echo ════════════════════════════════════════════════════════════════════════
echo.
echo 🚀 Ready to push!
echo.
echo ⚠️  IMPORTANT: When prompted for password, enter your GitHub Personal Access Token
echo (not your password). If you don't have one yet, see AUTHENTICATION_SETUP.md
echo.
echo Pushing to: https://github.com/MrWahidR/challenges-project.git
echo.

timeout /t 3

REM Try to push
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ════════════════════════════════════════════════════════════════════════
    echo.
    echo ✅ SUCCESS! Your code has been pushed to GitHub! 🎉
    echo.
    echo 📍 Repository: https://github.com/MrWahidR/challenges-project
    echo 🌐 Live Site:  https://MrWahidR.github.io/challenges-project
    echo.
    echo Next step: Enable GitHub Pages (see VIEWING_ON_GITHUB.md)
    echo.
    echo ════════════════════════════════════════════════════════════════════════
) else (
    echo.
    echo ════════════════════════════════════════════════════════════════════════
    echo.
    echo ❌ Push failed! Check the error above.
    echo.
    echo Common solutions:
    echo 1. Make sure you created a Personal Access Token (see AUTHENTICATION_SETUP.md)
    echo 2. Make sure the token has 'repo' scope
    echo 3. Make sure you entered the token correctly (not your GitHub password)
    echo 4. Make sure the GitHub repository exists at: https://github.com/MrWahidR/challenges-project
    echo.
    echo ════════════════════════════════════════════════════════════════════════
)

echo.
pause
