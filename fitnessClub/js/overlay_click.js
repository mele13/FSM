function first_click(tag, position) {
    var targets = document.getElementsByClassName(tag);
    var size = targets.length;

    for (i = 0; i < size; i++) {

        var target = targets[i];

        if (i != position) {
            target.style.display = "none";
        } else {
            if (target.style.display === "flex") {
                target.style.display = "none";
            } else {
                target.style.display = "flex";
            }
        }
    }
}