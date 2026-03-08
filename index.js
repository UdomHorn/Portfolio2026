

var showmenu = document.querySelector(".nav-bar-mobile");
var bar = document.querySelector(".bar");
var x = document.querySelector(".x");
function Showmenu() {
  if (window.innerWidth < 768) {
    showmenu.style.display = "block";
    bar.style.display = "none";
    x.style.display = "block";
  }
}

function Hidemenu() {
  if (window.innerWidth < 768) {
    showmenu.style.display = "none";
    bar.style.display = "block";
    x.style.display = "none";
  }
}

// Filter --------------------------------------

const searchBox = document.getElementById("searchBox");
const filters = document.querySelectorAll(".filter");

searchBox.addEventListener("keyup", function () {

  const searchText = searchBox.value.toLowerCase();

  filters.forEach(function(filter){

    const filterName = filter.querySelector("h1").textContent.toLowerCase();

    if(filterName.includes(searchText)){
      filter.style.display = "block";
    }else{
      filter.style.display = "none";
    }

  });

});

