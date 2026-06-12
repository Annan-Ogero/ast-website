# Annan Software Team (AST) — Website

Multi-page professional website for AST. Built in pure HTML/CSS/JS with EmailJS for contact handling. Deployed to Netlify via GitHub.

---

## Project Structure

```
ast-website/
├── index.html              # Homepage
├── css/
│   └── style.css           # All styles (global design system)
├── js/
│   └── main.js             # All JavaScript (navbar, animations, filter, counters)
├── pages/
│   ├── about.html          # About page
│   ├── services.html       # Services page
│   ├── projects.html       # Projects portfolio page
│   ├── team.html           # Team page
│   └── contact.html        # Contact page (EmailJS form)
├── images/                 # Upload your images here (see list below)
├── _redirects              # Netlify routing
├── robots.txt              # SEO: crawler permissions
└── sitemap.xml             # SEO: sitemap (update domain when live)
```

---

## Image Files to Upload

Place all images inside the `images/` folder. Use EXACTLY these filenames:

### Hero & General
| Filename | Usage |
|---|---|
| `hero-bg.jpg` | Homepage hero background texture/dark image |
| `hero-team.jpg` | Homepage hero right panel (team at work) |

### About Page
| Filename | Usage |
|---|---|
| `about-team.jpg` | About page main image (team together or workspace) |
| `about-teaching.jpg` | About page teaching section (at ST. PVTC or class) |

### Project Thumbnails
| Filename | Usage |
|---|---|
| `project-postique.jpg` | Postique email studio |
| `project-vitalink.jpg` | VitaLink marketplace |
| `project-darwin.jpg` | Darwin's Hotel |
| `project-stpvtc.jpg` | ST. Paul's PVTC website |
| `project-churchos.jpg` | ChurchOS mobile app |
| `project-velour.jpg` | VELOUR SS 2026 fashion page |
| `project-sentinel.jpg` | Sentinel cybersecurity tool |
| `project-bmw.jpg` | BMW M5 3D showcase |
| `project-neotactile.jpg` | Neo-Tactile UI kit |
| `project-emailai.jpg` | AI Email Auto-Reply |
| `project-portfolio.jpg` | Annan's personal portfolio |
| `project-linkedin.jpg` | LinkedIn Business Mastery course |

### Team Photos
| Filename | Usage |
|---|---|
| `team-annan.jpg` | Annan Ogero (team lead) |
| `team-member2.jpg` | Backend Developer |
| `team-member3.jpg` | Mobile Developer |
| `team-member4.jpg` | 3D Developer |
| `team-member5.jpg` | Cybersecurity Expert |
| `team-member6.jpg` | Full Stack Developer |

### Client / Testimonial Avatars (optional)
| Filename | Usage |
|---|---|
| `client-darwin.jpg` | Darwin's Hotel testimonial avatar |

### Recommended Image Specs
- **Hero images**: 1920×1080px minimum, JPG, dark/dramatic
- **Project thumbnails**: 800×500px, JPG
- **Team photos**: 500×600px portrait, JPG (face near top of frame)
- **Client avatars**: 100×100px, JPG or PNG

---

## EmailJS Setup (Contact Page)

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add an Email Service (Gmail recommended)
3. Create an Email Template with these variables:
   - `{{first_name}}`, `{{last_name}}`, `{{email}}`
   - `{{phone}}`, `{{service}}`, `{{budget}}`, `{{message}}`
4. Replace these 3 placeholders in `pages/contact.html`:
   - `YOUR_EMAILJS_PUBLIC_KEY` → your EmailJS public key
   - `YOUR_SERVICE_ID` → your service ID (e.g. `service_abc123`)
   - `YOUR_TEMPLATE_ID` → your template ID (e.g. `template_xyz456`)

---

## Deployment — GitHub + Netlify

1. Push this folder to a GitHub repository
2. Log in to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings:
   - **Build command**: (leave empty)
   - **Publish directory**: `.` or the root folder
6. Deploy — done.

The `_redirects` file is already configured for Netlify's routing.

---

## After Deployment

Update these in the files with your real domain:
- `sitemap.xml` — replace `https://ast.dev` with your actual domain
- All `<link rel="canonical">` tags in each HTML file
- `robots.txt` — update the sitemap URL
- All `og:url` meta tags

---

## Updating Team Member Names/Roles

Open `pages/team.html` and find the placeholder cards. Replace:
- `Team Member` → real name
- Role text → real role
- Bio paragraph → real bio
- Skill tags → their actual skills
- Social links → their GitHub/LinkedIn

---

## Adding More Projects

In `pages/projects.html`, copy any `<article class="project-card">` block and:
1. Update the `data-category` attribute to match a filter (`web`, `mobile`, `3d`, `ecommerce`, `saas`, `security`, `education`)
2. Update the image src, badge text, title, description
3. Update the Live Site and GitHub links
