const form = document.querySelector("#form");
const name = document.querySelector("#name");
const name2 = document.querySelector("#name2");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");

const btnsubmit = document.querySelector("#btnsubmit");
const btnreset = document.querySelector("#btnreset");

// alert("welcome!");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const namevalue = name.value.trim();
  const emailvalue = email.value.trim();
  const phonevalue = phone.value.trim();
  const passwordvalue = password.value.trim();
  const repasswordvalue = repassword.value.trim();

  // name :-
  if (namevalue === "") {
    e.preventDefault();
    alert("plaese enter your name!");
    name.focus();
    return false;
  }

  if (!isNaN(namevalue)) {
    e.preventDefault();
    alert("plaese enter your valid name!");
    name.focus();
    return false;
  }

  // email:-
  if (emailvalue === "") {
    alert("plaese enter your email !");
    name.focus();
    return false;
  }

  // phone :-
  if (phonevalue === "") {
    alert("plaese enter your mobile number!");
    name.focus();
    return false;
  }

  if (phonevalue.length < 10 || phonevalue.length > 10) {
    alert("plaese enter your valid mobile number!");
    name.focus();
    return false;
  }

  //password
  if (passwordvalue === "") {
    alert("plaese enter your password!");
    name.focus();
    return false;
  }

  if (passwordvalue.length < 5 || passwordvalue.length > 10) {
    alert("plaese enter valid password!");
    name.focus();
    return false;
  }

  if (repasswordvalue != passwordvalue) {
    alert("enter curect same pasword");
    return false;
  }

  if (passwordvalue === repasswordvalue) {
    alert("successfully registered");
    var g = localStorage.setItem(
      "email",
      JSON.stringify({ emailvalue, passwordvalue })
    );

    g;

    window.location.href = "login.html";

    return false;
  }
});
