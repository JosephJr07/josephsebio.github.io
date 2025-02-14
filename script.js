// Array to store products added to the cart
let cart = [];

// Function to add a product to the cart
function addToCart(button) {
  // Get the product information from the parent element of the clicked button
  const productDiv = button.parentElement;
  const productName = productDiv.getAttribute("data-name");
  const productPrice = parseFloat(productDiv.getAttribute("data-price"));

  // Add the product to the cart array
  cart.push({ name: productName, price: productPrice });

  // Update the cart display after adding the product
  updateCartDisplay();
}

// Function to update the shopping cart display on the webpage
function updateCartDisplay() {
  const cartDiv = document.getElementById("cart"); // Select the cart container element
  const totalPriceSpan = document.getElementById("total-price"); // Select the element displaying total price

  // Clear the current cart display before adding updated items
  cartDiv.innerHTML = "";

  // Variable to calculate total price of products in the cart
  let totalPrice = 0;

  // Loop through each item in the cart array
  cart.forEach((item) => {
    // Create a new div element to represent each product in the cart
    const cartItem = document.createElement("div");
    // Set the content of the cart item
    cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    // Append the cart item to the cart container in the HTML
    cartDiv.appendChild(cartItem);

    // Add the item's price to the total price
    totalPrice += item.price;
  });

  // Update the total price display in the HTML
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
