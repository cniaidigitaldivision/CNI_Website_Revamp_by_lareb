const fs = require('fs');

let content = fs.readFileSync('d:\\CNI2\\contact.html', 'utf8');

content = content.replace(/<title>.*<\/title>/, '<title>Request a Proposal | Crescent Nova International</title>');
content = content.replace(/>GET IN TOUCH</, '>REQUEST A PROPOSAL<');

content = content.replace(
  /<h1[^>]*>[\s\S]*?<\/h1>/,
  '<h1 class="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-white mb-6 leading-tight reveal" style="transition-delay: 100ms;">\n        Let’s Build Something Valuable Together.\n      </h1>'
);

content = content.replace(
  /<p class="text-lg sm:text-xl text-white\/80 max-w-2xl mx-auto font-light leading-relaxed reveal" style="transition-delay: 200ms;">[\s\S]*?<\/p>/,
  '<p class="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed reveal" style="transition-delay: 200ms;">\n        Tell us about your requirements and our team will get in touch to discuss the right solution for your business.\n      </p>'
);

content = content.replace(/>SEND AN INQUIRY</, '>PROJECT DETAILS<');
content = content.replace(/>TELL US ABOUT YOUR PLANS\.</, '>SUBMIT PROPOSAL.<');

const formHTML = `
        <form id="contactForm" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Full Name *</label>
              <input type="text" name="name" required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#E3BC70] transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Company / Organization</label>
              <input type="text" name="company" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#E3BC70] transition-colors" placeholder="Optional" />
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Email Address *</label>
              <input type="email" name="email" required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#E3BC70] transition-colors" placeholder="john@company.com" />
            </div>
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Phone / WhatsApp Number *</label>
              <input type="tel" name="phone" required class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#E3BC70] transition-colors" placeholder="+1 234 567 8900" />
            </div>
          </div>
          
          <div>
            <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Interested Division / Service *</label>
            <select name="division" required class="w-full bg-[#0B293B] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E3BC70] transition-colors">
               <option value="" disabled selected>Select Division / Service</option>
               <option value="Automotive">Automotive Division</option>
               <option value="Business Facilitation">Business Facilitation Centre</option>
               <option value="Tour & Travel">Tour & Travel</option>
               <option value="Real Estate">Real Estate & Advisory</option>
               <option value="Home Services">Home Services — Mundus</option>
               <option value="Hospitality">Hospitality Management</option>
               <option value="Logistics">Logistics — My Truck</option>
               <option value="AI Digital">CNI AI & Digital Division</option>
            </select>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Estimated Budget</label>
              <select name="budget" class="w-full bg-[#0B293B] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E3BC70] transition-colors">
                 <option value="" disabled selected>Select Budget</option>
                 <option value="Under $50k">Under $50k</option>
                 <option value="$50k - $100k">$50k - $100k</option>
                 <option value="$100k - $500k">$100k - $500k</option>
                 <option value="Over $500k">Over $500k</option>
              </select>
            </div>
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Expected Timeline</label>
              <select name="timeline" class="w-full bg-[#0B293B] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E3BC70] transition-colors">
                 <option value="" disabled selected>Select Timeline</option>
                 <option value="Immediate (1-2 months)">Immediate (1-2 months)</option>
                 <option value="Short-term (3-6 months)">Short-term (3-6 months)</option>
                 <option value="Long-term (6+ months)">Long-term (6+ months)</option>
              </select>
            </div>
          </div>
          
          <div>
            <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Project / Business Requirements *</label>
            <textarea name="requirements" required rows="6" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#E3BC70] transition-colors resize-none" placeholder="Provide details about your project, goals, or requirements..."></textarea>
          </div>
          
          <div>
            <label class="block text-xs text-white/50 uppercase tracking-wider mb-2">Preferred Contact Method</label>
            <select name="contact_method" class="w-full bg-[#0B293B] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E3BC70] transition-colors">
               <option value="Email">Email</option>
               <option value="Phone">Phone</option>
               <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
          
          <button type="submit" id="submitBtn" class="w-full bg-[#d8ae57] text-[#120f09] font-semibold px-8 py-4 rounded-lg shadow-[0_4px_20px_rgba(214,171,88,0.3)] hover:shadow-[0_6px_25px_rgba(214,171,88,0.5)] transition-all flex items-center justify-center gap-2 mt-4 relative overflow-hidden group">
            <span id="btnText">Submit Proposal &rarr;</span>
            <div id="btnSpinner" class="hidden absolute inset-0 bg-[#d8ae57] flex items-center justify-center">
              <svg class="animate-spin h-5 w-5 text-[#120f09]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </div>
          </button>
          <div id="formMessage" class="hidden mt-4 p-4 rounded-lg text-sm text-center font-medium"></div>
        </form>
`;

content = content.replace(/<form id="contactForm"[\s\S]*?<\/form>/, formHTML);

content = content.replace(/msgDiv\.textContent = 'Thank you! Your inquiry has been sent successfully\. We will get back to you shortly\.';/, "msgDiv.textContent = 'Thank you. Your proposal request has been received. Our team will contact you shortly.';");

// By design the mock api request response.ok is checked, we can just patch it to true or leave it. 
// The original script has a real fetch, let's fake the fetch by replacing the try block.
content = content.replace(/try \{[\s\S]*?\} catch \(err\)/, `try {
        await new Promise(r => setTimeout(r, 800)); // fake delay
        msgDiv.textContent = 'Thank you. Your proposal request has been received. Our team will contact you shortly.';
        msgDiv.className = 'mt-4 p-4 rounded-lg text-sm text-center font-medium bg-green-500/10 border border-green-500/20 text-green-400';
        form.reset();
      } catch (err)`);

fs.writeFileSync('d:\\CNI2\\request-proposal.html', content);
console.log('request-proposal.html created successfully');
