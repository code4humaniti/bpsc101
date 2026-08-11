# Publishing and Hosting Guide

Since BPSC 101 is designed as a completely client-side static web application with no backend requirements, you can host and publish it for free using various static hosting providers. Below are the easiest and most popular options:

## Option 1: GitHub Pages (Recommended)
Since your project is already hosted on GitHub, GitHub Pages is the most integrated way to host it.

1. Go to your repository on **GitHub**.
2. Click on **Settings** (tab at the top).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - Set **Source** to `Deploy from a branch`.
   - Under **Branch**, select `master` (or `main`) and choose `/ (root)` folder.
5. Click **Save**.
6. Wait 1–2 minutes, and your site will be live at `https://<your-username>.github.io/bpsc101/`.

---

## Option 2: Vercel
Vercel provides extremely fast deployments and excellent global delivery networks.

### Method A: Via Vercel Web Dashboard
1. Go to [vercel.com](https://vercel.com) and log in using your GitHub account.
2. Click **Add New** -> **Project**.
3. Import your `bpsc101` repository.
4. Leave the Build & Development Settings at default (since it is a static HTML app, no build command is needed).
5. Click **Deploy**.

### Method B: Via CLI
If you want to deploy straight from your local terminal:
```bash
# Install Vercel CLI
npm install -g vercel

# Run deploy command (follow interactive prompts)
vercel
```

---

## Option 3: Netlify
Netlify is another excellent free platform for hosting static websites.

### Method A: Git Integration
1. Go to [netlify.com](https://www.netlify.com/) and sign up with GitHub.
2. Click **Add new site** -> **Import an existing project**.
3. Select GitHub and authorize.
4. Select the `bpsc101` repository.
5. Leave build settings blank and click **Deploy**.

### Method B: Drag and Drop
1. Build or organize your folder locally.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop your project folder (`bpsc101`) directly into the browser box.

---

## Verification Checklist
Once published, verify:
* Language toggles (`EN` and `हिं`) function properly.
* Light and Dark modes switch instantly and persist on reload.
* The calculators on Prelims and Mains pages compute correctly.
