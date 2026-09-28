const fs = require('fs');
const path = require('path');

const divisionsDir = 'd:/CNI2/divisions';
const files = fs.readdirSync(divisionsDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(divisionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // STEP 1: Remove the broken .scrolled- fragment and orphaned brace
  // This is the critical fix - the broken CSS was causing the browser to skip all CSS after it
  content = content.replace(/\.scrolled-\s*\n\s*\n\s*\n\s*\n\s*\}/g, '');
  
  // Also clean up any other malformed scrolled-nav leftovers
  content = content.replace(/\.scrolled-\s*\{[^}]*\}/g, '');
  content = content.replace(/\.scrolled-\s*\n/g, '');
  
  // STEP 2: Remove the old MOBILE MENU FIXES block - we'll replace it with a clean one
  content = content.replace(/\/\* === MOBILE MENU FIXES === \*\/[\s\S]*?#cni-mob-div-icon\s*\{[^}]*\}/g, '');

  // STEP 3: Clean up any blank lines left in the style block
  content = content.replace(/(\.gh:hover\{color:white;\})\s*\n(\s*\n)+\s*\n/g, '$1\n');

  // STEP 4: Add clean CSS fixes right before </style>
  const cleanCSS = `
    /* === MOBILE MENU FIXES === */
    #cni-mobile-menu {
      display: none;
    }
    #cni-close-menu {
      background: none !important;
      border: none !important;
      color: #ffffff !important;
      padding: 8px !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      z-index: 100001 !important;
      position: relative !important;
    }
    #cni-close-menu svg {
      stroke: #ffffff !important;
      display: block !important;
      width: 32px !important;
      height: 32px !important;
    }
    #cni-mob-div-toggle {
      color: #ffffff !important;
    }
    #cni-mob-div-icon {
      stroke: #ffffff !important;
      flex-shrink: 0 !important;
      display: block !important;
      width: 20px !important;
      height: 20px !important;
    }
  `;

  content = content.replace('</style>', cleanCSS + '</style>');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
});

// Verify the fix by checking one file for the broken pattern
const verifyContent = fs.readFileSync('d:/CNI2/divisions/automotive.html', 'utf8');
const hasBroken = verifyContent.includes('.scrolled-\n');
const hasFixCSS = verifyContent.includes('/* === MOBILE MENU FIXES === */');
console.log('\n--- Verification ---');
console.log('Broken .scrolled- removed:', !hasBroken);
console.log('Fix CSS present:', hasFixCSS);

// Also print the style block to verify it's clean
const styleMatch = verifyContent.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  const lines = styleMatch[1].split('\n');
  // Print last 40 lines of style to verify
  console.log('\n--- Last 40 lines of <style> ---');
  lines.slice(-40).forEach((line, i) => {
    console.log(`${lines.length - 40 + i}: ${line}`);
  });
}
