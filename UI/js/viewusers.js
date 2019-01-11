// getall
document.getElementById("users").addEventListener("click", users);

function users() {
  let token = localStorage.getItem("token");
  t = token;
  fetch("https://irepoterv2final.herokuapp.com/api/v2/users", {
    headers: {
      Authorization: "Bearer " + t,
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(incidentsData => {
      console.log(incidentsData);
      if (incidentsData.status == 200) {
        let incidents = incidentsData.data;
        for (var i = 0; i < incidents.length; i++) {
          let id = incidents[i].id;
          let email = incidents[i].email;
          let username = incidents[i].username;
          let phonenumber = incidents[i].phonenumber;
          let registered = incidents[i].registered;

          output += `
           <tr>
                <th>${id}</th>
                <th>${email}</th>
                <th>${username}</th>
                <th>${phonenumber}</th>
                <th>${registered}</th>
            </tr>
             `;
        }

        document.getElementById("output").innerHTML = output;
      } else {
        alert(incidentsData.message);
        alert(incidentsData.msg);
      }
    });
}
