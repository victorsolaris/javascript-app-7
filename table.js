var data = [
    ["John Doe", "25", "Developer"],
    ["Jane Smith", "30", "Designer"],
    ["David Johnson", "28", "Engineer"],
    ["Emily Davis", "32", "Teacher"],
    ["Michael Brown", "29", "Accountant"],
    ["Sophia Wilson", "27", "Writer"],
    ["Daniel Anderson", "31", "Doctor"],
    ["Olivia Martinez", "26", "Marketing Manager"],
    ["Jacob Thompson", "33", "Sales Representative"],
    ["Mia Taylor", "24", "Student"]
  ];
  
  var table = document.getElementById("myTable");
  
  for (var i = 0; i < data.length; i++) {
    var row = table.insertRow();
    for (var j = 0; j < data[i].length; j++) {
      var cell = row.insertCell();
      cell.innerHTML = data[i][j];
    }
  }

  var form = document.getElementById("myForm");  

  function addRow() {
    var name = document.getElementById("nameInput").value;
    var age = document.getElementById("ageInput").value;
    var occupation = document.getElementById("occupationInput").value;
  
    if (name && age && occupation) {
      var newRow = table.insertRow();
      var cell1 = newRow.insertCell();
      var cell2 = newRow.insertCell();
      var cell3 = newRow.insertCell();
      cell1.innerHTML = name;
      cell2.innerHTML = age;
      cell3.innerHTML = occupation;
  
      // Clear input fields after adding a row
      document.getElementById("nameInput").value = "";
      document.getElementById("ageInput").value = "";
      document.getElementById("occupationInput").value = "";
    }
  }
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    addRow();
  });