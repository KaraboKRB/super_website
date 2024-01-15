function updateCartTotal() {
    var rows = document.querySelectorAll('#cart tbody tr');
    var subtotal = 0;

    rows.forEach(function (row) {
      var quantity = parseInt(row.querySelector('input[type="number"]').value);
      var price = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('R', ''));

      var rowTotal = quantity * price;
      subtotal += rowTotal;

      // Update the subtotal column in the current row
      row.querySelector('td:nth-child(6)').textContent = 'R' + rowTotal.toFixed(2);
    });

    // Update the cart subtotal and total
    var cartSubtotalElement = document.querySelector('#cart-subtotal');
    var cartTotalElement = document.querySelector('#cart-total');

    cartSubtotalElement.textContent = 'R' + subtotal.toFixed(2);
    cartTotalElement.textContent = 'R' + subtotal.toFixed(2);
  }

  // Add event listeners to quantity inputs
  var quantityInputs = document.querySelectorAll('#cart tbody tr input[type="number"]');
  quantityInputs.forEach(function (input) {
    input.addEventListener('input', updateCartTotal);
  });

  // Initial calculation
  updateCartTotal();

  function removeItem(itemId) {
    var itemToRemove = document.getElementById(itemId);
    
    if (itemToRemove) {
        itemToRemove.remove();
    }
}

function addToCart() {
  // Get the selected size and quantity
  var selectedSize = document.getElementById("size").value;
  var selectedQuantity = document.getElementById("quantity").value;

  // Create an object or perform actions to add the product to the cart
  // You may use an array, object, or a shopping cart system as needed

  // For example, you can display an alert to indicate success
  alert("Added " + selectedQuantity + " item(s) of size " + selectedSize + " to the cart.");
}



    // Get a reference to the success message and the checkout button
    const successMessage = document.getElementById("success-message");
    const checkoutButton = document.getElementById("checkout-button");

    // Add an event listener to the checkout button for when it is clicked
    checkoutButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Hide the form
        document.querySelector(".container").style.display = "none";

        // Show the success message
        successMessage.style.display = "block";
        console.log("JavaScript code is running.");
    });
    
      

