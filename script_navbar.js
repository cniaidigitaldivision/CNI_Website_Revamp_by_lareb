const fs = require('fs');
const path = require('path');
const dir = 'd:/CNI2/divisions';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the header inline style. Using a generic regex for safety.
  content = content.replace(
    /<header style=\"[^\"]*\">/,
    '<header style=\"position:sticky;top:0;width:100%;z-index:999;padding:18px 48px;display:flex;align-items:center;justify-content:space-between;background:#0B2233;border-bottom:1px solid rgba(227,188,112,.15);\">'
  );

  fs.writeFileSync(filePath, content);
});
console.log('Processed all division HTML files.');
