const assert = require('assert');
const functions = require('../assets/js/functions');

describe('Checking parameters for functions than only require letters', () => {
  it('Should return true if the user input at least one letter', () => {
    assert.equal(true, functions.checkValidChars('victoria'));
    assert.equal(true, functions.checkValidChars('hamilton123'));
  });
  it('Should return false if the user input only numbers or white spaces', () => {
    assert.equal(false, functions.checkValidChars('12345'));
    assert.equal(false, functions.checkValidChars(''));
    assert.equal(false, functions.checkValidChars(' '));
  });
});

describe('Removing digits from a string', () => {
  it('Should return the same string without the numbers', () => {
    assert.equal('victoria', functions.replaceNumbers('victoria1'));
    assert.equal('hamilton', functions.replaceNumbers('hamilton123'));
    assert.equal('eLza', functions.replaceNumbers('eL1za'));
    assert.equal('Mañana', functions.replaceNumbers('Mañana'));
  });
});

describe('Checking if the Selva/Korpi cipher is working correctly', () => {
  it('Should return translate words from Selva to Korpi an viceversa', () => {
    assert.equal('pactelai', functions.selvaKorpi('victoria'));
    assert.equal('mene123', functions.selvaKorpi('mono123'));
    assert.equal('What happened?', functions.selvaKorpi('Whit hivvonod?'));
    assert.equal('HaMiLtOn', functions.selvaKorpi('HiMaRtEn'));
    assert.equal('Victoria', functions.selvaKorpi('Pactelai'));
  });
  it('Should return error message if the user only inputs numbers or empty spaces', () => {
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to cipher or decipher :(', functions.selvaKorpi('123'));
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to cipher or decipher :(', functions.selvaKorpi(' '));
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to cipher or decipher :(', functions.selvaKorpi(''));
  });
});

describe('Checking if Caesar Cipher works correctly', () => {
  it('Should return the phrase correctly ciphered', () => {
    assert.equal('Voawzhcb', functions.caesarCipher('Hamilton', 14));
    assert.equal('Wdars77', functions.caesarCipher('Eliza77', 18));
    assert.equal('C\'g mi bohals', functions.caesarCipher('I\'m so hungry', 20));
    assert.equal('Ñvñv Jvywz', functions.caesarCipher('Ñoño Corps', 33));
  });
  it('Should return error message if the user only inputs numbers or empty spaces', () => {
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to cipher :(', functions.caesarCipher('123', 33));
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to cipher :(', functions.caesarCipher(' ', 2));
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to cipher :(', functions.caesarCipher('', 5));
  });
});

describe('Checking if Caesar Decipher works correctly', () => {
  it('Should return the phrase correctly deciphered', () => {
    assert.equal('Hamilton', functions.caesarDecipher('Voawzhcb', 14));
    assert.equal('Victoria', functions.caesarDecipher('Wjdupsjb', 1));
    assert.equal('I would like to watch something.', functions.caesarDecipher('O cuarj roqk zu cgzin yuskznotm.', 6));
    assert.equal('eL1zA0', functions.caesarDecipher('dK1yZ0', 25));
  });
  it('Should return error message if the user only inputs numbers or empty spaces', () => {
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to decipher :(', functions.caesarDecipher('123', 33));
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to decipher :(', functions.caesarDecipher(' ', 2));
    assert.equal('Sorry, if you input only numbers or empty spaces we\'ve nothing to decipher :(', functions.caesarDecipher('', 5));
  });
});

describe('Checking if alphabetNumbers works correctly', () => {
  it('Should return the phrase correctly ciphered', () => {
    assert.equal('012', functions.alphabetNumbers('abc'));
  });
});