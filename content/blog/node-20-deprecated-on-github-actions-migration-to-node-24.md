---
title: "Node 20 Deprecated on GitHub Actions: Migration to Node 24"
description: "GitHub Actions runners have transitioned from Node 20 to Node 24 for JavaScript actions. Learn what this means for your workflows."
date: 2026-09-25
tags: [GitHub, NodeJS, CI/CD, DevOps]
cover: true
---

## Node 20 Is No Longer Supported on GitHub Actions

GitHub has officially deprecated Node 20 on its Actions runners. From now on, these environments will use Node 24 as the default runtime for JavaScript actions.

## What This Means for Developers

Workflows that depend on Node 20 will need to be updated to Node 24 to ensure compatibility and security. The temporary opt-out allowing use of Node 20 (`ACTIONS_ALLOW_USE_UNSECURE_NODE_VERSION`) is no longer available.

## Next Steps

Review your CI/CD pipelines and update your Node.js version to 24. Testing your workflows under the new runtime is recommended to identify any compatibility issues early.

Staying current with runtime upgrades is essential to maintain secure and efficient automation processes within GitHub Actions.