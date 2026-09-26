const fs = require('fs');

function replaceTailwindScript(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace('src="https://cdn.tailwindcss.com"', 'src="/tailwind-cdn.js"');
    fs.writeFileSync(filePath, content);
}

replaceTailwindScript('d:/CNI2/index.html');
replaceTailwindScript('d:/CNI2/about.html');
replaceTailwindScript('d:/CNI2/contact.html');
replaceTailwindScript('d:/CNI2/investors.html');
replaceTailwindScript('d:/CNI2/why-ksa.html');

const dir = 'd:/CNI2/divisions';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
files.forEach(file => {
    replaceTailwindScript(dir + '/' + file);
});
console.log('Updated tailwind script references globally');
