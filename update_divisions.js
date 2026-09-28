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

  // Replace header
  // Currently, the header in division pages starts with <header style="position:sticky;..."
  // or <header class="...". We can replace from <header to </header>.
  // Some headers might be inside <div class="division-sticky"> but the one we want to replace is the top level one.
  // Wait, in ai-digital.html, it's just <header style="..."> ... </header> right after <body>.
  const headerRegex = /<header[^>]*>[\s\S]*?<\/header>/i;
  content = content.replace(headerRegex, header);

  // Replace or inject mobile menu
  const mobileMenuRegex = /<div id="cni-mobile-menu"[\s\S]*?<\/script>/i;
  if (content.match(mobileMenuRegex)) {
    content = content.replace(mobileMenuRegex, mobile);
  } else {
    // Inject before </body>
    content = content.replace('</body>', `\n${mobile}\n</body>`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
