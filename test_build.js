const fs = require('fs');
const path = require('path');

// Read the file
const filePath = path.join(__dirname, 'lib', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all three description values with a simple placeholder first to check if build works
const simpleDescription = "Company information placeholder";

// Replace English
content = content.replace(
  /(description:\\s*")([^"\\]|\\.)*(")/g,
  `description: "${simpleDescription}"`
);

fs.writeFileSync(filePath, content);
console.log('Temporarily replaced descriptions with simple placeholder');