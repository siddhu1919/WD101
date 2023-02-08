document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const terms = document.getElementById("terms").checked;

  if (!name) {
    alert("Name is required");
    return;
  }

  if (!email) {
    alert("Email is required");
    return;
  }

  if (!password) {
    alert("Password is required");
    return;
  }

  if (!dob) {
    alert("DOB is required");
    return;
  }

  if (!terms) {
    alert("Accept terms and conditions to proceed");
    return;
  }

  const dobTime = new Date(dob).getTime();
  const currentTime = new Date().getTime();
  const age = (currentTime - dobTime) / (1000 * 3600 * 24 * 365);

  if (age < 18 || age > 55) {
    alert("Age should be between 18 and 55");
    return;
  }

  const tableRow = `
    <tr>
      <td>${name}</td>
      <td>${email}</td>
      <td>${password}</td>
      <td>${dob}</td>
    </tr>
  `;

  document.getElementById("table-body").innerHTML += tableRow;
});
