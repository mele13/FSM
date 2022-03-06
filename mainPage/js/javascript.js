function showOrHideMenu() {

    navigation_bar = document.getElementById("navigation-bar");
    burger_icon = document.getElementById("burger-icon");
    menu = document.getElementById("menu-level-1");
    logo = document.getElementsByClassName("logo")[0];
    homeButton = document.getElementsByClassName("home")[0];
    logInButton = document.getElementsByClassName("logIn")[0];

    if (menu.style.display === "") {
        menu.style.display = "block";
        navigation_bar.style.backgroundColor = "#121212";
        logo.style.zIndex = 0;
        homeButton.style.zIndex = 0;
        logInButton.style.zIndex = 0;
        burger_icon.style.backgroundColor = "transparent";

    } else { // Display block
        menu.style.display = "";
        navigation_bar.style.backgroundColor = "transparent";
        logo.style.zIndex = 200;
        homeButton.style.zIndex = 200;
        logInButton.style.zIndex = 200;
        burger_icon.style.backgroundColor = "transparent";
    }
}