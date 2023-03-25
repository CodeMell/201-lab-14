/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let clearBt = document.createElement('button');
  clearBt.innerHTML = `CLEAR TABLE`;
  clearBt.onclick = function () {
    localStorage.clear();
    location.reload();
  };
  document.getElementById('cart-container').append(clearBt);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


  for (let i = 0; i < state.cart.items.items.length; i++) {
    let trData = document.createElement('tr');
    // TODO: Create a TR
    let DelproductTD = document.createElement('td');
    // TODO: Create a TD for the delete link, quantity,  and the item
    DelproductTD.innerHTML = "X";
    trData.append(DelproductTD);

    // TODO: Iterate over the items in the cart
    let tdQuantity = document.createElement('td');
    tdQuantity.innerHTML = state.cart.items.items[i].quantity;
    trData.append(tdQuantity);

    let tdProductName = document.createElement('td');
    tdProductName.innerHTML = state.cart.items.items[i].product.name;
    trData.append(tdProductName);
    // TODO: Find the table body
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    document.getElementById('cart').append(trData);
  }


}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
