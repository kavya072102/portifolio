# Kavya Sri Makkapati — Data Analytics Portfolio

A static portfolio website. No build step — pure HTML, CSS, and JS.

## Files
```
index.html        ← the page
styles.css        ← all styling
script.js         ← mobile menu + nav shadow
assets/
  Kavya-Sri-Makkapati-Resume.pdf   ← linked by the "Download PDF" button
  profile.jpg       ← hero avatar  (REPLACE with your own photo, keep the name)
  about.jpg         ← About section portrait (REPLACE with your own photo)
```

## Add your photos
Drop your photo into the `assets/` folder named **`profile`** (hero avatar) and
**`about`** (About-section portrait). The extension can be **.jpg, .jpeg, .png, or
.webp** — the site automatically detects whichever you use, so no code change is
needed. (profile = square works best; about = portrait / 3:4.)
If a photo isn't found, a styled "KM" monogram shows in its place.

---

## Deploy to GitHub Pages

### Option A — GitHub website (no command line)
1. Go to https://github.com and click **New repository**.
   - Name it e.g. `portfolio` (or `kavya.github.io` for a root URL).
   - Set it **Public**, then **Create repository**.
2. On the new repo page click **uploading an existing file**.
3. Drag **all the files in this folder** (index.html, styles.css, script.js, and the
   `assets` folder) into the upload area. Click **Commit changes**.
4. Go to **Settings → Pages**.
5. Under **Build and deployment → Source** choose **Deploy from a branch**.
6. Branch: **main**, folder: **/(root)** → **Save**.
7. Wait ~1 minute. Your site is live at:
   `https://<your-username>.github.io/portfolio/`

### Option B — Command line (git)
```bash
# inside this folder
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```
Then enable Pages: **Settings → Pages → Deploy from a branch → main → /(root) → Save**.

## Update later
Edit text directly in `index.html`, commit, and push again — Pages redeploys automatically.
