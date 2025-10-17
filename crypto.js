const CryptoJS = require("crypto-js");

// Parolni shifrlash
function encryptData(data, key) {
  return CryptoJS.AES.encrypt(data, key).toString();
}

// Shifrlangan parolni ochish
function decryptData(ciphertext, key) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

// Test qilish uchun:
const original = "Azizbek2025";
const secretKey = "MySuperKey";

const encrypted = encryptData(original, secretKey);
console.log("🔐 Shifrlangan:", encrypted);

const decrypted = decryptData(encrypted, secretKey);
console.log("🔓 Ochilgan:", decrypted);