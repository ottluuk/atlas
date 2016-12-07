function filterList() {
    // Declare variables
    var input, filter, ul, div, li, a, i;
    input = document.getElementById('filterField'); // võiks tuletada div alt
    filter = input.value.toUpperCase();
    div = document.getElementById("speclist")
    ul = div.getElementsByTagName('ul');
    li = ul[0].getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
