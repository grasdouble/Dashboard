#!/usr/bin/env bash
set -e
cd "$TRAVIS_BUILD_DIR"
echo "export const github = {token: '${TOKEN}'};" > packages/server/src/config.js
echo "DISPLAY CONFIG"
echo "--------------"
tail packages/server/src/config.js