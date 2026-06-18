let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");

function renderCart(){

    container.innerHTML = "";

    // Empty cart check
    if(cart.length === 0){

        container.innerHTML =
        "<h2 style='text-align:center'>Your Cart is Empty 😔</h2>";

        document.getElementById("total").textContent = "";

        return;
    }

    let total = 0;

    cart.forEach((item,index)=>{

        total += Number(item.price);

        container.innerHTML += `
        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-details">
                <h3>${item.name}</h3>
                <p>Category: ${item.category}</p>
                <p>Price: ₹${item.price}</p>
            </div>

            <button class="remove-btn"
            onclick="removeItem(${index})">
            Remove
            </button>

        </div>
        `;
    });

    document.getElementById("total").textContent =
    "Total: ₹" + total;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();
}

renderCart();