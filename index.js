let searchFrom =  document.querySelector(".search-form") ;
let shoppingCart =  document.querySelector(".shopping-cart") ;
let loginFrom =  document.querySelector(".login-from") ;
let navbar =  document.querySelector(".navbar") ;
document.querySelector("#search-btn").onclick = () => {
    searchFrom.classList.toggle('active') ;
    shoppingCart.classList.remove('active') ;
    loginFrom.classList.remove('active') ;
    navbar.classList.remove('active') ;
}


document.querySelector("#cart-shopping-btn").onclick = () => {
    searchFrom.classList.remove('active') ;
    shoppingCart.classList.toggle('active') ;
    loginFrom.classList.remove('active') ;
    navbar.classList.remove('active') ;
}


document.querySelector("#user-btn").onclick = () => {
    searchFrom.classList.remove('active') ;
    shoppingCart.classList.remove('active') ;
    loginFrom.classList.toggle('active') ;
    navbar.classList.remove('active') ;
}

document.querySelector("#menu-btn").onclick = () => {
    searchFrom.classList.remove('active') ;
    shoppingCart.classList.remove('active') ;
    loginFrom.classList.remove('active') ;
    navbar.classList.toggle('active') ;
}

window.onscroll = () =>{
    searchFrom.classList.remove('active') ;
    shoppingCart.classList.remove('active') ;
    loginFrom.classList.remove('active') ;
    navbar.classList.remove('active') ;

}



