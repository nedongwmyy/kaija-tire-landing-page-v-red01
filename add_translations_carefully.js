// Carefully add missing translation keys to all language sections without disturbing escape sequences
const fs = require('fs');

const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The issue is that we need to add the missing keys after rohsCertified in each language
// English
const englishAdditions = `,
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
      submitSuccess: "Submitted successfully!"`;

// Spanish 
const spanishAdditions = `,
      emptyFormError: "Por favor, complete todos los campos antes de enviar",
      backToForm: "Volver al formulario",
      contactFormTitle: "Póngase en contacto",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu.correo@ejemplo.com",
      phoneLabel: "Número de teléfono",
      phonePlaceholder: "Tu número de teléfono",
      messageLabel: "Mensaje",
      messagePlaceholder: "Tu mensaje",
      submitButton: "Enviar",
      submitSuccess: "¡Enviado con éxito!"`;

// Italian
const italianAdditions = `,
      emptyFormError: "Si prega di compilare tutti i campi prima di inviare",
      backToForm: "Torna al modulo",
      contactFormTitle: "Contattaci",
      nameLabel: "Nome",
      namePlaceholder: "Il tuo nome",
      emailLabel: "Email",
      emailPlaceholder: "la.tua.email@esempio.com",
      phoneLabel: "Numero di telefono",
      phonePlaceholder: "Il tuo numero di telefono",
      messageLabel: "Messaggio",
      messagePlaceholder: "Il tuo messaggio",
      submitButton: "Invia",
      submitSuccess: "Inviato con successo!"`;

// Find each rohsCertified and add the new keys after it
// For English (around line 30 based on original structure)
const englishPattern = /(easyReturns: "Easy Returns",\s*\n\s*rohsCertified: "RoHS Certified")/;
content = content.replace(englishPattern, `$1${englishAdditions}`);

// For Spanish 
const spanishPattern = /(easyReturns: "Devoluciones Fáciles",\s*\n\s*rohsCertified: "Certificado RoHS")/;
content = content.replace(spanishPattern, `$1${spanishAdditions}`);

// For Italian
const italianPattern = /(easyReturns: "Resi Facili",\s*\n\s*rohsCertified: "Certificato RoHS")/;
content = content.replace(italianPattern, `$1${italianAdditions}`);

// Write the file back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added missing translation keys without disturbing escape sequences');