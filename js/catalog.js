/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);
const selectElement = document.getElementById('items');
// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  
  for (let i in state.allProducts) {
    let product = document.createElement('option');
    product.value = state.allProducts[i].name;
    product.label = state.allProducts[i].name;
    selectElement.appendChild(product)
  }


}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let x = selectElement.selectedIndex;
  let sItem = state.allProducts[x];
  if(sItem) {
    // TODO: get the quantity
    const itemQuantity = document.getElementById('quantity').value;
    // TODO: using those, add one item to the Cart
    let inCart = new CartItem(sItem,itemQuantity);
    state.cart.items.push(inCart);
  }
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let x = selectElement.selectedIndex;
  let addedItem = state.cart.items[x].product.name;
  console.log(addedItem);
  let quantityOfItem = state.cart.items[x].quantity;
  if(addedItem && quantityOfItem){

    // TODO: Add a new element to the cartContents div with that information
    let cartContainer = document.querySelector('#cartContents');
    let cartPreview = document.createElement("p");
    cartPreview.innerHTML = `added ${quantityOfItem} of ${addedItem}`;
    cartContainer.append(cartPreview);
  }
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
