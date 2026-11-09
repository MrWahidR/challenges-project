# PowerShell script to help push to GitHub
# Run this script from the challenges-project directory

Write-Host "`n╔════════════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║         🚀 CHALLENGE QUEST - GIT PUSH TO GITHUB 🚀                     ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Check if we're in the right directory
if (-not (Test-Path "index.html")) {
    Write-Host "❌ ERROR: index.html not found!" -ForegroundColor Red
    Write-Host "Make sure you're in: C:\Users\wrauf\OneDrive - Greenhead College\python files\challenges-project`n" -ForegroundColor Yellow
    Exit 1
}

Write-Host "✅ Project found! (index.html detected)`n" -ForegroundColor Green

# Check git remote
Write-Host "Checking git remote..." -ForegroundColor Yellow
$remote = git remote get-url origin 2>$null

if ($null -eq $remote -or $remote -eq "") {
    Write-Host "⚠️  No git remote found! Setting up..." -ForegroundColor Yellow
    git remote add origin "https://github.com/MrWahidR/challenges-project.git"
    Write-Host "✅ Remote added: https://github.com/MrWahidR/challenges-project.git`n" -ForegroundColor Green
} else {
    Write-Host "Current remote: $remote`n" -ForegroundColor Cyan
}

Write-Host "════════════════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""

# Show git status
Write-Host "📊 Current Status:" -ForegroundColor Cyan
git status -s
Write-Host ""

# Check for uncommitted changes
$status = git status --porcelain

if ($status) {
    Write-Host "⚠️  You have uncommitted changes!" -ForegroundColor Yellow
    Write-Host ""
    $choice = Read-Host "Would you like to commit and push? (Y/N)"
    
    if ($choice -ieq "Y") {
        Write-Host ""
        Write-Host "📝 Staging all changes..." -ForegroundColor Yellow
        git add .
        
        Write-Host ""
        Write-Host "✏️  Enter commit message (or press Enter for 'Update project files'):" -ForegroundColor Yellow
        $commitMsg = Read-Host
        
        if ([string]::IsNullOrWhiteSpace($commitMsg)) {
            $commitMsg = "Update project files"
        }
        
        Write-Host ""
        Write-Host "🔖 Creating commit: '$commitMsg'" -ForegroundColor Cyan
        git commit -m "$commitMsg"
        
        if ($LASTEXITCODE -ne 0) {
            Write-Host "❌ Commit failed!" -ForegroundColor Red
            Exit 1
        }
    } else {
        Write-Host "Skipping commit." -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "════════════════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""
Write-Host "🚀 Ready to push!" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  IMPORTANT: When prompted, enter your GitHub Personal Access Token" -ForegroundColor Yellow
Write-Host "   (NOT your GitHub password)" -ForegroundColor Yellow
Write-Host ""
Write-Host "   Don't have a token? See: AUTHENTICATION_SETUP.md" -ForegroundColor Yellow
Write-Host ""
Write-Host "   Pushing to: https://github.com/MrWahidR/challenges-project.git" -ForegroundColor Cyan
Write-Host ""

Write-Host "Starting push in 3 seconds..." -ForegroundColor Gray
Start-Sleep -Seconds 3

Write-Host ""

# Push to GitHub
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "════════════════════════════════════════════════════════════════════════" -ForegroundColor Green
    Write-Host ""
    Write-Host "✅ SUCCESS! Your code has been pushed to GitHub! 🎉" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 Repository: https://github.com/MrWahidR/challenges-project" -ForegroundColor Cyan
    Write-Host "🌐 Live Site:  https://MrWahidR.github.io/challenges-project" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next step: Enable GitHub Pages in Settings (see VIEWING_ON_GITHUB.md)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "════════════════════════════════════════════════════════════════════════" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "════════════════════════════════════════════════════════════════════════" -ForegroundColor Red
    Write-Host ""
    Write-Host "❌ Push failed! Check the error above." -ForegroundColor Red
    Write-Host ""
    Write-Host "Common solutions:" -ForegroundColor Yellow
    Write-Host "1. Create a Personal Access Token (see AUTHENTICATION_SETUP.md)" -ForegroundColor Yellow
    Write-Host "2. Make sure the token has 'repo' scope" -ForegroundColor Yellow
    Write-Host "3. Enter the token (not your GitHub password)" -ForegroundColor Yellow
    Write-Host "4. Check repository exists: https://github.com/MrWahidR/challenges-project" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "════════════════════════════════════════════════════════════════════════" -ForegroundColor Red
}

Write-Host ""
