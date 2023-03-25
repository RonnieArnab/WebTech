let searchFrom =  document.querySelector(".search-form") ;
document.querySelector("#search-btn").onclick = () => {
    searchFrom.classList.toggle('active') ;
}

let shoppingCart =  document.querySelector(".shopping-cart") ;
document.querySelector("#cart-shopping-btn").onclick = () => {
    shoppingCart.classList.toggle('active') ;
}