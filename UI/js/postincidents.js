document
  .getElementById("postincident")
  .addEventListener("submit", postincident);

function postincident(e) {
  e.preventDefault();

  let type = document.getElementById("type").value;
  let location = document.getElementById("location").value;
  let Images = document.getElementById("Images").value;
  let Videos = document.getElementById("Videos").value;
  let comment = document.getElementById("comment").value;

  let token = localStorage.getItem("token");
  t = token;
  fetch("https://irepoterv2final.herokuapp.com/api/v2/interventions", {
    method: "POST",
    body: JSON.stringify({
      type: type,
      location: location,
      Images: Images,
      Videos: Videos,
      comment: comment
    }),
    headers: {
      Authorization: "Bearer " + t,
      "Content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(incidentData => {
      if (incidentData.status == 201) {
        alert("record Posted  successfully");
        window.location = "view-records.html";
      } else {
        alert(incidentData.message);
        alert(incidentData.msg);
      }
    });
}
