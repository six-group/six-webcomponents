#!/usr/bin/env bash

if [ -n "$1" ]; then
  echo "copy-dist will copy built library into your project node_modules instead of npm link."
else
  echo "bash copy-dist.sh [project folder containing node_modules]"
  exit
fi

if test "$BASH" = "" || "$BASH" -uc "a=();true \"\${a[@]}\"" 2>/dev/null; then
    # Bash 4.4, Zsh
    set -euo pipefail
else
    # Bash 4.3 and older chokes on empty arrays with set -u.
    set -eo pipefail
fi
shopt -s nullglob globstar

function is_ok {
  printf "[ OK ] %s\n" "$1"
}

function exit_with_message {
  printf "[ ERROR ] %s\n" "$1"
  exit
}

function assert_exist {
  if [ -d "$1" ]; then
    is_ok "$1 - found"
  else
    exit_with_message "$1 - not found"
  fi
}

function copy_dist_and_loader {
  src_loader="./loader"
  src_dist="./dist"

  assert_exist "$src_loader"
  assert_exist "$src_dist"

  dst="$1/node_modules/@six/ui-library"

  dst_cache="$1/.angular/cache"
  dst_loader="$dst/loader"
  dst_dist="$dst/dist"

  assert_exist "$dst_cache"
  assert_exist "$dst_loader"
  assert_exist "$dst_dist"

  echo "removing destination..."
  rm -fr "$dst_cache"
  rm -fr "$dst_loader"
  rm -fr "$dst_dist"

  echo "copy source..."
  cp -r "$src_loader" "$dst_loader"
  cp -r "$src_dist" "$dst_dist"

  assert_exist "$dst_loader"
  assert_exist "$dst_dist"
}

# main
copy_dist_and_loader $1

exit 0
