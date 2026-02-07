@echo off
cd /d "c:\Users\rowka\test_site.worktrees\copilot-worktree-2026-02-07T21-53-20"

echo Checking current status...
git status

echo.
echo Creating new branch 'restore-recovered-work'...
git checkout -b restore-recovered-work 2>nul || git checkout restore-recovered-work

echo.
echo Adding restored files...
git add app/page.tsx
git add app/components/Header.tsx
git add app/drones/page.tsx
git add app/globals.css
git add .gitignore
git add README.md

echo.
echo Committing changes...
git commit -m "Restore recovered work from VSCode history - all video footage and green theme"

echo.
echo Pushing to origin...
git push -u origin restore-recovered-work

echo.
echo ============================================
echo SUCCESS! Branch created and pushed.
echo.
echo Next steps:
echo 1. Go to your GitHub repository
echo 2. You'll see a banner to "Compare ^& pull request"
echo 3. Click it to create the PR
echo 4. Merge the PR to apply all your recovered work
echo ============================================
echo.
pause
