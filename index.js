let searchFrom =  document.querySelector(".search-form") ;
let shoppingCart =  document.querySelector(".shopping-cart") ;
let loginFrom =  document.querySelector(".login-from") ;
document.querySelector("#search-btn").onclick = () => {
    searchFrom.classList.toggle('active') ;
}


document.querySelector("#cart-shopping-btn").onclick = () => {
    shoppingCart.classList.toggle('active') ;
}


document.querySelector("#user-btn").onclick = () => {
    loginFrom.classList.toggle('active') ;
}