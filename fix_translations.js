const fs = require('fs');

// Read the translations file
const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find the rohsCertified line and fix the syntax error, then add the new keys
const rohsCertifiedPattern = /rohsCertified:\s*"RoHS Certified,[\s\S]*?(\n\s*)emptyFormError/;
const match = content.match(rohsCertifiedPattern);

if (match) {
    // Replace the malformed section with the correct one
    content = content.replace(rohsCertifiedPattern, `rohsCertified: "RoHS Certified",\n      emptyFormError: "Please fill in all fields before submitting",\n      backToForm: "Back to Form",\n      contactFormTitle: "Get in Touch",\n      nameLabel: "Name",\n      namePlaceholder: "Your Name",\n      emailLabel: "Email",\n      emailPlaceholder: "your.email@example.com",\n      phoneLabel: "Phone Number",\n      phonePlaceholder: "Your Phone Number",\n      messageLabel: "Message",\n      messagePlaceholder: "Your Message",\n      submitButton: "Submit",\n      submitSuccess: "Submitted successfully!"`);
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully fixed the translation file');
} else {
    console.log('Could not find the malformed section in the file');
    
    // Alternative: Find rohsCertified and add the missing fields after it
    const rohsCertifiedIndex = content.indexOf('      rohsCertified: "RoHS Certified"');
    if (rohsCertifiedIndex !== -1) {
        // Find the end of that line
        const endOfLine = content.indexOf('\n', rohsCertifiedIndex);
        const before = content.substring(0, endOfLine);
        const after = content.substring(endOfLine);
        const newContent = before + 
            ',\n      emptyFormError: "Please fill in all fields before submitting",\n      backToForm: "Back to Form",\n      contactFormTitle: "Get in Touch",\n      nameLabel: "Name",\n      namePlaceholder: "Your Name",\n      emailLabel: "Email",\n      emailPlaceholder: "your.email@example.com",\n      phoneLabel: "Phone Number",\n      phonePlaceholder: "Your Phone Number",\n      messageLabel: "Message",\n      messagePlaceholder: "Your Message",\n      submitButton: "Submit",\n      submitSuccess: "Submitted successfully!" + 
            after;
        
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Successfully added missing translation keys to productGallery after fixing format');
    }
}