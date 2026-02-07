#!/bin/bash
cd "c:/Users/rowka/test_site.worktrees/copilot-worktree-2026-02-07T21-53-20"

git checkout -b restore-recovered-work
git add -A
git commit -m "Restore recovered work from VSCode history"
git push -u origin restore-recovered-work

echo "Done! Check GitHub for PR"
read -p "Press enter to close..."
