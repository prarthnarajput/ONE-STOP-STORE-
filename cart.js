let cart = JSON.parse(localStorage.getItem("cart")) || [];

// count update
function updateCartCount(){

    const count = document.getElementById("cart-count");

    if(count){
        count.textContent = cart.length;
    }
}

// add item
function addToCart(id){

    const product = products.find(p => p.id === id);

    if(!product) return;

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(product.name + " added to cart!");
}

updateCartCount();