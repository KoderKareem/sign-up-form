const passWordValue = document.querySelector("#psw")
const confirmpassWordValue = document.querySelector("#confirm-psw")
let error = document.querySelector(".error")

passWordValue.addEventListener("input", validate)
confirmpassWordValue.addEventListener("input", validate)



function validate(e){
const password1 = passWordValue.value;
const password2 = confirmpassWordValue.value;

if (password1 !== password2) {
    error.textContent = "Passwords do not match";
  } else {
    error.textContent = "";
  }
}

