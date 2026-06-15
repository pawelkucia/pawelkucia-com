---
title: "Securing Automation: Approval Required for Bot-Created Pull Request Workflows"
description: "GitHub enhances security by requiring user approval for workflows triggered by bot-created pull requests."
date: 2026-06-15
tags: [github, cicd, security, devops]
cover: true
---

## New Security Measure for Bot-Created Pull Requests

GitHub now requires explicit user approval for CI/CD workflows triggered by pull requests created by the github-actions[bot]. This new policy serves as an important security measure to prevent automated code from executing without oversight.

## Why This Matters

Automation is key in modern development pipelines but also introduces security risks if unchecked code executes automatically. By requiring approval, GitHub ensures that generated code from bots doesn't run workflows without human validation.

## Balancing Automation and Security

This update reflects a growing awareness of security concerns in automation workflows. It empowers users to benefit from automated pull requests while maintaining control, reducing risk in collaborative development environments.

## Conclusion

This approval step enhances the integrity of CI/CD processes by adding a checkpoint for bot-generated code execution, aligning workflow automation with best security practices.