<p align="center">
  <img src="https://img.shields.io/badge/Claude%20Code-Skill-22c55e?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude Code Skill">
  <img src="https://img.shields.io/github/license/kemenystudio/roier-skill?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/github/stars/kemenystudio/roier-skill?style=for-the-badge" alt="GitHub Stars">
</p>

<h1 align="center">⚡ Roier SEO Skill</h1>

<p align="center">
  <strong>AI-powered technical SEO auditing and automatic fixes for Claude Code</strong>
</p>

<p align="center">
  <a href="#-quick-install">Install</a> •
  <a href="#-features">Features</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-demo">Demo</a> •
  <a href="./landing/index.html">Landing Page</a>
</p>

---

## 🚀 Quick Install

```bash
git clone https://github.com/kemenystudio/roier-skill ~/.claude/skills/roier-seo && cd ~/.claude/skills/roier-seo/scripts && npm install
```

That's it! The skill is now available in Claude Code.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 **Lighthouse Audits** | Run full audits on any URL (localhost or live) |
| 🔧 **Auto-Fix Issues** | Claude implements fixes directly in your codebase |
| ⚡ **Framework Aware** | Detects Next.js, React, Vue, Nuxt, plain HTML |
| 📊 **Core Web Vitals** | Track FCP, LCP, TBT, CLS metrics |
| 🏗️ **Structured Data** | JSON-LD schemas for rich snippets |
| ♿ **Accessibility** | WCAG compliance fixes |

### What It Fixes

- **Meta Tags**: title, description, viewport, charset, robots
- **Open Graph**: og:title, og:description, og:image
- **Twitter Cards**: twitter:card, twitter:title
- **Structured Data**: Organization, WebSite, Article, BreadcrumbList
- **Canonical URLs**: Prevent duplicate content issues
- **Images**: alt text, dimensions, lazy loading, WebP/AVIF
- **Accessibility**: ARIA labels, skip links, form labels, contrast
- **Performance**: preconnect, preload, font-display, resource hints

## 📖 Usage

Once installed, just ask Claude naturally:

```
"Audit my site at localhost:3000 and fix any SEO issues"

"Check the SEO of https://example.com"

"Add proper meta tags to my Next.js app"

"Fix the accessibility issues on my landing page"

"Add structured data to my blog posts"
```

## 🎬 Demo

```
┌─────────────────────────────────────────────────────────────────┐
│ you: Audit my site at localhost:3000 and fix SEO issues         │
├─────────────────────────────────────────────────────────────────┤
│ Running Lighthouse audit on http://localhost:3000...            │
│                                                                 │
│ 📊 Scores:                                                      │
│   Performance: 78 | Accessibility: 85 | SEO: 64                 │
│                                                                 │
│ 🔴 Critical Issues Found:                                       │
│   • Document does not have a meta description                   │
│   • Images do not have [alt] attributes                         │
│   • Links do not have discernible names                         │
│                                                                 │
│ Detected framework: Next.js (App Router)                        │
│ Implementing fixes...                                           │
│                                                                 │
│ ✅ Added meta description to app/layout.tsx                     │
│ ✅ Added alt attributes to 3 images in components/Hero.tsx      │
│ ✅ Added aria-labels to icon buttons in components/Nav.tsx      │
│                                                                 │
│ Re-running audit to verify...                                   │
│ 🎉 SEO score improved from 64 to 92!                            │
└─────────────────────────────────────────────────────────────────┘
```

## 🛠️ Requirements

- **Node.js 18+**
- **Chrome/Chromium** (for local Lighthouse audits)
- **Claude Code** v1.0+

## 📁 Project Structure

```
roier-skill/
├── SKILL.md              # Main skill instructions (loaded by Claude)
├── README.md             # This file
├── LICENSE               # MIT License
├── landing/
│   └── index.html        # Landing page for GitHub Pages
└── scripts/
    ├── audit.js          # Local Lighthouse audit (needs Chrome)
    ├── audit-api.js      # PageSpeed API audit (public URLs only)
    ├── install.sh        # Installation helper
    └── package.json      # Dependencies
```

## 🔧 Manual Installation

### Option 1: Global Skill (available in all projects)

```bash
mkdir -p ~/.claude/skills/roier-seo
git clone https://github.com/kemenystudio/roier-skill ~/.claude/skills/roier-seo
cd ~/.claude/skills/roier-seo/scripts && npm install
```

### Option 2: Project Skill (version controlled with your project)

```bash
mkdir -p .claude/skills/roier-seo
git clone https://github.com/kemenystudio/roier-skill .claude/skills/roier-seo
cd .claude/skills/roier-seo/scripts && npm install
```

## 📊 Audit Scripts

### Local Lighthouse (`audit.js`)

Works on localhost and any URL. Requires Chrome/Chromium.

```bash
node scripts/audit.js http://localhost:3000
node scripts/audit.js https://example.com --output=summary
node scripts/audit.js https://example.com --save=results.json
```

### PageSpeed API (`audit-api.js`)

Works on public URLs only. No Chrome needed.

```bash
node scripts/audit-api.js https://example.com
node scripts/audit-api.js https://example.com --key=YOUR_API_KEY
```

## 📤 Output Format

```json
{
  "url": "https://example.com",
  "scores": {
    "performance": 85,
    "accessibility": 92,
    "bestPractices": 100,
    "seo": 88,
    "pwa": 30
  },
  "webVitals": {
    "FCP": 1200,
    "LCP": 2500,
    "TBT": 150,
    "CLS": 0.05
  },
  "issues": {
    "critical": [...],
    "serious": [...],
    "moderate": [...],
    "minor": [...]
  }
}
```

## 🤝 Contributing

Contributions are welcome!

- Add more fix patterns for common SEO issues
- Support additional frameworks
- Improve audit analysis and prioritization
- Add new SEO capabilities

## 📄 License

[MIT License](./LICENSE) - Free for personal and commercial use.

---

<p align="center">
  <strong>Built with ❤️ by <a href="https://kemenystudio.com">Kemeny Studio</a></strong>
</p>

<p align="center">
  <a href="https://github.com/kemenystudio/roier-skill">GitHub</a> •
  <a href="https://github.com/kemenystudio/roier-skill/issues">Issues</a> •
  <a href="https://github.com/kemenystudio/roier-skill/discussions">Discussions</a>
</p>
