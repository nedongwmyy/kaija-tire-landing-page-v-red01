'use client';

import { useLanguage } from '@/contexts/language-context';
import { useEffect } from 'react';

export default function MetaUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    // Define metadata based on language
    const metaMap = {
      en: {
        title: "KAIJA Tire - Advanced Puncture-Resistant Liner System",
        description: "KAIJA Tire provides an advanced tire puncture-resistant liner system, featuring a dragon scale texture design and a 15mm protective layer, which can reduce the risk of punctures by about 90%, significantly enhancing riding safety and comfort."
      },
      es: {
        title: "KAIJA Tire - Sistema Avanzado de Revestimiento Antipinchazos",
        description: "KAIJA Tire ofrece un sistema avanzado de revestimiento antipinchazos para neumáticos, con un diseño de textura de escamas de dragón y una capa protectora de 15 mm, que puede reducir el riesgo de pinchazos en aproximadamente un 90%, mejorando significativamente la seguridad y la comodidad en la conducción."
      },
      it: {
        title: "KAIJA Tire - Sistema Avanzato di Rivestimento Antiforatura",
        description: "KAIJA Tire offre un sistema avanzato di rivestimento antiforatura per pneumatici, caratterizzato da un design con texture a scaglie di drago e uno strato protettivo da 15 mm, che può ridurre il rischio di forature di circa il 90%, migliorando significativamente la sicurezza e il comfort di guida."
      }
    };

    const metadata = metaMap[language] || metaMap.en;

    // Update the title
    const titleElement = document.getElementById('dynamic-title');
    if (titleElement) {
      titleElement.textContent = metadata.title;
    }

    // Update the description meta tag
    const descriptionElement = document.getElementById('dynamic-description');
    if (descriptionElement) {
      descriptionElement.setAttribute('content', metadata.description);
    }

    // Update the general title tag as well
    document.title = metadata.title;

    // Update the language attribute on the html element
    document.documentElement.lang = language;
  }, [language]);

  return null; // This component doesn't render anything
}