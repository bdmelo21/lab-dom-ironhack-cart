// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  newsubTotal= quantity*price;
  let vsr = product.querySelector('.subtotal span');
  vsr.innerHTML= newsubTotal;
  console.log('Calculating subtotal, yey!');
  //... your code goes here
}

function calculateAll() {
  let sumSubTotal=0;
  const singleProduct = document.querySelectorAll('.product'); //getAllements não retorna uma array mas sim um objeto
  singleProduct.forEach((element) => {
    updateSubtotal(element);
    sumSubTotal+=parseFloat(element.querySelector('.subtotal span').innerHTML);
  });
  let total= document.querySelector('#total-value span');
  total.innerHTML=sumSubTotal;

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode
  const parent = row.parentNode;
  parent.removeChild(row);
  console.log('The target in remove is:', target);
}

// ITERATION 5

const createPrice = document.querySelector(".create").innerHTML;
createPrice.addEventListener('click',createProduct);
function createProduct() {
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const remove= document.querySelectorAll('.btn-remove');
  remove.forEach(element => {
    element.addEventListener('click', removeProduct);
  });

  //... your code goes here
});
