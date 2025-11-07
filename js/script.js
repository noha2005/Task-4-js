// ======== Variables ========
var stationery = document.querySelectorAll("#stationery li");
var bags = document.querySelectorAll("#bags li");
var art = document.querySelectorAll("#art li");
var cart = document.getElementById("cart");
var clear = document.getElementById("clear");
var checkout = document.getElementById("checkout");
var search = document.getElementById("search");
var total = 0;
var categories = document.querySelectorAll("#categories li");

// ======== Add Items to Cart ========
function addToCart(item) {
    cart.innerHTML += item.innerHTML + "<hr>";
    let price = +item.getAttribute("price");
    total += price;
    console.log(`Added item: ${price} EGP | Total: ${total} EGP`);
}

stationery.forEach(function(item) {
    item.addEventListener('click', () => addToCart(item));
});
bags.forEach(function(item) {
    item.addEventListener('click', () => addToCart(item));
});
art.forEach(function(item) {
    item.addEventListener('click', () => addToCart(item));
});

// ======== Clear Cart ========
clear.addEventListener("click", () => {
    cart.innerHTML = "<p>Your list</p>";
    total = 0;
    console.clear();
    alert("🧹 Your cart has been cleared!");
});

// ======== Checkout ========
checkout.addEventListener("click", () => {
    if (total === 0) {
        alert("Your cart is empty! 🛒");
        return;
    }

    if (total > 1000) {
        alert("🎉 Your order exceeds 1000 EGP, you get a FREE notebook!");
        console.log(`Total before bonus: ${total} EGP`);
    } else {
        alert(`🧾 Total: ${total} EGP`);
    }

    console.log("Checkout complete.");
});

// ======== Search Filter ========
search.addEventListener("input", () => {
    var text = search.value.toLowerCase();

    categories.forEach(function(item) {
        var name = item.textContent.toLowerCase();

        if (name.includes(text)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});

