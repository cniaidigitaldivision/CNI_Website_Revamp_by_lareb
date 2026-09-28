const fs = require('fs');
const path = require('path');

const mobileMenuHTML = `
<!-- MOBILE MENU OVERLAY -->
<div id="cni-mobile-menu" style="display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:#061B2B; z-index:99999; flex-direction:column; overflow-y:auto; overflow-x:hidden;">
  <div style="display:flex; align-items:center; justify-content:space-between; padding:20px; border-bottom:1px solid rgba(227,188,112,0.2);">
    <a href="/index.html">
      <img src="/public/logo.png" alt="CNI Logo" style="height:48px; width:auto; object-fit:contain;" onerror="this.src='/public/logo.png'" />
    </a>
    <button id="cni-close-menu" style="background:none; border:none; color:white; padding:8px; cursor:pointer;">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>
  
  <nav style="display:flex; flex-direction:column; padding:20px; gap:4px; font-family:'Inter',sans-serif; font-size:18px; font-weight:500;">
    <a href="/index.html" class="cni-mob-link" style="color:white; text-decoration:none; padding:16px 8px; border-bottom:1px solid rgba(255,255,255,0.05);">Home</a>
    <a href="/about.html" class="cni-mob-link" style="color:white; text-decoration:none; padding:16px 8px; border-bottom:1px solid rgba(255,255,255,0.05);">About</a>
    
    <div style="display:flex; flex-direction:column; border-bottom:1px solid rgba(255,255,255,0.05);">
      <button id="cni-mob-div-toggle" style="display:flex; align-items:center; justify-content:space-between; width:100%; background:none; border:none; color:white; padding:16px 8px; font-size:18px; font-weight:500; font-family:inherit; cursor:pointer; text-align:left;">
        Divisions
        <svg id="cni-mob-div-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.3s;"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div id="cni-mob-div-menu" style="display:none; flex-direction:column; padding-left:16px; padding-bottom:8px; gap:12px; font-size:15px; font-weight:400;">
        <a href="/divisions/automotive.html" class="cni-mob-link" style="color:#cbd5e1; text-decoration:none; padding:8px 0;">Automotive Division</a>
        <a href="/divisions/business-facilitation.html" class="cni-mob-link" style="color:#cbd5e1; text-decoration:none; padding:8px 0;">Business Facilitation</a>
        <a href="/divisions/tour-travel.html" class="cni-mob-link" style="color:#cbd5e1; text-decoration:none; padding:8px 0;">Tour &amp; Travel</a>
        <a href="/divisions/real-estate.html" class="cni-mob-link" style="color:#cbd5e1; text-decoration:none; padding:8px 0;">Real Estate &amp; Advisory</a>
        <a href="/divisions/home-services.html" class="cni-mob-link" style="color:#cbd5e1; text-decoration:none; padding:8px 0;">Home Services — Mundus</a>
        <a href="/divisions/hospitality.html" class="cni-mob-link" style="color:#cbd5e1; text-decoration:none; padding:8px 0;">Hospitality Management</a>
        <a href="/divisions/logistics.html" class="cni-mob-link" style="color:#cbd5e1; text-decoration:none; padding:8px 0;">Logistics — My Truck</a>
        <a href="/divisions/ai-digital.html" class="cni-mob-link" style="color:#cbd5e1; text-decoration:none; padding:8px 0;">CNI AI &amp; Digital</a>
      </div>
    </div>
    
    <a href="/investors.html" class="cni-mob-link" style="color:white; text-decoration:none; padding:16px 8px; border-bottom:1px solid rgba(255,255,255,0.05);">Investors</a>
    <a href="/why-ksa.html" class="cni-mob-link" style="color:white; text-decoration:none; padding:16px 8px; border-bottom:1px solid rgba(255,255,255,0.05);">Why KSA</a>
    <a href="/contact.html" class="cni-mob-link" style="color:white; text-decoration:none; padding:16px 8px; border-bottom:1px solid rgba(255,255,255,0.05);">Contact</a>
  </nav>
  
  <div style="padding:32px 20px; margin-top:auto; padding-bottom:60px;">
    <a href="/request-proposal" class="cni-mob-link" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#d8ae57; color:#120f09; font-weight:600; font-size:16px; padding:16px 24px; border-radius:50px; text-decoration:none; box-shadow:0 4px 16px rgba(214,171,88,0.25);">
      Request a Proposal &rarr;
    </a>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('cni-mobile-btn');
  const closeBtn = document.getElementById('cni-close-menu');
  const menu = document.getElementById('cni-mobile-menu');
  const divToggle = document.getElementById('cni-mob-div-toggle');
  const divMenu = document.getElementById('cni-mob-div-menu');
  const divIcon = document.getElementById('cni-mob-div-icon');
  
  if(openBtn && closeBtn && menu) {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      menu.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', function() {
      menu.style.display = 'none';
      document.body.style.overflow = '';
    });
    
    document.querySelectorAll('.cni-mob-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }
  
  if(divToggle && divMenu && divIcon) {
    divToggle.addEventListener('click', function() {
      if(divMenu.style.display === 'none') {
        divMenu.style.display = 'flex';
        divIcon.style.transform = 'rotate(180deg)';
      } else {
        divMenu.style.display = 'none';
        divIcon.style.transform = 'rotate(0deg)';
      }
    });
  }
});
</script>
`;

const processDir = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        processDir(fullPath);
      }
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Ensure we don't duplicate
      if (content.includes('cni-mobile-menu')) continue;

      if (dir.includes('divisions')) {
        // Divisions pages
        // 1. Hide CTA on mobile
        if(content.includes('<a href="/request-proposal" class="bg"')) {
            content = content.replace('<a href="/request-proposal" class="bg"', '<a href="/request-proposal" class="bg desktop-cta"');
        } else if (content.includes('<a href="/request-proposal" class="btn-gold"')) {
            content = content.replace('<a href="/request-proposal" class="btn-gold"', '<a href="/request-proposal" class="btn-gold desktop-cta"');
        }
        
        // 2. Add hamburger button next to CTA
        content = content.replace(
          /(<a href="\/request-proposal"[^>]*>Request a Proposal &#8594;<\/a>)/,
          `$1\n    <button id="cni-mobile-btn" class="mobile-toggle" style="background:none;border:none;color:white;cursor:pointer;display:none;"><svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>`
        );

        // 3. Add CSS for mobile hide/show
        content = content.replace(
          /@media\(max-width:768px\)\{header\{padding:14px 20px!important;\}nav\{display:none!important;\}\}/,
          `@media(max-width:768px){header{padding:14px 20px!important;}nav{display:none!important;} .desktop-cta{display:none!important;} .mobile-toggle{display:block!important;}}`
        );

      } else {
        // Main root pages (Tailwind)
        // Find the right CTA container and replace
        const ctaRegex = /<div class="flex items-center gap-4 sm:gap-6 shrink-0(?: z-50)?">([\s\S]*?)<\/div>/;
        const match = content.match(ctaRegex);
        if (match) {
          let innerHtml = match[1];
          // Add hidden lg:flex to the anchor
          innerHtml = innerHtml.replace(/<a href="\/request-proposal"([^>]*)class="/, '<a href="/request-proposal"$1class="hidden lg:flex ');
          
          const newDiv = `
      <!-- Right CTA & Mobile Toggle -->
      <div class="flex items-center gap-4 sm:gap-6 shrink-0 z-50">
${innerHtml}
        <button id="cni-mobile-btn" class="lg:hidden flex items-center justify-center text-white p-1" aria-label="Open menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>`;
          content = content.replace(ctaRegex, newDiv);
        }
      }

      // Append menu HTML before </body>
      if(content.includes('</body>')) {
          content = content.replace('</body>', mobileMenuHTML + '\n</body>');
      } else {
          content += '\n' + mobileMenuHTML;
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
};

processDir('d:\\CNI2');
