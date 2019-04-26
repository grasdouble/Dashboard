#!/usr/bin/env bash
set -e
cd "$TRAVIS_BUILD_DIR"
echo "export const github = {token: '${TEST}'};" > packages/server/src/config.js
echo "DISPLAY CONFIG"
echo "--------------"
pwd
tail packages/server/src/config.js