# Deployment Guide - Hayti Kafley Portfolio

Quick guide to deploy your portfolio to various hosting platforms.

## Building for Production

Before deploying, create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with all compiled files ready to deploy.

## Vercel (Recommended)

Vercel is the creator of Next.js but works great with Vite projects. Fastest & easiest deployment.

### Steps:

1. Push your project to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your repository
4. Vercel auto-detects Vite and sets everything up
5. Click "Deploy" - done!

**Benefits**: Free, auto HTTPS, CDN, fast updates

---

## Netlify

### Steps:

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

**Benefits**: Free, auto HTTPS, serverless functions available

---

## GitHub Pages

For free static hosting from GitHub.

### Steps:

1. Change `vite.config.ts` base path if needed:

   ```ts
   export default defineConfig({
     base: "/repository-name/", // Only if using a project repo, not user repo
     // ...
   });
   ```

2. Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: "20"
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. Go to repository Settings → Pages
4. Set Source to "GitHub Actions"
5. Commit and push - automatic deployment!

**Note**: Portfolio will be at `https://username.github.io/repository-name`

---

## Traditional Hosting (cPanel, etc.)

### Steps:

1. Build locally: `npm run build`
2. Copy `dist/` folder contents to your hosting
3. Configure your web server to serve `index.html` for all routes (SPA configuration)

### Apache (.htaccess)

Create `.htaccess` in public root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## AWS S3 + CloudFront

For enterprise-grade hosting.

### Steps:

1. Create S3 bucket with static website hosting enabled
2. Upload `dist/` contents
3. Create CloudFront distribution pointing to S3
4. Route your domain via Route53
5. Enable CloudFront SSL certificate

---

## Custom Domain Setup

### After deploying to Vercel/Netlify:

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add CNAME or A record pointing to deployment service
4. Update deployment service domain settings
5. Wait for DNS propagation (up to 24h, usually instant)

---

## Environment Variables

If you need environment variables (for contact form API, etc.):

1. Create `.env.local` (never commit this):

   ```
   VITE_API_URL=https://your-api.com
   ```

2. Access in code:

   ```tsx
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. For deployment services (Vercel, Netlify):
   - Go to project settings
   - Add environment variables
   - Redeploy

---

## Continuous Integration/Deployment

### GitHub Actions (included above)

Automatically deploys when you push to main branch.

To add linting:

```yaml
- run: npm run lint
```

To add type checking:

```yaml
- run: npm run type-check
```

---

## Performance Optimization

Before deployment:

1. **Image Optimization**: Replace placeholder image URLs with optimized images
2. **Bundle Analysis**: `npm run build -- --analyze`
3. **Lighthouse Testing**: Use Chrome DevTools Lighthouse tab
4. **Remove unused code**: Check for dead code

---

## Monitoring & Analytics

Add to your tracking:

### Google Analytics

Add to `index.html` or use react-gtag package.

### Sentry (Error Tracking)

```bash
npm install @sentry/react
```

Then initialize in `main.tsx`:

```tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
});
```

---

## Troubleshooting Deployments

### 404 Errors for Routes

**Problem**: Navigating to routes shows 404
**Solution**: Ensure your hosting is configured to serve `index.html` for all routes (SPA)

### Missing Styles

**Problem**: Built site has no styles
**Solution**: Check `vite.config.ts` base path is correct

### Slow Deployment

**Problem**: Takes too long to build
**Solution**:

- Remove unused dependencies
- Check for large assets
- Use CDN for images

### Build Fails

**Problem**: `npm run build` fails
**Solution**:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Monitoring Live Site

After deployment:

1. **Check Performance**
   - Load time: Should be < 3 seconds
   - Lighthouse score: Aim for 90+
   - Use WebPageTest.org

2. **Monitor Uptime**
   - Use UptimeRobot (free tier)
   - Get notified of outages

3. **Track Analytics**
   - Monitor visitor traffic
   - Check bounce rate
   - Track contact form submissions

---

## Updating Production

Once deployed:

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Push to Git
5. Deployment service auto-deploys

That's it! Your changes go live within seconds.

---

## Support

For deployment issues:

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com

Good luck with your deployment! 🚀
