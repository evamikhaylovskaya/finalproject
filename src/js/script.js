window.addEventListener("scroll", onScrollHandler);

function onScrollHandler(e) {
    console.log()
    const header = document.getElementById("header");
    if (window.scrollY > 150) {
        if (!header.classList.contains("scrolled")) {
            header.classList.add("scrolled");
        }
    } else {
        if (header.classList.contains("scrolled")) {
            header.classList.remove("scrolled");
        }
    }
}

document.addEventListener("click", onClickOpenMobileMenuHandler);

function onClickOpenMobileMenuHandler(e) {
    console.log(e.target);
    const burger = e.target;
    const mobileMenu = document.getElementById("mobile-menu");
    console.log(["mobile-menu-button", "close-button"].includes(burger.id), burger.id)
    if (!["mobile-menu-button", "close-button"].includes(burger.id)) {
        return;
    }
    mobileMenu.classList.toggle("opened");
}
