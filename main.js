let showingMobileMenu = false;

document.getElementById("menu_button").addEventListener("click", () => {
    if (showingMobileMenu)
        document.getElementById("mobile_nav").classList.add("hide");
    else
        document.getElementById("mobile_nav").classList.remove("hide");

    showingMobileMenu = !showingMobileMenu;
})

