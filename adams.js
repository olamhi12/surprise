function Load() {
  let Email = document.getElementsByClassName("mail");
  let Error = document.getElementById("Error");

  if (Email.Value === "") {
    alert("hey dear plas fill in ur email");
  } else {
    Error.innerText("incorrect email");
  }
}
