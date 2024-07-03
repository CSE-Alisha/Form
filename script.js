document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    onSubmitHandler();
  });
});

function onSubmitHandler() {
  const name = document.getElementById("name").value;
  if (name.length < 5) {
    alert("Name should not be less than 5 chars long!");
    return;
  }

  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email!");
    return;
  }

  const phone = document.getElementById("number").value;
  if (phone === "1234567890" || phone.length !== 10) {
    alert("Please enter a valid phone number!");
    return;
  }

  const password = document.getElementById("password").value;
  if (password === "password") {
    alert('Password can not be "password"!');
    return;
  }
  if (password === name) {
    alert("Password can not be your name!");
    return;
  }
  if (password.length < 8) {
    alert("Password can not be less than 8 chars long!");
    return;
  }

  const confirmPassword = document.getElementById("confirm_password").value;
  if (password !== confirmPassword) {
    alert("Password and confirm password are not matching!");
    return;
  }

  const form = document.getElementById("form");
  form.style.display = "none";
  const success = document.getElementById("success");
  success.style.display = "block";

  return;
}
