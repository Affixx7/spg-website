# Society of Petroleum Geophysicists (SPG) Website

A modern, professional, and fully static website for the Society of Petroleum Geophysicists built with Next.js 14.

## 🎯 Project Overview

This website is a **fully static site** with **NO database integration**. All content is managed through JSON files and generated at build time using Static Site Generation (SSG).

### Key Features
- ✅ **Fully Static** - Pre-rendered HTML at build time
- ✅ **JSON-based Content** - Easy content management via JSON files
- ✅ **No Database** - Zero runtime dependencies
- ✅ **Professional Design** - Clean, modern UI with Material-UI
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Fast Performance** - Optimized static assets
- ✅ **Easy Deployment** - Deploy to Vercel or any static host

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build Static Site
```bash
npm run build
```
Generates static files in `/out` directory

### Preview Production Build
```bash
npm run start
```

## 📁 Project Structure

```
spg-website/
├── app/              # Next.js App Router pages
├── data/             # JSON data files (Content source)
├── public/           # Static assets (images, PDFs)
├── lib/              # Utility functions
└── styles/           # Global styles
```

## 📝 Content Management

All website content is stored in `/data/*.json` files:

- `home.json` - Home page content
- `members.json` - Members directory
- `memberBenefits.json` - Membership benefits
- `board.json` - Board members & advisors
- `societies.json` - Partner societies
- `achievements.json` - Achievements & publications
- `mission.json` - Mission & objectives
- `newsletters.json` - Newsletter PDFs

### To Update Content:
1. Edit the appropriate JSON file in `/data/`
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy (Vercel auto-deploys on push)

📖 **[Read Full Data Management Guide →](./DATA_MANAGEMENT.md)**

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: Material-UI (MUI)
- **Styling**: CSS Modules + Tailwind CSS
- **PDF Viewer**: @react-pdf-viewer
- **Deployment**: Vercel
- **Data Source**: Static JSON files

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel automatically detects Next.js config and deploys

The site is configured for static export in `next.config.mjs`:
```javascript
{
  output: 'export',
  images: { unoptimized: true }
}
```

### Other Static Hosts
After running `npm run build`, deploy the `/out` directory to:
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## 📄 Pages & Routes

- `/` - Home
- `/about/members` - Members directory
- `/about/board` - Board & advisors
- `/about/mission` - Mission & objectives
- `/about/achievement` - Achievements
- `/about/newsletters` - Newsletters
- `/societies` - Partner societies

## 🔧 Configuration

### Next.js Config (`next.config.mjs`)
```javascript
{
  output: 'export',          // Static export
  images: { unoptimized: true },
  trailingSlash: true
}
```

### Environment
No environment variables needed - fully static!

## 🎨 Customization

### Update Colors/Theme
Edit `theme.jsx` for Material-UI theme customization

### Add New Pages
1. Create new page in `app/` directory
2. Create corresponding JSON in `data/`
3. Fetch data using Server Components

### Add Images
1. Place image in `/public/` directory
2. Reference as `/image-name.jpg` in JSON

## 📚 Documentation

- [Data Management Guide](./DATA_MANAGEMENT.md) - Detailed content management instructions
- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test locally
4. Submit a pull request

## 📞 Support

For questions or issues, please open an issue on GitHub.

## 📜 License

[Add your license here]

---

**Built with ❤️ using Next.js 14**
