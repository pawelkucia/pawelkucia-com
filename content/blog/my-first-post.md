---
title: "My First Post"
description: "An introduction to this blog — what to expect and why I'm writing."
date: 2026-02-22
tags: [nuxt, vue, javascript]
cover: true
---

## Why I Started Writing

Building things is only half the work. Explaining them is where the real understanding happens. This blog is where I share what I learn, what I build, and the decisions behind both.

## What You Can Expect

Posts here will cover full-stack development — mostly **Vue**, **Nuxt**, **TypeScript**, and the infrastructure around them. No filler, no beginner tutorials repeated for SEO. Just notes from production systems and real trade-offs.

## A Quick Code Sample

```typescript
// A simple composable to format blog dates
export function useFormattedDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}
```

## What's Next

I'm planning posts on:

- Nuxt Content as a lightweight CMS
- Edge-rendered vs statically generated pages — when each makes sense
- TypeScript patterns I actually use

Stay tuned.
