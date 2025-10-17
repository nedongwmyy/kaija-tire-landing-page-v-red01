// Add missing translation keys to Spanish and Italian sections
const fs = require('fs');

const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Spanish translation keys to add
const spanishKeys = `      easyReturns: "Devoluciones Fáciles",
      rohsCertified: "Certificado RoHS",
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

// Italian translation keys to add
const italianKeys = `      easyReturns: "Resi Facili",
      rohsCertified: "Certificato RoHS",
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

// Replace the Spanish productGallery section - find the one that ends with rohsCertified
content = content.replace(
  /(\/\/ Product Gallery[\s\S]*?easyReturns: "Devoluciones Fáciles",\s*\n\s*rohsCertified: "Certificado RoHS"\s*\n\s*\},)/,
  `    // Product Gallery\n    productGallery: {\n${spanishKeys}\n    },`
);

// Replace the Italian productGallery section - find the one that ends with rohsCertified
content = content.replace(
  /(\/\/ Product Gallery[\s\S]*?easyReturns: "Resi Facili",\s*\n\s*rohsCertified: "Certificato RoHS"\s*\n\s*\},)/,
  `    // Product Gallery\n    productGallery: {\n${italianKeys}\n    },`
);

// Write the updated content
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added missing translation keys to Spanish and Italian sections');