// getall
document.getElementById("adminviewall").addEventListener("click", adminviewall);

function adminviewall() {
  let token = localStorage.getItem("token");
  t = token;
  fetch("https://irepoterv2final.herokuapp.com/api/v2/Incidents", {
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
                <td><input type="submit" value="RESOLVE"></td>
                <td><input type="submit" value="UNDER INVESTIGATION"></td>
                <td><input type="submit" value="REJECT"></td>
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
