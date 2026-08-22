<<<<<<< HEAD
# Erijesu-Portfolio
My first portfolio
=======
# Erijesu — Frontend Developer Portfolio

A single-page portfolio built with plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies — open `index.html` in a browser and it works.

## Structure

```
portfolio/
├── index.html          All page content and structure
├── css/
│   └── style.css        All styling (colors, layout, animation, responsive rules)
├── js/
│   └── main.js           Mobile nav toggle, footer year, contact form submission
├── images/
│   ├── favicon.ico
│   ├── solar-project.webp
│   ├── retty-project.webp
│   └── arewa-project.webp
├── README.md
└── LICENSE
```

## Editing in VS Code

Everything is plain text — open the `portfolio` folder in VS Code and edit directly.

- **Text content** (name, bio, project descriptions, contact info) — edit `index.html` directly. It's all readable HTML, no templating.
- **Colors, fonts, spacing** — edit `css/style.css`. The color palette is defined once at the top as CSS variables:
  ```css
  :root{
    --bg:#000000;        /* page background */
    --accent:#397BFB;    /* primary blue — buttons, links, highlights */
    --accent-pale:#B3E0FF;
    --white:#FFFFFF;
    --gray:#B3B3B3;      /* secondary text */
  }
  ```
  Change these values and the whole site updates.
- **Project images** — replace the files in `images/` (keep the same filenames, or update the `src` in `index.html` if you rename them). Recommended size: roughly 1400×900px, `.webp` or `.jpg`.

## The contact form (Netlify Forms)

The contact form is wired for **Netlify Forms** — no backend code needed, but it only works after this site is deployed on Netlify. Netlify scans your HTML at deploy time for the `data-netlify="true"` attribute on the `<form>` and automatically creates a matching endpoint.

Once deployed:
- Submissions show up in your Netlify dashboard under **Site → Forms**.
- You can turn on **email notifications** in that same dashboard (Forms → Settings → Form notifications) so submissions land in your inbox — this isn't automatic and needs to be switched on manually.
- The hidden `bot-field` input is a honeypot for spam — leave it as is.

If you open `index.html` locally (not deployed) and submit the form, you'll see a friendly error message — that's expected, not a bug.

## Deploying to Netlify

**Fastest way (no git):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `portfolio` folder onto the page
3. Netlify gives you a live URL immediately, and detects the contact form automatically

**With git (recommended if you'll keep editing):**
1. Push this folder to a GitHub repo
2. In Netlify: **Add new site → Import an existing project** → connect the repo
3. Leave the build command empty and set the publish directory to `/` (the root) — there's no build step
4. Deploy

## Known placeholders / things to double check

- The "Challenge" bullets under each project are my best guess at real problems you'd have hit — confirm or rewrite them before an interview, since a recruiter may ask you to elaborate.
- **The "Download CV" button points to `resume.pdf`, which doesn't exist yet.** Drop your actual résumé PDF into the `portfolio` folder (same level as `index.html`) and name it exactly `resume.pdf` — the button will work as soon as that file is there and the site is redeployed. If you'd rather name it something else, update the `href="resume.pdf"` in the hero section of `index.html` to match.
- Phone numbers are linked as `tel:09128453751` (local format). If you want international dialing to work from any country, switch to `tel:+2349128453751` format.

## License

MIT — see `LICENSE`. You're free to reuse, modify, and deploy this however you like.
>>>>>>> 753cf7c (Initial commit)
