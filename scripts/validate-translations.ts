import { translations } from "@/lib/translations"

// 验证所有语言都有相同的键结构
const languages = Object.keys(translations) as Array<keyof typeof translations>;
console.log("Languages:", languages);

// 验证基本结构
const baseKeys = Object.keys(translations.en);
console.log("Base keys:", baseKeys);

languages.forEach(lang => {
  const langKeys = Object.keys(translations[lang]);
  console.log(`${lang} keys:`, langKeys);
  
  // 检查键是否匹配
  const missingKeys = baseKeys.filter(key => !langKeys.includes(key));
  const extraKeys = langKeys.filter(key => !baseKeys.includes(key));
  
  if (missingKeys.length > 0) {
    console.log(`Missing keys in ${lang}:`, missingKeys);
  }
  
  if (extraKeys.length > 0) {
    console.log(`Extra keys in ${lang}:`, extraKeys);
  }
});

console.log("Translation file validation complete");