# Deployment Guide for JKKN Nursing College Website

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)

## Deployment Steps

### Method 1: Using Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - JKKN Nursing College website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Method 2: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Post-Deployment Steps

1. **Add a custom domain:**
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

2. **Configure environment variables (if needed):**
   - Go to your project in Vercel
   - Click "Settings" → "Environment Variables"
   - Add any required variables from `.env.example`

3. **Update site URL:**
   - Update `NEXT_PUBLIC_SITE_URL` in your environment variables
   - Update social media links in the data files

## Updating the Website

After deployment, any push to your main branch will trigger an automatic redeployment:

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically rebuild and deploy your changes in a few minutes.

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test the build locally: `npm run build`

### Images Not Loading
- Ensure images are in the `public/` directory
- Check image paths in data files start with `/`

### Styling Issues
- Clear browser cache
- Check if Tailwind CSS is properly configured

## Performance Optimization

1. **Optimize Images:**
   - Use Next.js Image component
   - Compress images before uploading
   - Use WebP format when possible

2. **Enable Caching:**
   - Vercel automatically handles caching
   - Static assets are cached at the edge

3. **Monitor Performance:**
   - Use Vercel Analytics (free for hobby plan)
   - Check Core Web Vitals in Vercel dashboard

## Support

For issues or questions about deployment:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
