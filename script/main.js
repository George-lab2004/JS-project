
let email = document.getElementById("email");
let password = document.getElementById("pass");
let btn = document.getElementById("btn");
let inn = document.getElementById("in");
let up = document.getElementById("up"); 
let names = document.getElementById("name");
let btntwo= document.getElementById("btn2");
let error = document.getElementById("error");
let gmailError = document.getElementById("error1");
let passError = document.getElementById("error2");
let gmailErrortwo = document.getElementById("error3")
let truee = document.getElementById("sucess");
let errorlog = document.getElementById("error4");
let container =[];

if (localStorage.getItem('alldata')) {
  container = JSON.parse(localStorage.getItem('alldata'))
}




up.addEventListener('click', function()
 {
inn.classList.remove("d-none");
up.classList.add("d-none");
names.classList.remove("d-none");
btntwo.classList.remove("d-none");
btn.classList.add("d-none")

});
inn.addEventListener('click', function () {
  returns();

}
)
function returns() {
  inn.classList.add("d-none");
up.classList.remove("d-none");
names.classList.add("d-none");
btntwo.classList.add("d-none");
btn.classList.remove("d-none");
error.classList.replace("d-block", "d-none")
gmailError.classList.replace("d-block", "d-none")
passError.classList.replace("d-block", "d-none")
truee.classList.replace("d-block","d-none")

}



btntwo.addEventListener('click', function () {
  if (Validatename() && Validatgmail() && Validatpass()) {
    if (!isDuplicateEmail(email.value)) {
          let data = {
              Name: names.value,
              Gmail: email.value,
              pass: password.value
          };
          container.unshift(data);
          localStorage.setItem('alldata', JSON.stringify(container));
          gmailErrortwo.classList.replace("d-block", "d-none");
          sucess()
        }
      clear();
  }
});

btn.addEventListener('click', function () {
  if(check()){
    document.querySelector("#last").innerText = names.value;

  }
})




function clear() {
  names.value = ""
  email.value = ""
  pass.value=""
  
}
function sucess(){
  truee.classList.replace("d-none","d-block")
}


function Validatename() {
  var regex = /^[A-Z][a-z]{2,7}$/;
  if (regex.test(names.value)){
    error.classList.replace("d-block", "d-none")
  return true
  }
  else{
    error.classList.replace("d-none", "d-block")
    return false
  }
}
function Validatgmail() {
  var regex = /^[a-zA-Z0-9._%+-]+(@gmail\.com)$/ ;
  if (regex.test(email.value)){
    gmailError.classList.replace("d-block", "d-none")
  return true
  }
  else{
    gmailError.classList.replace("d-none", "d-block")
    return false
  }
}
function Validatpass(){
  var regex = /^(?=.*\W).{5,}/
  if (regex.test(password.value)){
    passError.classList.replace("d-block", "d-none")
  return true
  }
  else{
    passError.classList.replace("d-none", "d-block")
    return false
  }
}

function isDuplicateEmail(email) {
  for (let i = 0; i < container.length; i++) {
    if (container[i].Gmail === email) {
      gmailErrortwo.classList.replace("d-none", "d-block");
      return true; 
    }
  }
  return false; 
}
function check() {
  for (let i = 0; i < container.length; i++) {
    if (container[i].Gmail === email.value && container[i].pass == password.value) {
      window.location.href = "homepage.html"; 
      errorlog.classList.replace("d-block","d-none")

      return true; 
    } else{
      errorlog.classList.replace("d-none","d-block")
    }
  }
  return false; 
}