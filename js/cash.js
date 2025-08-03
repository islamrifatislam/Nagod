// ============================
// Cash Out Button Function
// ============================

document.getElementById('Cash-Out').addEventListener('click', function (event) {
  event.preventDefault();

  const money = document.getElementById('Cash-MoneyAdd').value;
  const moneyOut = parseInt(money);
  const pin = document.getElementById('Cash-Pin').value;

  if (pin === "0000") {
    const balanceText = document.getElementById('amount').innerText;
    const balance = parseInt(balanceText);

    if (moneyOut > balance) {
      alert("Insufficient Balance");
      return;
    }

    const totalAmount = balance - moneyOut;

    // Update balance
    document.getElementById('amount').innerText = totalAmount;
    console.log("Money withdrawn:", moneyOut);
  } else {
    alert("Invalid Pin Number");
  }
});

