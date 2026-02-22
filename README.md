# pawelkucia.com

Personal portfolio and blog site for Paweł Kucia — Full Stack Engineer.

Built with **Nuxt 3**, **Tailwind CSS**, and **@nuxt/content** for static Markdown-based blog posts.

---

## Tech Stack

- [Nuxt 3](https://nuxt.com) — SSG/SSR framework
- [Tailwind CSS v3](https://tailwindcss.com) + [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) — styling
- [@nuxt/content v2](https://content.nuxt.com) — Markdown blog posts
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org) — dark/light mode
- [@nuxtjs/google-fonts](https://google-fonts.nuxtjs.org) — Geist Mono font
- [Font Awesome](https://fontawesome.com) — icons

---

## Project Structure

```
pages/
  index.vue           # Portfolio homepage
  blog/
    index.vue         # Blog listing page
    [slug].vue        # Blog post detail page

content/
  blog/
    my-first-post.md  # Sample blog post

components/
  TheHeader.vue       # Fixed navigation header (desktop + mobile)
  Navigation.vue      # Desktop nav links
  Footer.vue
  sections/
    TechStack.vue
    Experience.vue
    Testimonials.vue
    Contact.vue

public/
  images/
    blog/             # Cover images: <slug>.jpeg
```

---

## Blog Posts

Posts are Markdown files in `content/blog/`. Each file supports the following frontmatter fields:

```yaml
---
title: "Post Title"
description: "Short description used for SEO meta tags."
date: 2026-02-22
tags: [nuxt, vue, typescript]
cover: true           # optional — renders /images/blog/<slug>.jpeg
---
```

When `cover: true`, place a 1:1 image at `public/images/blog/<slug>.jpeg`.

---

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Static Site Generation

```bash
npm run generate
```
