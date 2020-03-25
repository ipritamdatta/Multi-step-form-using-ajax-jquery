var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block"; //1,2,3...

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  //   console.log("x.length: " + (x.length - 1)); //total length of tab which is 4. so
  //  tab's length - 1 = 4-1 = 3
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  fixStepIndicator(n); //1,2,3..
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  // currentTab = 0,1...
  //   console.log(n);

  if (n == 1 && !validateForm()) {
    return false;
  } else {
    x[currentTab].style.display = "none"; //x[currentTab] = 0,1,2...
    currentTab = currentTab + n; //1,2,3...
    if (currentTab >= x.length) {
      document.getElementById("regForm").addEventListener("click", postName);
      return false;
    }
  }
  showTab(currentTab); //1,2,3...
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  //   console.log(n); //0,1,2..
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  x[n].className += " active";
}

// Ajax part
// document.getElementById("regForm").addEventListener("submit", postName);

function postName(e) {
  e.preventDefault();
  //fname, lname,email,phone,dd,nn,yyyy,uname,pword
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dd = document.getElementById("dd").value;
  var nn = document.getElementById("nn").value;
  var yyyy = document.getElementById("yyyy").value;
  var uname = document.getElementById("uname").value;
  var pword = document.getElementById("pword").value;
  var params =
    "fname=" +
    fname +
    "&lname=" +
    lname +
    "&email=" +
    email +
    "&phone=" +
    phone +
    "&dd=" +
    dd +
    "&nn=" +
    nn +
    "&yyyy=" +
    yyyy +
    "&uname=" +
    uname +
    "&pword=" +
    pword;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "process.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function() {
    window.location.href = "http://localhost/multistepformcounter/";
    console.log(this.responseText);
  };

  xhr.send(params);
}

// show users data
document.getElementById("button").addEventListener("click", loadUsers);

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "users.php", true);

  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);

      var output = "";
      //fname, lname,email,phone,dd,nn,yyyy,uname,pword
      for (var i in users) {
        output +=
          "<ul>" +
          "<li>ID: " +
          users[i].id +
          "</li>" +
          "<li>First Name: " +
          users[i].fname +
          "</li>" +
          "<li>Last Name: " +
          users[i].lname +
          "</li>" +
          "<li>Email: " +
          users[i].email +
          "</li>" +
          "<li>Phone: " +
          users[i].phone +
          "</li>" +
          "<li>Email: " +
          users[i].email +
          "</li>" +
          "<li>Username: " +
          users[i].uname +
          "</li>" +
          "</ul>";
      }
      document.getElementById("responsecontainer").innerHTML = output;
    }
  };

  xhr.send();
}
