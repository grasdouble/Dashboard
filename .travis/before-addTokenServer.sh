#!/usr/bin/env bash
set -e
cd "$TRAVIS_BUILD_DIR"
echo "export const github = { token: '$TOKEN' };" > packages/backend/src/config.js