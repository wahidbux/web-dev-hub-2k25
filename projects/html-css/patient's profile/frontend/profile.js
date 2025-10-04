const params = new URLSearchParams(window.location.search);
const patientId = params.get("patientId");

async function fetchPatient() {
  const res = await fetch(`http://localhost:5000/patients/${patientId}`);
  const p = await res.json();

  const div = document.getElementById("profile");
  div.innerHTML = `
    <h2>${p.name} (Age: ${p.age})</h2>
    <p>Weight: ${p.weight} kg | Height: ${p.height} cm</p>
    <h3>History</h3>
    <ul>${p.history.map(h => `<li>${h}</li>`).join("")}</ul>
    <h3>Doctor's Remark</h3>
    <p>${p.remarks}</p>
  `;

  // Chart
  const ctx = document.getElementById("healthChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      datasets: [
        { label: "Heart Rate", data: p.weeklyData.heartRate, borderColor: "red" },
        { label: "BP", data: p.weeklyData.bloodPressure, borderColor: "blue" },
        { label: "Oxygen", data: p.weeklyData.oxygen, borderColor: "green" },
        { label: "Glucose", data: p.weeklyData.glucose, borderColor: "orange" }
      ]
    }
  });
}

fetchPatient();
