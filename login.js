function checkLogin() {
  const phoneInput = document.getElementById("phoneInput");
  const passwordInput = document.getElementById("passwordInput");
  const errorMsg = document.getElementById("errorMsg");
  const loginButton = document.getElementById("loginButton");

  const correctPhone = "940940339";
  const correctPassword = "1A8LF52G";

  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();

  if (phone === correctPhone && password === correctPassword) {
    window.location.href = "dashboard.html";
  } else {
    errorMsg.classList.remove("hidden");
    loginButton.disabled = true;
    loginButton.innerText = "Kutib turing...";

    setTimeout(() => {
      errorMsg.classList.add("hidden");
      phoneInput.value = "";
      passwordInput.value = "";
      loginButton.disabled = false;
      loginButton.innerText = "Kirish";
    }, 10000); // 10 soniya
  }
}