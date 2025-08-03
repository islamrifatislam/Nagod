// ============================
// Add Money Button Function
// ============================

document.getElementById('Add-Money').addEventListener('click', function (event) {
  event.preventDefault();

  const money = document.getElementById('MoneyAdd').value;
  const moneyAdd = parseInt(money);
  const pin = document.getElementById('PinSet').value;

  if (pin === "0000") {
    const balanceText = document.getElementById('amount').innerText;
    const balance = parseInt(balanceText);
    const totalAmount = balance + moneyAdd;

    // Update balance
    document.getElementById('amount').innerText = totalAmount;
    console.log("Money added:", moneyAdd);
  } else {
    alert("Invalid Pin Number");
  }
});
