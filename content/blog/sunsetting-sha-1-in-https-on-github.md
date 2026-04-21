---
title: "Sunsetting SHA-1 in HTTPS on GitHub"
description: "GitHub is enhancing HTTPS security by removing SHA-1 support to mitigate vulnerabilities."
date: 2026-04-20
tags: [security, github, https, cryptography]
cover: true
---

## Why Is GitHub Removing SHA-1?

SHA-1, an aging cryptographic hash function, has known vulnerabilities that can compromise secure connections. GitHub's decision to sunset SHA-1 in HTTPS connections aims to protect users by enforcing stronger cryptographic standards.

## What This Means for Users and Developers

Browsers and software interacting with GitHub’s website and content delivery networks (CDNs) must support newer hash algorithms. Users relying on outdated clients that still use SHA-1 may experience access issues.

## Preparing for the Change

- Ensure browsers are up to date.
- Verify any software accessing GitHub uses modern TLS implementations.
- Monitor for updates from GitHub regarding the transition timeline.

This proactive shift enhances security across GitHub’s infrastructure, aligning with industry best practices in cryptographic safety.
