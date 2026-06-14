#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

git ls-tree -r HEAD --name-only -z | while IFS= read -r -d '' f; do
  if [ "$f" = $'\134' ] || [ "$f" = '2' ]; then
    continue
  fi

  dir=$(dirname "$f")
  if [ "$dir" != '.' ]; then
    mkdir -p "$dir"
  fi

  git show "HEAD:$f" > "$f"
done

rm -rf '"'

git add -A
git -c user.name='Rohit' -c user.email='Rohit-48@users.noreply.github.com' \
  commit -m 'Remove invalid Windows paths (backslash and stray file 2)'

git checkout -f HEAD
echo "FIX COMPLETE"
git status --short
git log -1 --oneline
