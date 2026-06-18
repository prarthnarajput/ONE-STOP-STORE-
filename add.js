
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navlinks");
const icon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x-lg");
    } else {
        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-list");
    }
});


const categorybtns = document.getElementById('category-btns');

let category = ['all', ...new Set(products.map(p => p.category))];

function rendercategorybtn() {
    category.forEach(cat => {
        let btn = document.createElement('button');
        btn.dataset.category = cat;
        btn.textContent = cat;

        if (cat == 'all') btn.classList.add('active');

        btn.addEventListener('click', (e) => {
            document.querySelectorAll('#category-btns button').forEach(btn => btn.classList.remove('active'))
            e.target.classList.add('active');
            filtercategory(cat);
        })
        categorybtns.appendChild(btn);
    })
}

function filtercategory(category) {
    let filtercategory = category == 'all' ? products : products.filter(c => c.category == category);
    renderproduct(filtercategory)
}



function renderproduct(list = products) {
    const productcontainer = document.getElementById('product-container');
    productcontainer.innerHTML = '';
    list.forEach(product => {
        let productcard = document.createElement('div');
        productcard.classList.add('productcard');

        productcard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><b>price:</b>${product.price}</p>
        <div class="bottom">
            <p><b>category:</b>${product.category}</p>
            <div class="btn">
                <button onclick="openproduct(${product.id})">view more</button>
                <button class="cart"onclick="addToCart(${product.id})">ADD TO CART
                  </button>
           </div>
      `;

        productcontainer.appendChild(productcard)
    })
}

function openproduct(id) {
    window.location.href = `product_detail.html?id=${id}`;
}

renderproduct();
rendercategorybtn();


