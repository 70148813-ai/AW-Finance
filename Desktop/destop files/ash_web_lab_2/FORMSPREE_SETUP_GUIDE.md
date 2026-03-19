# 📧 Formspree Setup Guide

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" or "Sign Up"
3. Create a free account (allows 50 submissions/month)

## Step 2: Create Your Form

1. After logging in, click "New Form"
2. Enter a form name (e.g., "Contact Form - AW Academy")
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xrbzgqyw`)

## Step 3: Update Your Contact Form

Replace `YOUR_FORM_ID` in your contact.html file:

```html
<!-- Change this line: -->
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- To your actual endpoint: -->
<form id="contactForm" action="https://formspree.io/f/xrbzgqyw" method="POST">
```

## Step 4: Configure Form Settings (Optional)

In your Formspree dashboard, you can:

- **Set up email notifications** - Get emails when someone submits
- **Add custom thank you page** - Redirect after submission
- **Enable spam protection** - Built-in reCAPTCHA
- **Set up webhooks** - For advanced integrations

## Step 5: Test Your Form

1. Open your contact page
2. Fill out the form with valid data
3. Submit the form
4. Check your email for the submission
5. Verify the success message appears

## 🎯 Form Validation Features Added

Your contact form now includes:

### ✅ **Client-Side Validation**
- **Name**: 2-50 characters required
- **Email**: Valid email format required
- **Subject**: 5-100 characters required  
- **Message**: 10-1000 characters required
- **Real-time character counter** for message field

### ✅ **User Experience Features**
- **Real-time validation** - Errors show on blur
- **Visual feedback** - Red borders for invalid fields
- **Loading states** - Button shows spinner during submission
- **Success/Error messages** - Clear feedback after submission
- **Form reset** - Clears form after successful submission

### ✅ **Error Handling**
- **Network errors** - Handles connection issues
- **Validation errors** - Shows specific field errors
- **Server errors** - Graceful error messages

## 🔧 Customization Options

### Change Validation Rules
Edit the JavaScript validation functions:

```javascript
// Example: Change name length requirement
function validateName() {
    const name = nameInput.value.trim();
    if (name.length < 3 || name.length > 30) { // Changed from 2-50
        // ... error handling
    }
}
```

### Add More Fields
1. Add HTML input field
2. Add validation function
3. Call validation in form submit handler

### Styling Customization
- Error colors: Change `text-red-400` and `border-red-500`
- Success colors: Change `text-green-400` 
- Loading spinner: Modify the SVG animation

## 🚀 Testing Checklist

- [ ] Form submits successfully with valid data
- [ ] Validation errors show for invalid data
- [ ] Character counter works for message field
- [ ] Loading state appears during submission
- [ ] Success message shows after submission
- [ ] Error message shows if submission fails
- [ ] Form resets after successful submission
- [ ] Email notifications arrive (if configured)

## 💡 Pro Tips

1. **Test with invalid data** to ensure validation works
2. **Check spam folder** for Formspree notifications
3. **Use real email addresses** during testing
4. **Monitor submission count** in Formspree dashboard
5. **Consider upgrading** if you need more than 50 submissions/month

Your contact form is now fully functional with professional validation! 🎉