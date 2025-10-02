# JSON Schema Reference

Quick reference guide for all JSON data files in the `/data` directory.

## File: `home.json`

**Purpose**: Home page hero images and welcome content

```json
{
  "heroImages": [
    {
      "src": "/landing1.jpg",        // Path to image in /public
      "alt": "SPG Conference",        // Alt text for accessibility
      "title": "Title Text"           // Title displayed on image
    }
  ],
  "welcomeMessage": "Welcome text",
  "description": "Site description"
}
```

---

## File: `members.json`

**Purpose**: Complete members directory

```json
{
  "members": [
    {
      "name": "Full Name",              // Member's full name
      "affiliation": "Organization",    // Company/University
      "expertise": "Field",             // Area of expertise
      "contact": "email@example.com"    // Email address
    }
  ]
}
```

**Note**: Add new members by appending to the array. Members appear in table with search functionality.

---

## File: `memberBenefits.json`

**Purpose**: List of membership benefits

```json
{
  "benefits": [
    "Benefit description 1",
    "Benefit description 2"
  ]
}
```

**Note**: Each string is rendered as a bullet point.

---

## File: `board.json`

**Purpose**: Current office bearers and board advisors

```json
{
  "currentOfficeBearers": {
    "term": "2019 - 2021",              // Current term years
    "officers": [
      {
        "title": "President",           // Position title
        "name": "Full Name",            // Officer name
        "affiliation": "Organization"   // Company/Institution
      }
    ]
  },
  "advisors": [
    {
      "name": "Advisor Name",
      "bio": "Full biography text..."   // Can be multiple paragraphs
    }
  ],
  "previousOfficers": []                // For future use
}
```

---

## File: `societies.json`

**Purpose**: Partner and related societies

```json
{
  "societies": [
    {
      "name": "Full Society Name",
      "url": "https://example.com",     // Society website
      "image": "/society1.jpeg"         // Logo in /public
    }
  ]
}
```

**Note**: Cards are clickable and open URL in new tab.

---

## File: `achievements.json`

**Purpose**: Society achievements, publications, and support

```json
{
  "publications": [
    "Publication description"           // Journal publications
  ],
  "conferenceSupport": [
    "Name (affiliation), Conference-Year"  // Students/faculty supported
  ],
  "careerGuidance": [
    "Service provided"                  // Career services offered
  ],
  "educationalContributions": [
    "Contribution description"          // Educational activities
  ],
  "images": [
    {
      "src": "/achievement1.jpg",       // Image path
      "title": "Image caption"          // Description
    }
  ]
}
```

---

## File: `mission.json`

**Purpose**: Mission statement and organizational objectives

```json
{
  "mission": "Complete mission statement text...",
  "objectives": [
    {
      "primary": "Main Objective Title",    // Category name
      "secondary": [
        "Detailed point 1",                 // Sub-objectives
        "Detailed point 2"
      ]
    }
  ]
}
```

**Note**: Objectives are displayed in expandable/collapsible format.

---

## File: `newsletters.json`

**Purpose**: Historical newsletters (PDFs)

```json
{
  "newsletters": [
    {
      "year": "2017",                   // Display year
      "file": "/spgna_newsletter_2017.pdf"  // PDF path in /public
    }
  ]
}
```

**Note**: 
- Sort by year (descending recommended)
- PDFs must be in `/public` directory
- Viewer displays inline with year buttons

---

## Common Patterns

### Images
- Always place in `/public` directory
- Reference as `/filename.jpg` (with leading slash)
- Supported formats: jpg, jpeg, png, webp, gif, svg

### PDFs
- Place in `/public` directory
- Reference as `/filename.pdf`
- Keep file sizes reasonable (<5MB recommended)

### Text Content
- Use plain text (HTML not rendered in most fields)
- For multi-line text, use `\n` for line breaks
- Escape special characters: `\"` for quotes inside strings

### Arrays
- Order matters - displayed in array order
- Can be empty: `[]`
- Each item should follow the same schema

---

## Validation Tips

### Before Committing:
1. **Validate JSON syntax**: Use [JSONLint](https://jsonlint.com/)
2. **Check file paths**: Ensure images/PDFs exist in `/public`
3. **Test locally**: Run `npm run dev` and check all pages
4. **Check console**: Look for any errors in browser console

### Common Errors:
- Missing comma between array items
- Extra comma after last item
- Unescaped quotes in strings
- Missing closing brackets `]` or `}`
- File paths without leading `/`

---

## Adding New Data Types

To add a new data type:

1. **Create JSON file** in `/data/`
2. **Add helper function** in `/lib/data.js`:
   ```javascript
   export function getNewData() {
     return getStaticData('newdata.json');
   }
   ```
3. **Use in page component**:
   ```jsx
   import { getNewData } from '@/lib/data';
   
   export default async function Page() {
     const data = await getNewData();
     // Use data...
   }
   ```

---

## Best Practices

✅ **DO:**
- Keep JSON files under 1MB
- Use descriptive property names
- Add comments in this doc for future reference
- Test changes locally before deploying
- Use consistent formatting (2 spaces for indentation)
- Validate JSON before committing

❌ **DON'T:**
- Commit invalid JSON
- Use absolute URLs for internal images
- Store sensitive data (everything is public)
- Include HTML tags (unless specifically supported)
- Leave empty strings (use null or omit property)

---

## Quick Checklist

Before deploying changes:
- [ ] JSON syntax is valid
- [ ] All referenced images exist in `/public`
- [ ] All referenced PDFs exist in `/public`
- [ ] Tested locally with `npm run dev`
- [ ] No console errors
- [ ] Changes committed to Git
- [ ] Descriptive commit message

---

**Last Updated**: October 2025
