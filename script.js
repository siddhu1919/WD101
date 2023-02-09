
  function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var dob = document.forms["myForm"]["dob"].value;
    
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    if (age < 18 || age > 55) {
      alert("Age must be between 18 and 55");
      return false;
    }
    
    var agreement = document.forms["myForm"]["agreement"].checked;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    if (dob == "") {
      alert("Date of birth must be filled out");
      return false;
    }
    if (!agreement) {
      alert("You must agree to the terms and conditions");
      return false;
    }

    document.getElementById("name").innerHTML = document.forms["myForm"]["name"].value;
    document.getElementById("email").innerHTML = document.forms["myForm"]["email"].value;
    document.getElementById("password").innerHTML = document.forms["myForm"]["password"].value;
    document.getElementById("dob").innerHTML = document.forms["myForm"]["dob"].value;
    
    
    return false;
  }

