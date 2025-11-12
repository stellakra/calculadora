let quantity = 1;
const unitPrice = 799;

//dom
const quantityDisplay = document.getElementById('cantidad');
const totalPriceDisplay = document.getElementById('total-precio');
const decreaseBtn = document.getElementById('menos-btn');
const increaseBtn = document.getElementById('mas-btn'); 
const addToCartBtn = document.getElementById('add-to-cart');
const buyNowBtn = document.getElementById('comprar-ahora');

//inicio app
document.addEventListener('DOMContentLoaded', function () {
    // Configurar eventos
    setupEventListeners();
    //calcula/muestra total inicial
    updateTotalPrice();
});

//eventos listeners
function setupEventListeners() {
    //btn cantidad
    decreaseBtn.addEventListener('click', decreaseQuantity);
    increaseBtn.addEventListener('click', increaseQuantity);
    
    //botones de accion 
    addToCartBtn.addEventListener('click', addToCart); 
    buyNowBtn.addEventListener('click', buyNow);
}

//disminuir cantidad
function decreaseQuantity() {
    if (quantity > 1) { 
        quantity--;
        updateQuantityDisplay();
        updateTotalPrice();
    }
}
//aumentar
function increaseQuantity() {
    quantity++;
    updateQuantityDisplay();
    updateTotalPrice();
}
//actualizar cantidad
function updateQuantityDisplay() {
    quantityDisplay.textContent = quantity;
}
//actualiza el precio total
function updateTotalPrice() {
    const totalPrice = unitPrice * quantity;
    totalPriceDisplay.textContent = `$${totalPrice}USD`; 
}
// Agregar al carrito
function addToCart() { // Corregido: era 'addTocart'
    const totalPrice = unitPrice * quantity;
    alert(`.𖥔 ݁ ˖๋ ࣭ ⭑𝙰𝚐𝚛𝚎𝚐𝚊𝚍𝚘 𝚊𝚕 𝚌𝚊𝚛𝚛𝚒𝚝𝚘.ᐟ.ᐟ`);
}
// Comprar ahora
function buyNow() {
    const totalPrice = unitPrice * quantity;
    alert(`.𖥔 ݁ ˖๋ ࣭ ⭑𝙲𝚘𝚖𝚙𝚛𝚊 𝚛𝚎𝚊𝚕𝚒𝚣𝚊𝚍𝚊.ᐟ.ᐟ`);
}