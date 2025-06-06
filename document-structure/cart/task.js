const products = document.querySelector('.products');
const buttons = document.querySelectorAll('.product__add');
const shoppingBasket = document.querySelector('.cart__products');
const cartTitle = document.querySelector('.cart__title');
const clearCartButton = document.querySelector('.clear-cart-btn');

products.addEventListener('click', e => {
    let target = e.target;

    if (target.classList.contains("product__quantity-control_dec")) {
        if (target.nextElementSibling.textContent != 1) {
            target.nextElementSibling.textContent--;
        }
    }

    if (target.classList.contains("product__quantity-control_inc")) {
        target.previousElementSibling.textContent++;
    }
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let product = button.closest('.product');
        let productId = product.dataset.id;
        let productSrc = product.querySelector('img').getAttribute('src');
        let productCounter = parseInt(product.querySelector('.product__quantity-value').textContent);
        let cartProduct = shoppingBasket.querySelector(`.cart__product[data-id="${productId}"]`);
        let titleIsShowed = false;

        clearCartButton.style.display = '';
        cartTitle.style.display = '';

        if (!titleIsShowed) {
            showClearCartButton();
            cartTitle.classList.add('cart__title-active');
            titleIsShowed = true;
        }

        if (!cartProduct) {
            shoppingBasket.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${productSrc}">
                <div class="cart__product-count">${productCounter}</div>
            </div>`);
        } 

		let currentCount = parseInt(cartProduct.querySelector('.cart__product-count').textContent, 10);
        cartProduct.querySelector('.cart__product-count').textContent = currentCount + productCounter;
    });
});

function showClearCartButton() {
    clearCartButton.classList.add('clear-cart-btn-active');
}

clearCartButton.addEventListener('click', () => {
    shoppingBasket.innerHTML = '';
    clearCartButton.style.display = 'none';
    cartTitle.style.display = 'none';
});