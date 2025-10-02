# SPG Website - Static Site Generation Guide

## Overview
This website is built with **Next.js 14** using the App Router and is fully static with **NO database integration**. All content is managed through JSON files and generated at build time using Static Site Generation (SSG).

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **UI Library**: Material-UI (MUI)
- **Deployment**: Vercel (or any static hosting)
- **Data Source**: Static JSON files only

## Project Structure

```
spg-website/
├── app/                        # Next.js App Router pages
│   ├── page.jsx               # Home page (SSG)
│   ├── layout.jsx             # Root layout
│   ├── components/            # Shared components
│   ├── about/                 # About section pages
│   │   ├── members/           # Members page (SSG)
│   │   ├── board/             # Board page (SSG)
│   │   ├── mission/           # Mission page (SSG)
│   │   ├── achievement/       # Achievements page (SSG)
│   │   └── newsletters/       # Newsletters page (SSG)
│   └── societies/             # Societies page (SSG)
├── data/                      # JSON data files (SOURCE OF TRUTH)
│   ├── home.json              # Home page content
│   ├── members.json           # Members list
│   ├── memberBenefits.json    # Member benefits
│   ├── board.json             # Board members & advisors
│   ├── societies.json         # Partner societies
│   ├── achievements.json      # Achievements & publications
│   ├── mission.json           # Mission & objectives
│   └── newsletters.json       # Newsletter PDFs
├── public/                    # Static assets (images, PDFs)
└── next.config.mjs            # Next.js configuration (static export)
```

## Data Management

### JSON Files Structure

All content is stored in `/data/*.json` files. Update these files to change website content.

#### 1. `home.json` - Home Page Content
```json
{
  "heroImages": [
    {
      "src": "/landing1.jpg",
      "alt": "Description",
      "title": "Title"
    }
  ],
  "welcomeMessage": "Welcome message",
  "description": "Site description"
}
```

#### 2. `members.json` - Members Directory
```json
{
  "members": [
    {
      "name": "Member Name",
      "affiliation": "Organization",
      "expertise": "Field of expertise",
      "contact": "email@example.com"
    }
  ]
}
```

#### 3. `memberBenefits.json` - Membership Benefits
```json
{
  "benefits": [
    "Benefit description 1",
    "Benefit description 2"
  ]
}
```

#### 4. `board.json` - Board & Advisors
```json
{
  "currentOfficeBearers": {
    "term": "2019 - 2021",
    "officers": [
      {
        "title": "President",
        "name": "Name",
        "affiliation": "Organization"
      }
    ]
  },
  "advisors": [
    {
      "name": "Advisor Name",
      "bio": "Biography"
    }
  ]
}
```

#### 5. `societies.json` - Partner Societies
```json
{
  "societies": [
    {
      "name": "Society Name",
      "url": "https://example.com",
      "image": "/society1.jpeg"
    }
  ]
}
```

#### 6. `achievements.json` - Achievements
```json
{
  "publications": ["Publication 1"],
  "conferenceSupport": ["Support 1"],
  "careerGuidance": ["Guidance 1"],
  "educationalContributions": ["Contribution 1"],
  "images": [
    {
      "src": "/achievement1.jpg",
      "title": "Description"
    }
  ]
}
```

#### 7. `mission.json` - Mission & Objectives
```json
{
  "mission": "Mission statement",
  "objectives": [
    {
      "primary": "Objective Title",
      "secondary": [
        "Detail 1",
        "Detail 2"
      ]
    }
  ]
}
```

#### 8. `newsletters.json` - Newsletters
```json
{
  "newsletters": [
    {
      "year": "2017",
      "file": "/spgna_newsletter_2017.pdf"
    }
  ]
}
```

## How It Works - Static Site Generation

### Server Components (Default)
Most pages are **Server Components** that fetch data at build time:

```jsx
import fs from 'fs';
import path from 'path';

// This runs at BUILD TIME, not runtime
async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'example.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export default async function Page() {
  const data = await getData();
  return <div>{/* Use data */}</div>;
}
```

### Client Components (When Needed)
Components with interactivity (useState, onClick, etc.) use `'use client'`:

```jsx
'use client';
import { useState } from 'react';

export default function InteractiveComponent({ data }) {
  const [state, setState] = useState(null);
  // Interactive logic
}
```

## Development

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
This generates a fully static site in the `/out` directory.

### Preview Production Build
```bash
npm run start
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Vercel automatically detects Next.js and deploys

### Manual Static Export
```bash
npm run build
```
Upload the `/out` directory to any static host (Netlify, GitHub Pages, etc.)

## Updating Content

### To Update Content:
1. Edit the appropriate JSON file in `/data/`
2. Commit changes to Git
3. Push to GitHub
4. Vercel automatically rebuilds and redeploys

### To Add Images:
1. Add image files to `/public/` directory
2. Reference in JSON as `/image-name.jpg`

### To Add PDF Files:
1. Add PDF to `/public/` directory
2. Reference in JSON as `/file-name.pdf`

## Important Notes

### ✅ What's Supported
- Static content from JSON files
- Image optimization (unoptimized for static export)
- PDF viewing
- Full client-side interactivity
- Responsive design
- SEO optimization

### ❌ What's NOT Supported
- Database connections
- Server-side API routes (API routes don't work with `output: 'export'`)
- Dynamic routing with external data
- Server-side authentication
- Real-time data updates

### 🔧 Configuration
The `next.config.mjs` file is configured for static export:
```javascript
{
  output: 'export',          // Generate static HTML
  images: {
    unoptimized: true,       // Required for static export
  },
  trailingSlash: true,       // Optional: cleaner URLs
}
```

## Best Practices

1. **Data Updates**: Always update JSON files for content changes
2. **Images**: Optimize images before adding to `/public/`
3. **PDFs**: Keep PDF file sizes reasonable
4. **JSON Format**: Validate JSON before committing (use a JSON validator)
5. **Git**: Commit JSON changes with descriptive messages
6. **Testing**: Test locally with `npm run build` before deploying

## Troubleshooting

### Build Errors
- Check JSON files for syntax errors
- Ensure all referenced images exist in `/public/`
- Verify file paths use forward slashes

### Content Not Updating
- Clear browser cache
- Rebuild the site: `npm run build`
- Check that JSON changes were committed

### PDF Not Loading
- Verify PDF file exists in `/public/`
- Check file path in JSON (must start with `/`)
- Ensure PDF file size is reasonable

## Architecture Decisions

### Why Static JSON Files?
- **No database costs**
- **Lightning fast** - everything pre-built
- **Simple updates** - just edit JSON files
- **Version control** - track all changes in Git
- **Easy backup** - entire site in Git
- **Zero runtime dependencies**

### Why Next.js App Router?
- Server Components for better performance
- Built-in static generation
- Excellent developer experience
- Easy deployment on Vercel

### Why Material-UI?
- Professional, clean design
- Responsive out of the box
- Rich component library
- Good accessibility

## Support & Contribution

To contribute:
1. Fork the repository
2. Create a feature branch
3. Update JSON data or components
4. Test locally
5. Submit a pull request

## License
[Add your license information here]
