# Christopher Mwangi — FinTech Automation Engineer Portfolio

A professional portfolio website for **Christopher Mwangi**, a Data & Workflow Automation
Engineer specialising in microfinance automation, Python RPA, n8n orchestration, and
financial data systems.

---

## What This Portfolio Represents

Christopher builds automation systems that transform manual financial operations into
efficient digital workflows. This portfolio showcases four major project areas:

| Project | What it solves |
|---|---|
| Arrears Analytics Dashboard | Real-time portfolio health visibility for credit risk teams |
| Automated Financial Reporting Engine | Daily Excel report generation and WhatsApp distribution |
| Selenium Loan Booking Automation | Eliminates 4+ hours of manual loan entry per day |
| Bulk SMS Collections Automation | Consistent, segmented customer communication at scale |

---

## Technologies Used

**Frontend**
- HTML5 (semantic, accessible markup)
- CSS3 (custom properties, Grid, Flexbox, animations)
- Vanilla JavaScript (no frameworks, no build step required)

**Fonts**
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — display headings
- [Inter](https://fonts.google.com/specimen/Inter) — body text
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — code labels and eyebrows

**Design Approach**
- Dark enterprise FinTech aesthetic (`#0a0d14` base)
- Electric teal accent (`#00e5c3`) — inspired by terminal readouts and data dashboards
- Fully responsive (mobile-first breakpoints at 600px and 900px)
- Scroll-reveal animations via IntersectionObserver
- Respects `prefers-reduced-motion`

---

## Project Structure

```
christopher-portfolio/
│
├── index.html              Main HTML document
├── style.css               All styles (design tokens → components → responsive)
├── script.js               Vanilla JS (nav, animations, accordions, active links)
│
├── assets/
│   ├── images/             Add your profile photo here (see customisation below)
│   └── documents/          Place your CV here: Christopher_Mwangi_CV.pdf
│
└── README.md               This file
```

---

## How to Run Locally

No build tools or package managers required.

**Option 1 — Open directly**
```bash
# Just open the file in your browser
open index.html           # macOS
xdg-open index.html       # Linux
start index.html          # Windows
```

**Option 2 — Local dev server (recommended for live reload)**
```bash
# Python (built-in)
python3 -m http.server 8080

# Node.js (if you have it)
npx serve .

# VS Code: install the Live Server extension, then click "Go Live"
```

Then visit `http://localhost:8080`.

---

## How to Deploy on GitHub Pages

1. **Push this folder to a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under *Source*, select `Deploy from a branch`
   - Choose `main` branch, `/ (root)` folder
   - Click **Save**

3. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

> **Custom domain**: Add a `CNAME` file to the root with your domain, e.g. `christophermwangi.dev`, then configure your DNS provider.

---

## Customisation Checklist

Before going live, update the following:

- [ ] **Profile photo**: Add your photo as `assets/images/profile.jpg` and update the `.about__photo-placeholder` in `index.html` to use `<img src="assets/images/profile.jpg" alt="Christopher Mwangi">`
- [ ] **CV**: Place your CV at `assets/documents/Christopher_Mwangi_CV.pdf`
- [ ] **Email**: Already set to `chrismwangi022@gmail.com`
- [ ] **LinkedIn URL**: Replace `https://www.linkedin.com/in/christopher-mwangi-076616409` with your actual profile URL
- [ ] **GitHub URL**: Already set to `https://github.com/chrismwangi022-beep`
- [ ] **OG / social sharing image**: Add `<meta property="og:image" ...>` in `<head>` for better link previews

---

## Accessibility Notes

- All interactive elements have visible focus styles
- Images use descriptive `alt` attributes
- Navigation uses `aria-label` and `aria-expanded` attributes
- Animations disabled when `prefers-reduced-motion: reduce` is set
- Colour contrast meets WCAG AA across all text/background combinations

---

*Built with plain HTML, CSS, and JavaScript — no dependencies, no build step, deployable anywhere.*
