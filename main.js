const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHam = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHam.addEventListener("click", toggleMobileMenu);
menuCart.addEventListener("click", toggleMenuCart);

function toggleDesktopMenu () {
    const isAsideCartClose = asideCart.classList.contains("inactive");

    if ( !isAsideCartClose ) {
        asideCart.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isAsideCartClose = asideCart.classList.contains("inactive");

    if ( !isAsideCartClose ) {
        asideCart.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleMenuCart() {
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");

    if ( !isMobileMenuClose ) {
        mobileMenu.classList.add("inactive");
    }

    if ( !isDesktopMenuClose ) {
        desktopMenu.classList.add("inactive");
    }
    
    asideCart.classList.toggle("inactive");
}