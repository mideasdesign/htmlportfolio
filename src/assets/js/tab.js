function openProject(projectName) {
  let i;
  let p = document.getElementsByClassName("project");
  for (i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
    document.getElementById(projectName).style.display = "block";
  
}
function burgermenu() {
    const menu = document.getElementById("togglemenu");
    const burger = document.querySelector(".burger");

    menu.classList.toggle("active");
    burger.classList.toggle("active");

    
    if (menu.classList.contains("active")) {
        menu.classList.remove("hidden");
    } else {
        setTimeout(() => menu.classList.add("hidden"), 125); 
    }
}
/* function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
} */