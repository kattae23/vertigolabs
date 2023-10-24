#!/bin/bash
 
executeCommands() {
    local directory="$1"
 
    cd "$directory" || { echo "Directory not found."; exit 1; }
 
    git fetch origin dev || { echo "Failed to execute git fetch."; exit 1; }

    git pull origin dev || { echo "Failed to execute git pull."; exit 1; }
 
    pnpm install || { echo "Failed to execute pnpm install."; exit 1; }
 
    pnpm build || { echo "Failed to execute pnpm build."; exit 1; }
 
    pm2 start pnpm --name vertigolabs -- run start -- -p 3000
}
 
executeCommands "./"