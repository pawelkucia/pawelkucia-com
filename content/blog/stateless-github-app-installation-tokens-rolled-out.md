---
title: "Stateless GitHub App Installation Tokens Rolled Out"
description: "GitHub completes the staged rollout of stateless installation tokens for enhanced security and streamlined token management."
date: 2026-10-05
tags: [github, security, development, api, devops]
cover: true
---

## Introduction

On April 27, 2026, GitHub completed the staged rollout of stateless installation tokens for GitHub Apps. This significant update changes the default token format for all newly minted installation tokens.

## What Are Stateless Tokens?

Stateless tokens do not retain session data on the server side. Instead, all necessary information is embedded within the token itself. This shift eliminates the need for server-side token storage, reducing complexity and potential security risks.

## Impact on Developers

With all new GitHub App installation tokens being stateless by default, developers benefit from streamlined authentication processes and better security posture. It is important to review your application's token handling logic to ensure compatibility with this new format.

## Conclusion

The move towards stateless installation tokens aligns with modern security best practices and simplifies the development experience on GitHub. Keeping up-to-date with these changes will help maintain robust and efficient app integrations.
