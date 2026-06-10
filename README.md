# WordWise 📗

A simple, offline-first English word collection app for language learners. Built with vanilla HTML/CSS/JS and Material Design — no frameworks, no build step.

**Live app:** https://fireflyadventure.github.io/wordwise/

## Features

- **My Dictionary** — add any English word; it's saved alphabetically with pronunciation (audio), meanings, and 5 example sentences
- **Daily 5 Words** — five new vocabulary words with meanings and usage every day
- **Progress tracking** — words collected per day, month, and year with charts and milestones
- **Fun Zone** — four 5-minute word games with timer and score:
  - Word Chain (next word starts with the last letter)
  - Picture Words (type words matching a scene)
  - Word Maker (build words from a long word's letters)
  - A–Z Sprint (5 words for each alphabet letter)
- **Works offline** — Service Worker + IndexedDB; definitions fetched from [Free Dictionary API](https://dictionaryapi.dev/) are cached for offline reuse
- **Installable on Android** — PWA with manifest; use Chrome's "Add to Home screen"

## Run locally

Any static file server works:

```powershell
powershell -ExecutionPolicy Bypass -File server.ps1   # serves on http://localhost:3001
```

## Install on your phone

1. Open the live URL in Chrome on Android
2. Tap the ⋮ menu → **Add to Home screen**
3. The app opens full-screen and works without internet
