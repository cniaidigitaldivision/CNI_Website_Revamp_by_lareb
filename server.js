require('dotenv').config({ path: '.env.local' });
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, country, service, office, message } = req.body;
    
    const escapeHtml = (unsafe) => {
      if (!unsafe) return '';
      return unsafe
           .replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&#039;");
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company || 'N/A');
    const safeCountry = escapeHtml(country);
    const safeService = escapeHtml(service);
    const safeOffice = escapeHtml(office);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');
    const submissionDate = new Date().toLocaleString('en-US', { timeZoneName: 'short' });

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New CNI Inquiry</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5; color: #333333; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background-color: #0B2233; padding: 35px 20px 25px; text-align: center; border-bottom: 2px solid #D9B66F; }
          .header img { max-height: 70px; margin-bottom: 20px; }
          .header h1 { color: #ffffff; font-size: 22px; margin: 0; letter-spacing: 2px; }
          .header p { color: #D9B66F; font-size: 13px; margin: 8px 0 0 0; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 40px 30px; }
          .content p.intro { font-size: 15px; line-height: 1.6; color: #555555; margin-top: 0; margin-bottom: 30px; }
          .table-container { width: 100%; border-collapse: collapse; margin-bottom: 35px; }
          .table-container td { padding: 14px 15px; border-bottom: 1px solid #eeeeee; font-size: 14px; }
          .table-container td.label { font-weight: bold; color: #0B2233; width: 40%; }
          .table-container td.value { color: #444444; }
          .table-container td.value a { color: #D9B66F; text-decoration: none; font-weight: bold; }
          .message-box { background-color: #f9f9f9; border-left: 4px solid #D9B66F; padding: 25px; margin-bottom: 35px; }
          .message-box h3 { font-size: 13px; color: #0B2233; text-transform: uppercase; margin: 0 0 12px 0; letter-spacing: 1px; }
          .message-box p { font-size: 15px; line-height: 1.6; color: #555555; margin: 0; }
          .action-btn { display: inline-block; background-color: #D9B66F; color: #0B2233; text-decoration: none; padding: 15px 30px; font-weight: bold; font-size: 14px; text-align: center; border-radius: 4px; letter-spacing: 1px; }
          .footer { background-color: #0B2233; padding: 35px 20px; text-align: center; border-top: 2px solid #D9B66F; }
          .footer img { max-height: 40px; margin-bottom: 20px; }
          .footer p { color: #aaaaaa; font-size: 13px; line-height: 1.6; margin: 0 0 10px 0; }
          .footer a { color: #D9B66F; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://crescentnovainternational.com/logo.png" alt="Crescent Nova International" />
            <h1>NEW WEBSITE INQUIRY</h1>
            <p>Crescent Nova International</p>
          </div>
          <div class="content">
            <p class="intro">A new inquiry has been received through the Crescent Nova International website.</p>
            <table class="table-container">
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${safeName}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${safePhone}">${safePhone}</a></td>
              </tr>
              <tr>
                <td class="label">Company Name</td>
                <td class="value">${safeCompany}</td>
              </tr>
              <tr>
                <td class="label">Country</td>
                <td class="value">${safeCountry}</td>
              </tr>
              <tr>
                <td class="label">Service Required</td>
                <td class="value">${safeService}</td>
              </tr>
              <tr>
                <td class="label">Preferred Office</td>
                <td class="value">${safeOffice}</td>
              </tr>
              <tr>
                <td class="label">Submission Date & Time</td>
                <td class="value">${submissionDate}</td>
              </tr>
            </table>
            
            <div class="message-box">
              <h3>Client Message</h3>
              <p>${safeMessage}</p>
            </div>
            
            <div style="text-align: center;">
              <a href="mailto:${safeEmail}" class="action-btn">REPLY TO CLIENT &rarr;</a>
            </div>
          </div>
          
          <div class="footer">
            <img src="https://crescentnovainternational.com/logo.png" alt="CNI Logo" />
            <p>CRESCENT NOVA INTERNATIONAL<br>Your Gateway to Business Opportunities in Saudi Arabia</p>
            <p>Website: <a href="http://www.crescentnovainternational.com/">www.crescentnovainternational.com</a></p>
            <p style="margin-top: 25px; font-style: italic; font-size: 12px; color: #888888;">This is an automated notification from the Crescent Nova International website.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const plainText = `NEW WEBSITE INQUIRY
Crescent Nova International

A new inquiry has been received through the Crescent Nova International website.

Full Name: ${safeName}
Email Address: ${safeEmail}
Phone Number: ${safePhone}
Company Name: ${safeCompany}
Country: ${safeCountry}
Service Required: ${safeService}
Preferred Office: ${safeOffice}
Submission Date & Time: ${submissionDate}

CLIENT MESSAGE:
${safeMessage.replace(/<br\/>/g, '\n')}

To reply, email ${safeEmail}

---
CRESCENT NOVA INTERNATIONAL
Your Gateway to Business Opportunities in Saudi Arabia
www.crescentnovainternational.com
This is an automated notification.`;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_RECEIVER_EMAIL || 'laraibrafique090@gmail.com',
      reply_to: email,
      subject: `New CNI Inquiry — ${name}`,
      html: emailHtml,
      text: plainText
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
});
