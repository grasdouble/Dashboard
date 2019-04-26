#!/usr/bin/env bash
cd "$TRAVIS_BUILD_DIR"
echo "export const github = {token: '${TOKEN}'};" > server/src/config.js