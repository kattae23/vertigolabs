#!/bin/bash
 
executeCommands() {
    local directory="$1"
 
    cd "$directory" || { echo "Directory not found."; exit 1; }
 
    git pull || { echo "Failed to execute git pull."; exit 1; }
 
    pnpm install || { echo "Failed to execute pnpm install."; exit 1; }
 
    pnpm build || { echo "Failed to execute pnpm build."; exit 1; }
 
    pm2 restart project || { echo "Failed to execute pm2 restart."; exit 1; }
}
 
executeCommands "./"