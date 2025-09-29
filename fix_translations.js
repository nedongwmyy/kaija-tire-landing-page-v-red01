const fs = require('fs');
const path = require('path');

// Read the file
const filePath = path.join(__dirname, 'lib', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The original text with all quotes properly escaped for JavaScript
// The internal quotes "Green environmental protection" and "lateral hollow with reinforcing rib" should be \\\" in the JS string
const newText = "Guangzhou Nedong information technology Co., Ltd (Named briefly Nedong Co., Ltd below), was founded in 2009. It consist of development&research, manufacturing, and sales department. We engage mainly in environmental non-pneumatic tire and bike system , and now we own more than 100 national and international patents. The tires are applied to masses of vehicle, such as bike, public bike, e-bike, scooter, self-balance vehicle, medical vehicle, and military vehicle. The comprehensive performance are prior among tires industry. The tire belong to \\\"Green environmental protection\\\" product, is designed as \\\"lateral hollow with reinforcing rib\\\", with advantages of non-toxic materials, good cushion performance, inflation free, and recyclable. Meanwhile, the tire has passed EU ROHS Test, and is popular to European and American market. There must be a broad marketing prospect. The stable and improving quality of Nedong tire attributes to the highly support by well-known industry expert and long-term cooperation relationship with famous scientific research institute. Nedong Co., Ltd has gained governmental award and Subsidy for it's excellent progress in innovation, which including Innovation Fund in Guangdong Province, Innovation Fund in Guangzhou, Technology Project in Tianhe District, and Little Giant Science and Technology Enterprise. Social Value As a promising and long-run company, we bring exceeding expectancy of service to customers and attach much importance to the experience of customer's riding. The quality of tire is improving and surpassing, bring more than customers' expectancy. Nedong Co., Ltd hold the idea of environmental protection which country advocate. It's a rare trait that Nedong tire reaches Zero-pollution compared with other tire manufacturers. There is no exhaust gas and rubbish produced which is hazard to customers during the whole process. Nedong tire has been surpassing overall other tire in safety, abrasive resistance, convenience and economy with excellent quality, cost, few of Maintenance fee as well. Our tires spread over masses of cities, such as Guangzhou, Huizhou, Zhongshan, Zhuhai, and so on. Not only are public's fee of maintenance and tire change saved, but also the utilization rate of public bike is improved highly. It's beneficial to people and nation, which are highly praised by society. Carrying out self-innovative idea with the aim of being a pioneer of low carbon environmental protection career is what we insist on. We will devote our flesh and blood to riding of green and low carbon.";

// Replace the English version (first occurrence)
let firstReplacement = false;
content = content.replace(/(description:\\s*\\")(?:[^\"\\]|\\.)*(")/, (match, p1, p2) => {
    if (!firstReplacement) {
        firstReplacement = true;
        return p1 + newText + p2;
    }
    return match;
});

// Replace the Spanish version (second occurrence)
let secondReplacement = false;
content = content.replace(/(description:\\s*\\")(?:[^\"\\]|\\.)*(")/, (match, p1, p2) => {
    if (!secondReplacement && firstReplacement) {  // Only replace after the first has been replaced
        secondReplacement = true;
        return p1 + newText + p2;
    }
    return match;
});

// Replace the Italian version (third occurrence)
let thirdReplacement = false;
content = content.replace(/(description:\\s*\\")(?:[^\"\\]|\\.)*(")/, (match, p1, p2) => {
    if (!thirdReplacement && secondReplacement) {  // Only replace after the second has been replaced
        thirdReplacement = true;
        return p1 + newText + p2;
    }
    return match;
});

fs.writeFileSync(filePath, content);
console.log('Fixed all three descriptions with properly escaped content');