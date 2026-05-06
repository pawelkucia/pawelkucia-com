---
title: "OIDC Support Enhances Security for Dependabot and Code Scanning"
description: "GitHub introduces OpenID Connect (OIDC) authentication for private registries at the organization level, eliminating stored long-lived credentials."
date: 2026-04-14
tags: [devsecops, github, oidc, security]
cover: true
---

## Introducing OIDC Support for Dependabot and Code Scanning

GitHub has enabled OpenID Connect (OIDC) authentication for Dependabot and code scanning tools when accessing private registries configured at the organization level. This update marks a significant improvement in managing authentication securely without relying on stored credentials.

## Why This Matters

Previously, managing access to private registries often required storing long-lived credentials as repository secrets. These credentials pose security risks if compromised. By adopting OIDC, GitHub eliminates this need, enabling transient, token-based authentication that is more secure and easier to manage.

## Benefits for Organizations

- Enhanced security by removing long-lived secrets from repos
- Streamlined authentication workflows for Dependabot and code scanning
- Improved compliance through transient, short-lived tokens

This advancement reflects GitHub's ongoing commitment to securing the software supply chain and simplifying developers' workflows.