function validate() {
  var name = document.f1.name.value;
  var passwordlength = document.f1.password.value.length;
  var status = false;
  if (name == "") {
    document.getElementById("namelocation").innerHTML =
      '<p class="red">Please enter your name</p>';
    status = false;
  } else {
    status = true;
  }

  if (passwordlength <= 8) {
    window.alert("password must me more than 8 characters");
    status = false;
  }
  return status;
}
