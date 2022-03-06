var myIndex = 0;

function art_slider() {
    var i;
    var x = document.getElementsByClassName("ArticleSlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "flex";  
    setTimeout(ach_slider, 3500); // Change image every 3.5 seconds
  }