const objFunctions = {
  checkValidChars: (str) => {
    let regex = /[a-zA-Z]/;
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  },
  selvaKorpi: (str) => {
    let result = [];
    let errorMsg = 'Sorry, if you input numbers or empty spaces we\'ve nothing to cipher or decipher :(';
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
  }
};

if (typeof module != 'undefined' && module.exports) {
  module.exports = objFunctions;
};