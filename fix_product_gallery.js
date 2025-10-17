// Correct the entire productGallery section in the translation file
const fs = require('fs');

const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Define the correct productGallery section
const correctProductGallery = `    // Product Gallery
    productGallery: {
      title: "KAIJA Tire - 20X4.0 ",
      subtitle: "Puncture-Resistant Liner System Professional-grade tire protection for extreme conditions",
      cta1: "Mail Now",
      cta2: "Whatsapp Now",
      highlights: "Product Highlights",
      highlightsText: "Crafted from high-polymer composite materials with a 15mm ultra-thick puncture-resistant layer, reducing flat tire risk by over 90%. Specifically designed for mountain bikes, snow bikes, and other wide-tire vehicles, providing ultimate safety and comfort.",
      easyReturns: "Easy Returns",
      rohsCertified: "RoHS Certified",
      emptyFormError: "Please fill in all fields before submitting",
      backToForm: "Back to Form",
      contactFormTitle: "Get in Touch",
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Your Phone Number",
      messageLabel: "Message",
      messagePlaceholder: "Your Message",
      submitButton: "Submit",
      submitSuccess: "Submitted successfully!"
    },`;

// Find and replace the productGallery section in the English portion
const startPattern = /(\s*\/\/ Product Gallery\s*\n\s*productGallery: \{[\s\S]*?easyReturns: "Easy Returns",\s*\n\s*rohsCertified: "RoHS Certified",?)/;
const endPattern = /(\s*rohsCertified: "RoHS Certified",?\s*\n[\s\S]*?submitSuccess: "Submitted successfully!"\s*\n\s*"\s*\n\s*\},)/;

// Replace the entire section with the correct one
const correctedContent = content.replace(
  /(\s*\/\/ Product Gallery\s*\n\s*productGallery: \{[\s\S]*?easyReturns: "Easy Returns",\s*\n\s*rohsCertified: "RoHS Certified",?\s*\n[\s\S]*?submitSuccess: "Submitted successfully!"\s*\n\s*"\s*\n\s*\},)/,
  correctProductGallery
);

// Write the corrected content back
fs.writeFileSync(filePath, correctedContent, 'utf8');
console.log('Successfully corrected the productGallery section');