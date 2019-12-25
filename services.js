function toggleNav() {
    var stat = document.getElementById("mobile_menu").style.height;
if (stat ==  "70%") {
    closeNav();
} else {
    openNav();
}
}

function openNav() {
    document.getElementById("mobile_menu").style.height = "70%";
}

function closeNav() {
    document.getElementById("mobile_menu").style.height = "0";
}
