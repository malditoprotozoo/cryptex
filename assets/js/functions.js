const objFunctions = {
  checkValidChars: str => {
    let regex = /[a-zA-Z]/;
    return regex.test(str);
  },
  replaceNumbers: str => {
    let regex = /[\d]/g;
    return str.replace(regex, '');
  },
  selvaKorpi: (str) => {
    let result = [];
    let errorMsg = 'Sorry, if you input only numbers or empty spaces we\'ve nothing to cipher or decipher :(';
    if (objFunctions.checkValidChars(str)) {
      let selva = ['s', 'e', 'l', 'v', 'a', 'S', 'E', 'L', 'V', 'A'];
      let korpi = ['k', 'o', 'r', 'p', 'i', 'K', 'O', 'R', 'P', 'I'];
      for (let i = 0; i < str.length; i++) {
        if (selva.indexOf(str[i]) < 0 && korpi.indexOf(str[i]) < 0) {
          result.push(str[i]);
        } else if (selva.indexOf(str[i]) >= 0) {
          let pos = selva.indexOf(str[i]);
          result.push(korpi[pos]);
        } else if (korpi.indexOf(str[i]) >= 0) {
          let pos = korpi.indexOf(str[i]);
          result.push(selva[pos]);
        }
      }
    } else {
      return errorMsg;
    }
    return result.toString().replace(/,/g, '');
  },
  caesarCipher: (str, shift) => {
    let result = '';
    let errorMsg = 'Sorry, if you input only numbers or empty spaces we\'ve nothing to cipher :(';
    if (objFunctions.checkValidChars(str)) {
      for (let i = 0; i < str.length; i++) {
        let codeAscii = str.charCodeAt(i);
        if (codeAscii >= 65 && codeAscii <= 90) {
          result += String.fromCharCode((codeAscii - 65 + shift) % 26 + 65);
        } else if (codeAscii >= 97 && codeAscii <= 122) {
          result += String.fromCharCode((codeAscii - 97 + shift) % 26 + 97);
        } else {
          result += String.fromCharCode(codeAscii);
        }
      }
      return result;
    } else {
      return errorMsg;
    }
  },
  caesarDecipher: (str, shift) => {
    let result = '';
    let errorMsg = 'Sorry, if you input only numbers or empty spaces we\'ve nothing to decipher :(';
    if (objFunctions.checkValidChars(str)) {
      for (let i = 0; i < str.length; i++) {
        let codeAscii = str.charCodeAt(i);
        if (codeAscii >= 65 && codeAscii <= 90) {
          result += String.fromCharCode((codeAscii - 65 - shift + 52) % 26 + 65);
        } else if (codeAscii >= 97 && codeAscii <= 122) {
          result += String.fromCharCode((codeAscii - 97 - shift + 52) % 26 + 97);
        } else {
          result += String.fromCharCode(codeAscii);
        }
      }
      return result;
    } else {
      return errorMsg;
    }
  },
  alphabetNumbers: (str) => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let alphabetUpper = alphabet.map(i => i.toUpperCase());
    let cleanStr = objFunctions.replaceNumbers(str);
    let result = '';
    for (let i = 0; i < cleanStr.length; i++) {
      result += alphabet.indexOf(cleanStr[i]);
    }
    return result;
  }
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = objFunctions;
};