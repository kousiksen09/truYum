function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  if (username === 'admin@yum.com' && password === 'admin@123') {
    window.location.href = '../components/menu-item-list-admin.html';

    document.getElementById('loginForm').reset();
  } else if (username === 'customer@yum.com' && password === 'cust@123') {
    window.location.href = '../components/menu-item-list-customer.html';
    document.getElementById('loginForm').reset();
  } else {
    document.getElementById('error').innerHTML = 'Invalid Credential!';
    document.getElementById('loginForm').reset();
  }
}

function validate() {
  var name = document.forms['editMenuItem']['title'].value.trim();
  if (name == '') {
    alert('Title is required.');
    return false;
  }
  if (name.length < 2 || name.length > 65) {
    alert('Title should have 2 to 65 characters.');
    return false;
  }

  var price = document.forms['editMenuItem']['price'].value.trim();
  if (price == '') {
    alert('Price is required.');
    return false;
  }
  if (isNaN(price)) {
    alert('Price has to be number.');
    return false;
  }
  var dateOfLaunch = document.forms['editMenuItem']['dateOfLaunch'].value;
  if (dateOfLaunch == '') {
    alert('Date of Launch is required.');
    return false;
  }

  var category = document.forms['editMenuItem']['category'].value;
  if (category == '') {
    alert('Select one category.');
    return false;
  }
}
let count = 0;
function deleteItem() {
  document.getElementById('p1').style.display = 'none';
  document.getElementById('total').innerHTML = 'Rs. 276.00';
  document.getElementById('delete').innerHTML =
    'Item removed from 	cart sucessfully!';
  count++;
  if (count == 2) {
    document.getElementById('p2').style.display = 'none';
    document.getElementById('total').innerHTML = 'Rs. 149.00';
  } else if (count == 3) {
    document.getElementById('p3').style.display = 'none';
    window.location.href = '../components/cart-empty.html';
  }
}
