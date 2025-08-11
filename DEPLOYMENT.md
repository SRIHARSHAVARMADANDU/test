# Deployment Guide

This guide covers various deployment options for the Sriharsha Varma Dandu Portfolio website.

## 🚀 Quick Deploy Options

### Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/sriharsha-portfolio)

1. **Connect your repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** automatically on every push to main branch

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/sriharsha-portfolio)

1. **Import your repository** to Vercel
2. **Configure build settings**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy** with automatic deployments enabled

### GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Create deployment workflow** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🔧 Build Configuration

### Environment Variables

Create a `.env` file for local development:

```env
VITE_SITE_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=dandusriharshavarma@gmail.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/sriharsha-varma-dandu-4a4787135/
```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 Custom Domain Setup

### Netlify Custom Domain

1. **Add domain** in Netlify dashboard
2. **Configure DNS** records:
   - A record: `@` → `75.2.60.5`
   - CNAME: `www` → `your-site.netlify.app`
3. **Enable HTTPS** (automatic with Netlify)

### Vercel Custom Domain

1. **Add domain** in Vercel dashboard
2. **Configure DNS** records as provided by Vercel
3. **SSL certificate** is automatically provisioned

### GitHub Pages Custom Domain

1. **Add CNAME file** to repository root:
```
yourdomain.com
```

2. **Configure DNS** with your domain provider:
   - A records pointing to GitHub Pages IPs
   - CNAME for www subdomain

## 📊 Performance Optimization

### Build Optimizations

The project includes several performance optimizations:

- **Code splitting** with dynamic imports
- **Asset optimization** with Vite
- **Image optimization** recommendations
- **CSS purging** with Tailwind CSS
- **Bundle analysis** available

### Monitoring

Consider adding:

- **Google Analytics** for traffic monitoring
- **Performance monitoring** tools
- **Error tracking** services
- **SEO monitoring** tools

## 🔒 Security Considerations

### Content Security Policy

Add CSP headers for enhanced security:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:;
```

### HTTPS Enforcement

Ensure HTTPS is enforced:
- Redirect HTTP to HTTPS
- Use HSTS headers
- Secure cookie settings

## 🚨 Troubleshooting

### Common Issues

**Build Failures**
- Check Node.js version (v18+ required)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

**Deployment Issues**
- Verify build command and output directory
- Check environment variables
- Review deployment logs

**Performance Issues**
- Optimize images
- Enable compression
- Use CDN for assets
- Implement caching strategies

### Support

For deployment issues:
1. Check the deployment platform's documentation
2. Review build logs for errors
3. Test locally with `npm run build && npm run preview`
4. Contact support if needed

## 📈 Analytics Setup

### Google Analytics 4

1. **Create GA4 property**
2. **Add tracking code** to index.html
3. **Configure goals** and conversions
4. **Set up custom events** for portfolio interactions

### Alternative Analytics

- **Plausible Analytics** (privacy-focused)
- **Fathom Analytics** (simple and private)
- **Umami** (open-source)

## 🔄 Continuous Deployment

### Automated Workflows

Set up automated deployments:
- **Main branch** → Production
- **Develop branch** → Staging
- **Pull requests** → Preview deployments

### Quality Gates

Implement quality checks:
- **Linting** and formatting
- **Type checking** with TypeScript
- **Build verification**
- **Performance budgets**

---

**Need help with deployment?** Contact me at dandusriharshavarma@gmail.com or open an issue in the repository.