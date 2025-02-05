const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const password = document.getElementById("password");
const check = document.getElementById("check-password");
const result = document.getElementById("result");

check.addEventListener("click", () => {
  if (regex === password.value) {
    result.textContent = "Password is valid";
  } else {
    result.textContent = "Password is invalid";
  }
});
