// Fix the escape sequences in company descriptions across all languages
const fs = require('fs');

const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the double-escaped quotes (\\\\\\\" should be \\\" for JavaScript)
content = content.replace(/\\\\\\"/g, '\\"');

// Write the corrected content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully fixed escape sequences in the translations file');