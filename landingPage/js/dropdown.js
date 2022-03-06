function showOrHideMenu() {

    navigation_bar = document.getElementById("navigation-bar");
    burger_icon = document.getElementById("burger-icon");
    menu = document.getElementById("menu-level-1");
    
    if (menu.style.display === "") {
        menu.style.display = "block";
        navigation_bar.style.backgroundColor = "#121212";
        burger_icon.style.backgroundColor = "transparent";
    } else { // Display block
        menu.style.display = "";
        navigation_bar.style.backgroundColor = "transparent";
        burger_icon.style.backgroundColor = "transparent";
    }
}