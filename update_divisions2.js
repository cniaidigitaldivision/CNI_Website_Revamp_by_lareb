const fs = require('fs');
const path = require('path');

const data = require('./navbar-components.json');
const header = data.header;
const mobile = data.mobile;

const divisionsDir = 'd:/CNI2/divisions';
const files = fs.readdirSync(divisionsDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(divisionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Insert header
  // Let's replace anything between <!-- ... NAVBAR ... --> and <!-- ... HERO ... -->
  const navHeroRegex = /(<!--[^>]*NAVBAR[^>]*-->)[\s\S]*?(<!--[^>]*HERO[^>]*-->)/i;
  
  if (content.match(navHeroRegex)) {
    content = content.replace(navHeroRegex, `$1\n  ${header}\n\n  $2`);
  } else {
    // Fallback: insert after <body ...>
    const bodyRegex = /(<body[^>]*>)/i;
    content = content.replace(bodyRegex, `$1\n  ${header}\n`);
  }

  // Update mobile menu if not present or duplicate
  // We already injected mobile menu in the previous run. Let's make sure it's clean.
  // Just rewrite it entirely if it exists.
  const mobileMenuRegex = /<div id="cni-mobile-menu"[\s\S]*?<\/script>/gi;
  if (content.match(mobileMenuRegex)) {
    // Only keep the first match and replace it, remove others if they got duplicated
    content = content.replace(mobileMenuRegex, '');
    // Now insert it cleanly before </body>
    content = content.replace(/<\/body>/i, `\n${mobile}\n</body>`);
  } else {
    content = content.replace(/<\/body>/i, `\n${mobile}\n</body>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
