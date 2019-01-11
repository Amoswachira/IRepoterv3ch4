document.getElementById("signup").addEventListener("submit", signup);

function signup(e) {
  e.preventDefault();

  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let username = document.getElementById("usernamee").value;
  let password = document.getElementById("passwordd").value;
  let email = document.getElementById("email").value;
  let othername = document.getElementById("othername").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  fetch("https://irepoterv2final.herokuapp.com/api/v2/auth/signup", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      email: email,
      othername: othername,
      phoneNumber: phoneNumber
    })
  })
    .then(res => res.json())
    .then(signupData => {
      console.log(signupData);
      if (signupData.status == 201) {
        let user = document.getElementById("username").value;
        localStorage.setItem("user", user);
        let token = signupData.data[0].token;
        localStorage.setItem("token", token);
        alert("user registered  successfully");
        window.location = "user-profile.html";
      } else {
        alert(signupData.message);
      }
    });
}
