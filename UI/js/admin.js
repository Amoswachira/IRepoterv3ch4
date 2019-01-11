document.getElementById("Login").addEventListener("submit", Login);

function Login(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  fetch("https://irepoterv2final.herokuapp.com/api/v2/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json"
    },
    body: JSON.stringify({ username: username, password: password })
  })
    .then(res => res.json())
    .then(loginData => {
      console.log(loginData);
      if (loginData.status == 200) {
        let user = document.getElementById("username").value;
        localStorage.setItem("user", user);
        let token = loginData.data[0].token;
        localStorage.setItem("token", token);
        alert("login succeful");
        window.location = "admin-area.html";
      } else {
        alert(loginData.message);
      }
    });
}
