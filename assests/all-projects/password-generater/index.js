
function generateRandomPassword(length) {
    const passcode = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
    let password = "";

    
    for (let i = 1; i < length; i++) {
        let randompassword = Math.floor(Math.random() * passcode.length);
        password += passcode[randompassword];
    }
    return password;
}

function showPassword() {
    document.getElementById("password").textContent = generateRandomPassword(9);
}
