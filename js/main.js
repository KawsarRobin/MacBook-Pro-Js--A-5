//Update Extra Memory Price
function updateMemoryPrice(ram) {
  const memoryPrice = document.getElementById("memory-price");
  if (ram == "8gb") {
    memoryPrice.innerText = "0";
  } else if (ram == "16gb") {
    memoryPrice.innerText = "180";
  }
  updateTotalPrice();
}

//Update Extra Storage Price
function updateStoragePrice(storage) {
  const storagePrice = document.getElementById("storage-price");
  if (storage == "256gb") {
    storagePrice.innerText = "0";
  } else if (storage == "512gb") {
    storagePrice.innerText = "100";
  } else if (storage == "1tb") {
    storagePrice.innerText = "180";
  }
  updateTotalPrice();
}

//Update Delivery charge
function updateDeliveryCharge(type) {
  const deliveryCharge = document.getElementById("delivery-charge");
  if (type == "free") {
    deliveryCharge.innerText = "0";
  } else if (type == "premium") {
    deliveryCharge.innerText = "20";
  }
  updateTotalPrice();
}

//Update Total Price
function updateTotalPrice() {
  const totalPrice = document.getElementById("total-price");
  //Extra memory total price
  const memoryPrice = document.getElementById("memory-price");
  const memoryTotalAmount = parseInt(memoryPrice.innerText);
  //Extra storage total price
  const storagePrice = document.getElementById("storage-price");
  const storageTotalAmount = parseInt(storagePrice.innerText);
  //Delivery total amount
  const deliveryCharge = document.getElementById("delivery-charge");
  const deliveryTotalAmount = parseInt(deliveryCharge.innerText);
  //Initial  Price
  const initialPrice = document.getElementById("initial-price");
  const initialAmount = parseInt(initialPrice.innerText);

  //update total
  const newTotalAmount =
    initialAmount +
    memoryTotalAmount +
    storageTotalAmount +
    deliveryTotalAmount;
  totalPrice.innerText = newTotalAmount;

  //Update to final Price
  const finalPrice = document.getElementById("final-price");
  finalPrice.innerText = newTotalAmount;
}

//Update Final Price after  using Promo code ..
function updatePromoCode() {
  const promoCodeInput = document.getElementById("promoCode-input");
  const promoCodeInputValue = promoCodeInput.value;
  const notify = document.getElementById("notify");
  if (promoCodeInputValue == "stevekaku") {
    const finalPrice = document.getElementById("final-price");
    const totalPrice = document.getElementById("total-price");
    const totalPriceAmount = parseInt(totalPrice.innerText);
    const discount = (totalPriceAmount * 20) / 100;
    const discountedAmount = totalPriceAmount - discount;
    finalPrice.innerText = discountedAmount;
    //clear Input
    promoCodeInput.value = "";
    notify.style.display = "none";
  }
  // Wrong Promo-Code Validation
  else if (promoCodeInputValue != "stevekaku") {
    notify.style.display = "block";
  }
}
