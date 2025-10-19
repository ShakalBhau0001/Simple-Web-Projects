document.getElementById("otpBtn").addEventListener("click", () => {
  let otp = Math.floor(Math.random() * 9000 + 1000);
  alert("Your OTP is: " + otp);
});
