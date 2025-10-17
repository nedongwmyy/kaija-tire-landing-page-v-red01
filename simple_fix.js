const fs = require('fs');

// Read the file
const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the malformed section with the correct syntax
const correctedContent = content.replace(
  /rohsCertified:\s*"RoHS Certified,[\s\S]*?Submitted successfully!\\n"/,
  'rohsCertified: "RoHS Certified",\n      emptyFormError: "Please fill in all fields before submitting",\n      backToForm: "Back to Form",\n      contactFormTitle: "Get in Touch",\n      nameLabel: "Name",\n      namePlaceholder: "Your Name",\n      emailLabel: "Email",\n      emailPlaceholder: "your.email@example.com",\n      phoneLabel: "Phone Number",\n      phonePlaceholder: "Your Phone Number",\n      messageLabel: "Message",\n      messagePlaceholder: "Your Message",\n      submitButton: "Submit",\n      submitSuccess: "Submitted successfully!"'
);

// Write the file back
fs.writeFileSync(filePath, correctedContent, 'utf8');
console.log('Successfully fixed the translation file');