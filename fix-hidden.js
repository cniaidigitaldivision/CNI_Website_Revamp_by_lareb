const fs = require('fs');
['d:/CNI2/contact.html', 'd:/CNI2/index.html'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/<a href="\/request-proposal\.html"\s*class="bg-\[#d8ae57\]/g, '<a href="/request-proposal.html" class="hidden lg:flex bg-[#d8ae57]');
  fs.writeFileSync(f, c);
});
