# Jigar Chavda — Modular Portfolio Architecture (Enhanced Edition)

Your portfolio has been refactored from 3 large files into a clean, modular structure organized by section so you can easily edit any part without hunting through long files. It works seamlessly whether you open `index.html` directly on Windows (`file://`), run VS Code Live Server (`localhost`), or deploy to GitHub Pages.

## Folder Structure

```text
Portfolio_Jigar/
├── index.html                        # Lightweight page shell, SEO/OpenGraph tags & navbar
├── sections/                         # Edit content/HTML for each section here:
│   ├── home.js                       # 1. Home / Hero section, availability pill & typing roles
│   ├── about.js                      # 2. About Me bio & categorized Technical Stack tabs
│   ├── professional-journey.js       # 3. Education & Internships timeline
│   ├── certificates.js               # 4. Certifications grid & verification modal
│   ├── projects.js                   # 5. Projects filter tabs, 9 cards + case study highlights
│   ├── resume.js                     # 6. Curriculum Vitae CTA, direct PDF print + A4 resume
│   └── get-in-touch.js               # 7. Contact form, Copy-Email pill & GitHub/LinkedIn links
├── css/                              # Edit styles for each section here:
│   ├── global.css                    # Theme colors, dark mode, scroll bar, cursor, spotlight
│   ├── home.css                      # Hero, status pill & logo styles
│   ├── about.css                     # About card, skill filter tabs & skill pills styles
│   ├── professional-journey.css      # Timeline spine, dots, & mobile collapse
│   ├── certificates.css              # Certification cards & lightbox modal
│   ├── projects.css                  # Project filter bar, 3D tilt cards & case study modal
│   ├── resume.css                    # Interactive resume viewer & A4 print styles
│   └── get-in-touch.css              # Contact card, copy-email pill & form input styles
└── js/
    └── main.js                       # Smooth 120fps cursor, spotlight, filters, modals & shortcuts
```

## Asset Placement
Keep your image and presentation assets (`J.png`, `JCCodeAlpha.png`, `JCCodeAlphaLOR.png`, `JCInternPe.PNG`, `NPTELCC.png`, `NPTELIoT.jpeg`, `ISBPE.png`, `KWG.png`, `SA.pptx`) in the root folder right next to `index.html`.
