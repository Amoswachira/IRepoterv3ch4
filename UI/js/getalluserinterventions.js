// getall
document
  .getElementById("getallUserincidents")
  .addEventListener("click", getallUserincidents);

function getallUserincidents() {
  let token = localStorage.getItem("token");
  t = token;
  fetch("https://irepoterv2final.herokuapp.com/api/v2/interventions", {
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
          let createdby = incidents[i].createdby;
          let createdon = incidents[i].createdon;
          let status = incidents[i].status;
          let type = incidents[i].type;
          let comment = incidents[i].comment;

          output += `
           <tr>
                <th>${id}</th>
                <th>${createdby}</th>
                <th>${createdon}</th>
                <th>${status}</th>
                <th>${type}</th>
                <th>${comment}</th>
                <td><a href="edit-records.html"><button>EDIT</button></a></td>
                <td><input type="submit" value="DELETE"></td>
             </tr>
             `;
        }

        document.getElementById("output").innerHTML = output;
      } else {
        alert(incidentsData.message);
        alert(incidentsData.msg);
        window.location = "user-profile.html";
      }
    });
}
