var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {
    itemName: [item],
    itemPrice: Math.floor(Math.random() * 100)
  };
  cart.push(obj);
  return `${item} has been added to your cart.`
}

function viewCart() {
  var finalString = 'In your cart, you have ';
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      finalString += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
      // finalString += `${(cart.length-1)? 'and ' : ''}${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
      if (cart.length - 1 !== 0) {
        finalString += 'and ';
      }
      finalString += `${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  }
  return finalString;
}


function total() {
  var sum = 0;
  for (let i = 0; i < cart.length; i++){
    sum += cart[i]['itemPrice'];
  }
  return sum;
}

function removeFromCart(item) {
  if (cart.indexOf(item) === - 1) {
    return "That item is not in your cart.";
  }
  const updated=cart.splice(cart.indexOf(item), 1);
  return updated;
}

function placeOrder(cardNumber) {
  // write your code here
}
