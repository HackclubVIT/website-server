const emailAddressRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// Supports Unicode characters... credit: the chromium developers
// don't even ask me to explain it

export const validateEmail = (email: string) => emailAddressRegex.test(email);
