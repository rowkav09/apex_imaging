@echo off
cd /d "c:\Users\rowka\test_site.worktrees\copilot-worktree-2026-02-07T21-53-20"

echo Creating new branch...
git checkout -b restore-recovered-work

echo Adding all files...
git add app/page.tsx app/components/Header.tsx app/drones/page.tsx app/globals.css .gitignore README.md

echo Committing changes...
git commit -m "Restore recovered work: all video footage, green theme, and pricing"

echo Pushing branch...
git push -u origin restore-recovered-work

echo.
echo Branch created and pushed!
echo Now create a PR on GitHub from 'restore-recovered-work' to your main branch
echo Press any key to exit...
pause >nul
