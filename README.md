# Het Sakariya - Portfolio Website

A modern, responsive developer portfolio built with React and Vite to showcase skills, projects, certifications, hackathons, achievements, and contact details.

## Live Preview

- Local: `http://localhost:5173/`
- Production: deploy on Vercel/Netlify/GitHub Pages

## Tech Stack

- React
- Vite
- Framer Motion
- Lucide React
- CSS (custom styling)
- EmailJS (contact form integration)

## Key Features

- Premium hero section with profile photo and animated role text
- Fully responsive layout (desktop, tablet, mobile)
- Skills section with categorized cards
- Projects section with category filters:
  - Games
  - Clones
  - Full Stack
  - Frontend
- Certificates, hackathons, and achievements sections
- Dedicated resume view section (view-only behavior)
- Contact form with EmailJS-ready integration
- Social media links:
  - GitHub
  - LinkedIn
  - LeetCode
  - Twitter (X)
  - YouTube
- SEO-ready setup:
  - meta tags
  - Open Graph + Twitter cards
  - canonical URL
  - `robots.txt`
  - `sitemap.xml`

## Project Structure

```text
src/
  components/
  data/
  assets/
  styles/
public/
  robots.txt
  sitemap.xml
index.html
```

## Getting Started

### 1) Clone

```bash
git clone <your-repo-url>
cd Portfolio
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

### 4) Build for production

```bash
npm run build
```

### 5) Preview production build

```bash
npm run preview
```

## Environment Variables

Create a `.env` file from `.env.example` for EmailJS integration:

```bash
cp .env.example .env
```

Add your keys:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment (Vercel)

1. Import the repository into Vercel
2. Framework preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables (EmailJS keys)
6. Deploy

## SEO Checklist

- [x] Title includes name
- [x] Meta description configured
- [x] Open Graph and Twitter tags added
- [x] `robots.txt` present
- [x] `sitemap.xml` present
- [ ] Google Search Console verification (manual step)

## Author

**Het Sakariya**

- GitHub: [hetsakariya0111-gi](https://github.com/hetsakariya0111-gi)
- LinkedIn: [Het Sakariya](https://www.linkedin.com/in/het-sakariya-9159623ab/)
- Email: hetsakariya.0111@gmail.com

