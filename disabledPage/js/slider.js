var myIndex = 0;

function ach_slider() {
    var i;
    var x = document.getElementsByClassName("AchSlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(ach_slider, 35000); // Change image every 3.5 seconds
}