const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.parentElement.dataset.productId;
        let currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
        console.log(`Produto ${productId} adicionado ao carrinho.`);
    });
});