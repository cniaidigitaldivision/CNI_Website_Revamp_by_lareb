const fs = require('fs');
const content = fs.readFileSync('d:/CNI2/contact.html', 'utf8');

const headerStart = content.indexOf('<header id="main-nav"');
const headerEnd = content.indexOf('</header>', headerStart) + 9;
const header = content.slice(headerStart, headerEnd);

const data = require('./navbar-components.json');
data.header = header;
fs.writeFileSync('d:/CNI2/navbar-components.json', JSON.stringify(data, null, 2));
