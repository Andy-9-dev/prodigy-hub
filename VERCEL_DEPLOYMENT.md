# Vercel Deployment Guide

This project is configured and ready for deployment to Vercel.

## Prerequisites

- Vercel account ([vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)
- Project pushed to your repository

## Deployment Steps

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy from project root
vercel
```

Follow the prompts to:
1. Link to your project (or create new)
2. Confirm project settings
3. Deploy

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Select framework: **Create React App**
5. Click "Deploy"

Vercel will automatically detect the configuration from `vercel.json`.

## Configuration Details

- **Build Command:** `npm run build --legacy-peer-deps`
- **Output Directory:** `build`
- **Install Command:** `npm install --legacy-peer-deps`
- **Framework:** Create React App

The `--legacy-peer-deps` flag is used to resolve peer dependency conflicts with `google-maps-react` and React 18.

## Environment Variables (if needed)

1. In Vercel Dashboard, go to Project Settings → Environment Variables
2. Add any required variables (e.g., `REACT_APP_GOOGLE_MAPS_API_KEY`)

See `.env.example` for available environment variables.

## Rewrite Rules

The `vercel.json` includes a rewrite rule that directs all routes to `index.html`, enabling React Router to handle client-side routing.

## After Deployment

- Your site will be live at `https://your-project.vercel.app`
- Production deployments are triggered on pushes to your main branch
- Preview deployments are created for pull requests

## Troubleshooting

**Build fails with peer dependency errors:**
- Vercel uses the `--legacy-peer-deps` flag automatically

**Site shows 404 on refresh:**
- The rewrite rule in `vercel.json` should handle this
- Verify the rewrite rule is present

**Environment variables not loading:**
- Ensure variables are prefixed with `REACT_APP_` (Create React App requirement)
- Add them in Vercel dashboard under Environment Variables

## Local Testing

Before deploying, test the production build locally:

```bash
npm run build
npx serve -s build
```

Open [http://localhost:3000](http://localhost:3000) and verify all pages and routes work correctly.
