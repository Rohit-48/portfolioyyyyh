#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

git add -A
git -c user.name='Rohit' -c user.email='Rohit-48@users.noreply.github.com' \
  commit -m 'Remove temporary fix script'
git push origin main
