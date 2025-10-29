function generatePassword() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let chars = "";
    if (document.getElementById("lower").checked) chars += lower;
    if (document.getElementById("upper").checked) chars += upper;
    if (document.getElementById("nums").checked) chars += nums;
    if (document.getElementById("syms").checked) chars += syms;

    const len = parseInt(document.getElementById("length").value);
    if (!chars) return alert("Select at least one option!");

    let password = "";
    const array = new Uint32Array(len);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < len; i++) {
        password += chars[array[i] % chars.length];
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    const input = document.getElementById("password");
    input.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

// Auto-Generate Every 10 Seconds
generatePassword();
setInterval(generatePassword, 10000);
