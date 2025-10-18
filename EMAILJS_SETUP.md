# EmailJS Setup Instructions

Your contact form is now configured to use EmailJS! Follow these steps to complete the setup:

## What's Already Done ✅
- ✅ EmailJS library installed (`@emailjs/browser`)
- ✅ Service ID configured: `service_twynj6p`
- ✅ Contact form updated with email sending functionality
- ✅ Success/error messages added
- ✅ Form validation and loading states

## What You Need to Do 📝

### Step 1: Get Your Template ID
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Create a new template or use an existing one
4. Your template should include these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
   - `{{to_name}}` - Your name (recipient)

**Example Template:**
```
Subject: New Portfolio Contact from {{from_name}}

Hi {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

5. Copy the **Template ID** (looks like: `template_xxxxxxx`)

### Step 2: Get Your Public Key
1. In EmailJS Dashboard, go to **Account** → **General**
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxx`)
3. Copy it

### Step 3: Update the Code
Open `src/components/Contact.tsx` and replace these values around line 30-31:

```typescript
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual public key
```

**Example:**
```typescript
const templateId = 'template_abc123xyz';
const publicKey = 'xJ8kL9mNpQ2rStUv';
```

### Step 4: Test It!
1. Save the file
2. Go to your portfolio website
3. Navigate to the Contact section
4. Fill out the form and click "Send Message"
5. You should see a success message: "Message sent successfully! I'll get back to you soon."
6. Check your email to confirm you received it!

## Troubleshooting 🔧

### Error: "Failed to send message"
- Double-check your Template ID and Public Key
- Make sure your EmailJS service is active
- Check browser console for detailed error messages

### Not receiving emails?
- Verify your email address in EmailJS dashboard
- Check spam/junk folder
- Make sure the template variables match exactly

## Current Features 🎯
- ✉️ Sends emails directly to: `workwithanjali.v@gmail.com`
- ✅ Success confirmation message
- ❌ Error handling with user-friendly messages
- 🔄 Loading state while sending
- 🧹 Form clears automatically on success
- ⏱️ Status messages auto-hide after 5 seconds

## Need Help?
If you encounter any issues, check the EmailJS documentation: https://www.emailjs.com/docs/
