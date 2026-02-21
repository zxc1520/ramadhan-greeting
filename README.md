# 🌙 Ramadan Greeting Page

Web sederhana ucapan selamat menjalankan ibadah puasa dengan tema malam maghrib & Ramadan.

## Tech Stack
- **Astro** — Framework JS
- **Tailwind CSS** — Styling
- **Netlify** — Deployment

## Features
- ✨ Animasi bintang interaktif (parallax mouse)
- 🌙 Input nama yang bisa diisi langsung
- 🎁 Tombol dengan efek emoji hujan
- 🏮 Lentera berayun animasi
- 🌅 Tema warna senja maghrib + gold Ramadan

## Cara Pakai

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan dev server
```bash
npm run dev
```

### 3. Build untuk production
```bash
npm run build
```

## Deploy ke Netlify

### Cara 1: Drag & Drop
1. Jalankan `npm run build`
2. Drag folder `dist/` ke [netlify.com/drop](https://app.netlify.com/drop)

### Cara 2: Connect Git Repo
1. Push project ke GitHub/GitLab
2. Login ke Netlify → "Add new site" → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## Struktur Project
```
ramadan-greeting/
├── src/
│   ├── layouts/Layout.astro
│   ├── pages/index.astro
│   └── styles/global.css
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---
Made with ♥ by afghlm | رمضان كريم
