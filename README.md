# Funktion statt Moral - GitHub Pages Setup

Dieses Projekt ist fuer Vite + React gebaut und fuer GitHub Pages vorbereitet.

## Was schon vorbereitet ist

- `vite.config.js` nutzt `base: "./"` fuer portable Asset-Pfade
- `.github/workflows/deploy-pages.yml` baut und deployt automatisch nach GitHub Pages
- `netlify.toml` bleibt fuer Netlify erhalten

## So veroeffentlichst du es auf GitHub Pages

1. Repository zu GitHub pushen.
2. Standard-Branch auf `main` setzen, falls noetig.
3. In GitHub unter `Settings` -> `Pages` als Source `GitHub Actions` waehlen.
4. Einmal auf `main` pushen oder den Workflow manuell starten.

## Lokaler Build

```bash
npm install
npm run build
```

Der statische Output landet in `dist/`.
