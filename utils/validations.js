export function isEmailValid(email) {
    const emailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    return emailValid.test(String(email).toLowerCase());
}