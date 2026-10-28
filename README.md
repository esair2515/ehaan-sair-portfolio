# Ehaan Sair — personal portfolio

## Run locally

```bash
npm install
npm run dev
```

## Edit your content

Update `src/data.ts` to change profile links, projects, experience, or research. To add screenshots, put image files in `public/` and add a `screenshots` array with `src` and `alt` fields to that project. Add a `demoUrl` to a project to show its live demo link. Replace `public/resume.pdf` with your final resume, keeping the same filename so both download links continue to work. Set `research.publicationUrl` when a publication link is available.

## Deploy on GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. Every push to `main` builds the site and publishes `dist` to GitHub Pages.

1. On GitHub, create a **public** repository named `ehaan-sair-portfolio` under your account, `esair2515`. GitHub Free requires a public repository for Pages; the published site itself is public either way.
2. In this folder, open Terminal and run:

   ```bash
   git init
   git add .
   git commit -m "Create personal portfolio"
   git branch -M main
   git remote add origin https://github.com/esair2515/ehaan-sair-portfolio.git
   git push -u origin main
   ```

3. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish. Your site will be at `https://esair2515.github.io/ehaan-sair-portfolio/`.

The workflow redeploys the site on every later push to `main`. The project uses relative asset paths so it works from the repository subpath. The published website is public.
