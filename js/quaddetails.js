// Species table filter

function filterSpeciesTable() {
  // Declare variables 
  var input, filter, table, tr, a, i;
  input = document.getElementById("species_table_filter_input");
  filter = input.value.toUpperCase();
  table = document.getElementById("species_table").getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    a = tr[i].getElementsByTagName("td")[0];
    if (a) {
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}




