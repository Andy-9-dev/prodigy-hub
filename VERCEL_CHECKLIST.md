# Vercel Deployment Checklist

## Pre-Deployment ✅

- [x] Project structure is clean and organized
- [x] `vercel.json` is configured with correct build settings
- [x] `package.json` has proper scripts (including `CI=false` in build)
- [x] `.nvmrc` specifies Node version 18
- [x] `.vercelignore` excludes unnecessary files
- [x] `.env.example` documents required environment variables
- [x] `.gitignore` is properly configured
- [x] Dependencies use `--legacy-peer-deps` for peer conflict resolution
- [x] All routes configured for client-side routing (rewrite rule in place)

## Git Setup

- [ ] Repository initialized: `git init`
- [ ] Remote added: `git remote add origin <your-repo-url>`
- [ ] All files committed: `git add . && git commit -m "Initial commit"`
- [ ] Pushed to main branch: `git push -u origin main`

## Vercel Setup

- [ ] Vercel account created at [vercel.com](https://vercel.com)
- [ ] Project linked to Vercel
- [ ] Environment variables added (if needed)
- [ ] Production domain configured (if custom domain desired)

## Testing Before Deploy

```bash
# Install dependencies
npm install --legacy-peer-deps

# Build locally
npm run build

# Test production build
npx serve -s build

# Verify all pages load:
# - http://localhost:3000/
# - http://localhost:3000/about
# - http://localhost:3000/courses
# - http://localhost:3000/benefits
# - http://localhost:3000/expertise
# - http://localhost:3000/team
# - http://localhost:3000/pricing
# - http://localhost:3000/journal
# - http://localhost:3000/contact
```

## Final Verification

- [ ] No console errors in production build
- [ ] All images load correctly
- [ ] Navigation works on all pages
- [ ] Forms are functional
- [ ] Responsive design works on mobile
- [ ] Page refresh works without 404 errors (routing verified)

## Deploy!

**Option A: CLI**
```bash
npm i -g vercel
vercel
```

**Option B: Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import repository
4. Click "Deploy"

## Post-Deployment

- [ ] Verify site is live at `https://your-project.vercel.app`
- [ ] Test all pages and functionality
- [ ] Check performance in Vercel dashboard
- [ ] Set up custom domain if needed
- [ ] Enable automatic deployments for main branch

## Troubleshooting

**Build fails:**
- Check Vercel build logs
- Verify `--legacy-peer-deps` flag is being used
- Ensure Node version 18 is set

**Routes show 404:**
- Verify rewrite rule exists in `vercel.json`
- Check that React Router is properly configured

**Styles not loading:**
- Clear browser cache
- Verify assets are in `public/` folder
- Check CSS imports in components

**Environment variables not working:**
- Must start with `REACT_APP_` prefix
- Add in Vercel dashboard, not in code
- Redeploy after adding variables

## Useful Resources

- [Vercel Docs](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/deployment/vercel/)
- [React Router Deployment](https://v5.reactrouter.com/en/main)
