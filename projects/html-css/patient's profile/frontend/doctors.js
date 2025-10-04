const params = new URLSearchParams(window.location.search);
const location = params.get("location");
const specialty = params.get("specialty");

async function fetchDoctors() {
  const res = await fetch(`http://localhost:5000/doctors?location=${location}&specialty=${specialty}`);
  const doctors = await res.json();

  const list = document.getElementById("doctor-list");
  list.innerHTML = "";

  doctors.forEach(doc => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${doc.image}" alt="${doc.name}">
      <h3>${doc.name}</h3>
      <p>${doc.specialty}</p>
      <p>${doc.location}</p>
      <p>${doc.experience} yrs exp • ⭐ ${doc.rating}</p>
      <button onclick="selectDoctor(${doc.id})">View Profile</button>
    `;
    list.appendChild(div);
  });
}

function selectDoctor(id) {
  // Example: always redirecting to same patient profile for demo
  window.location.href = `profile.html?patientId=101&doctorId=${id}`;
}

fetchDoctors();
