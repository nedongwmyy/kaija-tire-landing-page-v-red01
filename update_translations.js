const fs = require('fs');
const path = require('path');

// Read the translations file
const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Define the new translation keys to add
const newTranslationKeys = `
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
`;

// Find the position to insert the new keys (before the closing brace of productGallery)
const rohsCertifiedIndex = content.indexOf('      rohsCertified: "RoHS Certified"');
if (rohsCertifiedIndex !== -1) {
    const insertPosition = content.indexOf('"RoHS Certified"', rohsCertifiedIndex) + 'RoHS Certified"'.length;
    content = content.slice(0, insertPosition) + ',\n' + newTranslationKeys + content.slice(insertPosition);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully added missing translation keys to productGallery');
} else {
    console.log('Could not find the insertion point in the file');
}