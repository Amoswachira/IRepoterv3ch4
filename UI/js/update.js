// patch comment
const urll_comment =
  "https://irepoterv2final.herokuapp.com/api/v2/interventions/";
function updatecomment(item, urll_comment) {
  let comment = document.getElementById("comment").value;
  let old = document.getElementById("old").value;

  let token = localStorage.getItem("token");
  t = token;
  return fetch(urll_comment + item + "/comment", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + t,
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      comment: comment,
      old: old
    })
  })
    .then(response => response.json())
    .then(incidentsDataaa => {
      console.log(incidentsDataaa);
      if (incidentsDataaa.status == 200) {
        alert("Updated intervention's comment");
        window.location = "view-records.html";
      } else {
        alert(incidentsDataaa.message.comment);
        alert(incidentsDataaa.msg);
      }
    });
}
// patch location
const urll = "https://irepoterv2final.herokuapp.com/api/v2/interventions/";
function updateLocation(item, urll) {
  let location = document.getElementById("location").value;
  let current = document.getElementById("current").value;

  let token = localStorage.getItem("token");
  t = token;
  return fetch(urll + item + "/location", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + t,
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      location: location,
      current: current
    })
  })
    .then(response => response.json())
    .then(incidentsDataa => {
      console.log(incidentsDataa);
      if (incidentsDataa.status == 200) {
        alert("Updated intervention's location");
        window.location = "view-records.html";
      } else {
        alert(incidentsDataa.message.location);
        alert(incidentsDataa.msg);
      }
    });
}

// get all ids,location and comment
document.addEventListener("DOMContentLoaded", updatelc);

function updatelc() {
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
          let location = incidents[i].location;
          let comment = incidents[i].comment;
          let item = incidents[i].id;

          output += `
                <form  >
                <br>
                <input type="text" id="current"value=${location}>
                <input type="text" id="location" placeholder="Enter new location">
                <input type="button" onclick="updateLocation(${item},urll)" value="update This location">
                <textarea id="old">  ${comment} </textarea>  
                <input type="text" id="comment" placeholder="Enter new comment">
                <input type="button" onclick="updatecomment(${item},urll_comment)" value="update This comment">
                <br>
                </form>
                
        
             `;
        }

        document.getElementById("output").innerHTML = output;
      } else {
        alert(incidentsData.message);
        alert(incidentsData.msg);
      }
    });
}
