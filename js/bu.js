document.getElementById('Add-Money').addEventListener('click', function(event) {
  event.preventDefault();

  const Money = document.getElementById('MoneyAdd').value;
  const MoneyAdd = parseInt(Money);
  const pin = document.getElementById('PinSet').value;

  if(pin === "1234") {
    console.log('Login Successful');
    const balanceText = document.getElementById('amount').innerText;
    const balance = parseInt(balanceText);  // number ey rupantor
    const TotalAmount = balance + MoneyAdd;
    console.log(TotalAmount);

    // If you want to update the balance on the page
    document.getElementById('amount').innerText = TotalAmount;
  } else {
    alert("Invalid Pin Number");
  }
});

