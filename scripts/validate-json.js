#!/usr/bin/env node

/**
 * JSON Validation Script
 * Validates all JSON files in the /data directory
 * Run with: npm run validate-json
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(process.cwd(), 'data');
const REQUIRED_FILES = [
  'home.json',
  'members.json',
  'memberBenefits.json',
  'board.json',
  'societies.json',
  'achievements.json',
  'mission.json',
  'newsletters.json'
];

let hasErrors = false;

console.log('🔍 Validating JSON files...\n');

// Check if data directory exists
if (!fs.existsSync(DATA_DIR)) {
  console.error('❌ Error: /data directory not found');
  process.exit(1);
}

// Validate each required file
REQUIRED_FILES.forEach(filename => {
  const filePath = path.join(DATA_DIR, filename);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing: ${filename}`);
    hasErrors = true;
    return;
  }
  
  // Try to parse JSON
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Basic validation
    if (!data || typeof data !== 'object') {
      console.error(`❌ Invalid: ${filename} - Must contain an object`);
      hasErrors = true;
      return;
    }
    
    // File-specific validation
    switch (filename) {
      case 'home.json':
        if (!data.heroImages || !Array.isArray(data.heroImages)) {
          console.error(`❌ Invalid: ${filename} - Missing or invalid 'heroImages' array`);
          hasErrors = true;
        }
        break;
      
      case 'members.json':
        if (!data.members || !Array.isArray(data.members)) {
          console.error(`❌ Invalid: ${filename} - Missing or invalid 'members' array`);
          hasErrors = true;
        }
        break;
      
      case 'memberBenefits.json':
        if (!data.benefits || !Array.isArray(data.benefits)) {
          console.error(`❌ Invalid: ${filename} - Missing or invalid 'benefits' array`);
          hasErrors = true;
        }
        break;
      
      case 'board.json':
        if (!data.currentOfficeBearers || !data.advisors) {
          console.error(`❌ Invalid: ${filename} - Missing 'currentOfficeBearers' or 'advisors'`);
          hasErrors = true;
        }
        break;
      
      case 'societies.json':
        if (!data.societies || !Array.isArray(data.societies)) {
          console.error(`❌ Invalid: ${filename} - Missing or invalid 'societies' array`);
          hasErrors = true;
        }
        break;
      
      case 'achievements.json':
        if (!data.publications || !data.conferenceSupport || !data.images) {
          console.error(`❌ Invalid: ${filename} - Missing required fields`);
          hasErrors = true;
        }
        break;
      
      case 'mission.json':
        if (!data.mission || !data.objectives) {
          console.error(`❌ Invalid: ${filename} - Missing 'mission' or 'objectives'`);
          hasErrors = true;
        }
        break;
      
      case 'newsletters.json':
        if (!data.newsletters || !Array.isArray(data.newsletters)) {
          console.error(`❌ Invalid: ${filename} - Missing or invalid 'newsletters' array`);
          hasErrors = true;
        }
        break;
    }
    
    if (!hasErrors) {
      console.log(`✅ Valid: ${filename}`);
    }
    
  } catch (error) {
    console.error(`❌ Parse Error in ${filename}:`);
    console.error(`   ${error.message}`);
    hasErrors = true;
  }
});

console.log('\n' + '='.repeat(50));

if (hasErrors) {
  console.error('\n❌ Validation failed! Please fix the errors above.\n');
  console.log('💡 Tips:');
  console.log('   - Use https://jsonlint.com to validate JSON syntax');
  console.log('   - Check for missing commas or brackets');
  console.log('   - Ensure file paths start with /');
  console.log('   - Review JSON_SCHEMA.md for correct structure\n');
  process.exit(1);
} else {
  console.log('\n✅ All JSON files are valid!\n');
  console.log('You can now run:');
  console.log('   npm run dev   - Start development server');
  console.log('   npm run build - Build for production\n');
  process.exit(0);
}
