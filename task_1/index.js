import { encoded, translations } from "./data.js";

console.log("Let's rock");
// console.log(encoded, translations)
const regExp = /Id$/;

function decode(encoded, translations) {
  encoded.forEach((obj) => {
    for (let key in obj) {
      if (regExp.exec(key) && key !== "groupId") {
        const s = obj[key];
        if (s in translations) {
          obj[key] = translations[s];
        }
      }
    }
  });
  console.log(encoded);
  return encoded;
}

decode(encoded, translations);

function getUniqueId(encoded) {
  const uniqueId = {};
  encoded.forEach((obj) => {
    for (let key in obj) {
      if (regExp.exec(key)) {
        uniqueId[obj[key]] = true;
      }
    }
  });
  console.log(Object.keys(uniqueId));
}
getUniqueId(encoded);
