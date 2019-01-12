// under investigation
const url_under = "https://irepoterv2final.herokuapp.com/api/v2/redflag/";

function Adminunderinvestigation(item, url_under) {
  let token = localStorage.getItem("token");
  t = token;
  return fetch(url_under + item + "/status", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + t,
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      type: "Redflag",
      status: "under investigation"
    })
  })
    .then(response => response.json())
    .then(incidentsData => {
      console.log(incidentsData);
      if (incidentsData.status == 200) {
        alert("Updated redflag record status");
        window.location = "view-all-users.html";
      } else {
        alert(incidentsData.message);
        alert(incidentsData.msg);
      }
    });
}
// Rejected
const url_rej = "https://irepoterv2final.herokuapp.com/api/v2/redflag/";

function AdminRejected(item, url_rej) {
  let token = localStorage.getItem("token");
  t = token;
  return fetch(url_rej + item + "/status", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + t,
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      type: "Redflag",
      status: "rejected"
    })
  })
    .then(response => response.json())
    .then(incidentsData => {
      console.log(incidentsData);
      if (incidentsData.status == 200) {
        alert("Updated redflag record status");
        window.location = "view-all-users.html";
      } else {
        alert(incidentsData.message);
        alert(incidentsData.msg);
      }
    });
}
// resolve
const urll = "https://irepoterv2final.herokuapp.com/api/v2/redflag/";

function Adminresolv(item, urll) {
  let token = localStorage.getItem("token");
  t = token;
  return fetch(urll + item + "/status", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + t,
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      type: "Redflag",
      status: "resolved"
    })
  })
    .then(response => response.json())
    .then(incidentsData => {
      console.log(incidentsData);
      if (incidentsData.status == 200) {
        alert("Updated redflag record status");
        window.location = "view-all-users.html";
      } else {
        alert(incidentsData.message);
        alert(incidentsData.msg);
      }
    });
}
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
          let status = incidents[i].status;
          let type = incidents[i].type;
          let comment = incidents[i].comment;
          let item = incidents[i].id;

          output += `
           <tr>
                <th>${id}</th>
                <th>${createdby}</th>
                <th>${status}</th>
                <th>${type}</th>
                <th>${comment}</th>
                <td><button onclick="Adminresolv(${item},urll)">RESOLVE</button></td>
                <td><button class="button2" onclick="Adminunderinvestigation(${item},url_under)">UNDER INVESTIGATION</button></td>
                <td><button class="button1" onclick="AdminRejected(${item},url_rej)">REJECT</button></td>
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
