var menuOn = false;

function on(x) {
    if (!menuOn) {
        x.classList.toggle("change");
        document.getElementById("overlay").style.height = "100%";
        menuOn = true;
    } else
        off(x);
}

function off(x) {
    x.classList.toggle("change");
    document.getElementById("overlay").style.height = "0%";
    menuOn = false;
}