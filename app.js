
for (let index = 1; index <= 8; index++) {
    window['myFunction' + index] = function(evt, menu) {
        if (document.getElementById(menu).style.display === "none") {
            document.getElementById(menu).style.display = 'block';
        } else document.getElementById(menu).style.display = 'none';
    }
}
window["menuDropdown" +i]= function() {
  
    let arrowRotate = document.getElementById("arrow-rotate-"+i);
    if (arrowRotate.className === "arrow-"+i) {
        arrowRotate.className += " responsive";
    } else {
        arrowRotate.className = "arrow-"+i;
    }
}