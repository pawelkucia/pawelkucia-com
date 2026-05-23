---
title: "npm Advances Supply-Chain Security with Staged Publishing and New Install-Time Controls"
description: "npm releases staged publishing feature and new install source flags to enhance package security and control."
date: 2026-05-23
tags: [npm, security, supply-chain, devtools]
cover: true
---

## Enhancing Supply-Chain Security in npm

Supply-chain security remains a critical concern for developers managing dependencies. npm’s latest updates focus on strengthening this area by introducing staged publishing and new install-time control flags.

## Staged Publishing Now Generally Available

Staged publishing allows package maintainers to release updates in phases, reducing the risk of exposing users to potentially harmful code. By controlling the flow of package versions, maintainers can catch issues early and ensure safer updates.

## New --allow-* Flags for Install-Time Controls

npm has introduced new `--allow-file`, `--allow-remote`, and `--allow-directory` flags that complement the pre-existing `--allow-git` flag. These flags provide finer granularity in controlling what install sources are permitted, empowering developers to enforce stricter policies during package installations.

## Conclusion

These enhancements mark important strides in securing npm's package ecosystem, helping to protect projects from supply-chain risks through more deliberate publishing and installation practices.