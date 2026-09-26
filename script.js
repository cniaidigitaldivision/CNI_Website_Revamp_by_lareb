const fs = require('fs');
let content = fs.readFileSync('d:/CNI2/index.html', 'utf8');

content = content.replace('href="/divisions/automotive.html"', 'href="/en/divisions/automotive"');
content = content.replace(/\/divisions\/automotive\.html/g, '/divisions/automotive');
content = content.replace(/\/divisions\/business-facilitation\.html/g, '/divisions/business-facilitation');
content = content.replace(/\/divisions\/tour-travel\.html/g, '/divisions/tour-travel');
content = content.replace(/\/divisions\/real-estate\.html/g, '/divisions/real-estate');
content = content.replace(/\/divisions\/home-services\.html/g, '/divisions/home-services');
content = content.replace(/\/divisions\/hospitality\.html/g, '/divisions/hospitality');
content = content.replace(/\/divisions\/logistics\.html/g, '/divisions/logistics');
content = content.replace(/\/divisions\/ai-digital\.html/g, '/divisions/ai-digital');

fs.writeFileSync('d:/CNI2/index.html', content);
console.log('Fixed URLs');
