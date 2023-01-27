const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHam = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const asideDetail = document.querySelector(".product-detail-secondary");
const productDetailClose = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHam.addEventListener("click", toggleMobileMenu);
menuCart.addEventListener("click", toggleMenuCart);
productDetailClose.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu () {
    const isAsideCartClose = asideCart.classList.contains("inactive");
    const isAsideDetailClose = asideDetail.classList.contains("inactive");

    if ( !isAsideCartClose ) {
        asideCart.classList.add("inactive");
    }

    if ( !isAsideDetailClose ) {
        asideDetail.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isAsideCartClose = asideCart.classList.contains("inactive");
    const isAsideDetailClose = asideDetail.classList.contains("inactive");

    if ( !isAsideCartClose ) {
        asideCart.classList.add("inactive");
    }
    if ( !isAsideDetailClose ) {
        asideDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleMenuCart() {
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
    const isAsideDetailClose = asideDetail.classList.contains("inactive");

    if ( !isMobileMenuClose ) {
        mobileMenu.classList.add("inactive");
    }

    if ( !isDesktopMenuClose ) {
        desktopMenu.classList.add("inactive");
    }

    if ( !isAsideDetailClose ) {
        asideDetail.classList.add("inactive");
    }
    
    asideCart.classList.toggle("inactive");
}

function openProductDetailAside() {
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
    const isAsideCartClose = asideCart.classList.contains("inactive");

    if ( !isMobileMenuClose ) {
        mobileMenu.classList.add("inactive");
    }

    if ( !isDesktopMenuClose ) {
        desktopMenu.classList.add("inactive");
    }

    if ( !isAsideCartClose ) {
        asideCart.classList.add("inactive");
    }

    asideDetail.classList.remove("inactive");
}

function closeProductDetailAside() {
    asideDetail.classList.add("inactive");
}

const productsList = [];

productsList.push({name:"Bike", price: 120, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"});
productsList.push({name:"Bike", price: 120, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"});
productsList.push({name:"Bike", price: 120, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"});
productsList.push({name:"Bike", price: 120, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"});
productsList.push({name:"Bike", price: 120, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"});
productsList.push({name:"Bike", price: 120, img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"});

function productsRender ( arr ) {
    for( product of arr ) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
        productImg.addEventListener("click", openProductDetailAside)
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const price = document.createElement("p");
        price.innerText = "$" + product.price;

        const name = document.createElement("p");
        name.innerText = product.name;

        const productInfoFigure = document.createElement("figure");

        const productInfoCartAdd = document.createElement("img");
        productInfoCartAdd.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productInfoCartAdd);
        productInfoDiv.append(name,price);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(productImg,productInfo);

        cardsContainer.appendChild(productCard);
    }
};

productsRender(productsList);