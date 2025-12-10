# Blackboard-PG-Wordpress

This is the Pinegrow source project for the **Blackboard WordPress Block Theme**.

## 💡 What this repo is for
This repo contains your **editable source files** — everything you work on in Pinegrow, including:

- HTML files used to define blocks and templates (`index.html`, etc.)
- CSS and JS in `/assets/`
- Fonts and utilities in `/fonts/`, `/tailwind_theme/`
- Pinegrow configuration: `pinegrow.json`, `/pginfo/`

## 🧩 What it does NOT include
This does *not* include the exported WordPress theme. Pinegrow exports those to a separate folder (usually `wp-content/themes/blackboard`).

## ✅ Use this for:
- Version controlling your Pinegrow work
- Sharing the theme source on GitHub
- Tracking fixes, fonts, HLS support, animation tweaks, etc.

## 📂 Recommended Structure

```
Blackboard-PG-Wordpress/
├── assets/
├── fonts/
├── pginfo/
├── tailwind_theme/
├── index.html
├── pinegrow.json
├── functions.php (if manually edited)
├── README.md
├── .gitignore
```

## 🚫 Ignored (via .gitignore)
- Pinegrow auto-backups
- Exports
- System files
- node_modules

## 🧪 Maintained Features
- ✅ Fonts in editor (SuisseIntl + Denton)
- ✅ HLS video preview in Chrome (editor)
- ✅ Scroll-triggered video play/pause (front-end)
- ✅ Click-to-pause / click-to-restart UX
- ✅ GSAP header animation
- ✅ Clock script
- ✅ Pinegrow markers preserved