function openProject(projectName) {
  let i;
  let p = document.getElementsByClassName("project");
  for (i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
    document.getElementById(projectName).style.display = "block";
  
}
/* function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
} */