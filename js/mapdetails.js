// Primitive arrow navigation
function leftArrowPressed() {
    var a;
    a = document.getElementById('prevLink')
    window.location.href = a.href;
}

function rightArrowPressed() {
    window.location.href = document.getElementById('nextLink').href;
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
    }
};

// Table filter

function filterTable() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("table_filter_input");
  filter = input.value.toUpperCase();
  table = document.getElementById("obs_table").getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function filterTable3() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("table_filter_input_3");
  filter = input.value.toUpperCase();
  table = document.getElementById("obs_table").getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function filterTablez() {
  // Declare variables 
  var input, filter, input3, filter3, table, tr, td, td3, i;
  input = document.getElementById("table_filter_input");
  filter = input.value.toUpperCase();
  input3 = document.getElementById("table_filter_input_3");
  filter3 = input3.value.toUpperCase();

  table = document.getElementById("obs_table").getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td3 = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1 && td3.innerHTML.toUpperCase().indexOf(filter3) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}



