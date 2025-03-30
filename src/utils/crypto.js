import CryptoJS from "crypto-js"
import { envConst } from "./envConstant"
import crypto from 'crypto'
const secretKey = envConst.secretKey

// encryption
const encryptedString = (string) => {
    return CryptoJS.AES.encrypt(string, secretKey).toString()
}

// decryption
const decryptedString = (string) => {
    return CryptoJS.AES.decrypt(string, secretKey).toString(CryptoJS.enc.Utf8)
}

const generatePassword = (length = 24) => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array); // Tạo số ngẫu nhiên an toàn

    for (let i = 0; i < length; i++) {
        password += chars[array[i] % chars.length];
    }
    return password;
}

export {
    encryptedString, decryptedString, generatePassword
}
