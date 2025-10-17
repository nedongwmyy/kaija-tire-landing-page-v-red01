// Fix the syntax issue in the translation file
const fs = require('fs');

const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);

// Find and fix the specific line with the syntax error
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('rohsCertified: "RoHS Certified,')) {
        // Replace the incorrect line
        lines[i] = '      rohsCertified: "RoHS Certified",';
        break;
    }
}

// Write the file back
fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('Fixed the syntax error in the translation file');