#!/bin/bash
executeCommands() {
    local directory="$1"
    cd "$directory" || { echo "Directory not found."; exit 1;>
    git pull || { echo "Failed to execute git pull."; exit 1;>
    pnpm install || { echo "Failed to execute pnpm install.";>
    pnpm build || { echo "Failed to execute pnpm build."; exi>
    pm2 restart vertigolabs || { echo "Failed to execute pm2 >}

executeCommands "/var/www/vertigolabs"