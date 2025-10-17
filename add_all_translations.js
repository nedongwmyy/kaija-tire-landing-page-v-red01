// Add missing translation keys to all language sections
const fs = require('fs');

const filePath = 'C:\\webcode\\kaija-tire-landing-page-v-red01\\lib\\translations.ts';
let content = fs.readFileSync(filePath, 'utf8');

// English additions
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

// Spanish additions
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

// Italian additions
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

// Add to English productGallery (after rohsCertified)
content = content.replace(
  /(rohsCertified: "RoHS Certified")/,
  `$1${englishAdditions}`
);

// Add to Spanish productGallery (after rohsCertified) 
content = content.replace(
  /(rohsCertified: "Certificado RoHS")/,
  `$1${spanishAdditions}`
);

// Add to Italian productGallery (after rohsCertified)
content = content.replace(
  /(rohsCertified: "Certificato RoHS")/,
  `$1${italianAdditions}`
);

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added missing translation keys to all language sections');