const password = document.querySelector("#psw")
const confirmPassword = document.querySelector("#confirm-psw")
let incc = document.querySelector(".confirm-psw")
let incorect = document.querySelector(".incorrect-psw")
const pswValue =password.addEventListener("input", validate1)
const confirmPsw = confirmPassword.addEventListener("input", validate2)
let store;
function validate1(e){
 store = pswValue;

}

function validate2(e) {
    if (store != confirmPassword) {
         
        incorect.textContent = "password dosen't match"
        console.log("Incorect Password")
    } else if(store == confirmPassword){
       let del = document.querySelector("h6").removeChild()
    }
}