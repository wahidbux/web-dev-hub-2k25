function searchDoctors() {
  const location = document.getElementById("location").value;
  const specialty = document.getElementById("specialty").value;
  window.location.href = `doctors.html?location=${location}&specialty=${specialty}`;
}
