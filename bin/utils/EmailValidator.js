"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const emailAddressRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// Supports Unicode characters... credit: the chromium developers
// don't even ask me to explain it
const validateEmail = (email) => emailAddressRegex.test(email);
exports.validateEmail = validateEmail;
