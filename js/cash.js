document.getElementById('Cash-Out').addEventListener('click', function(event) {
  event.preventDefault();

  const Money = document.getElementById('Cash-MoneyAdd').value;
  const MoneyAdd = parseInt(Money);
  const pin = document.getElementById('Cash-Pin').value;

  if(pin === "1234") {
    console.log('Login Successful');
    const balanceText = document.getElementById('amount').innerText;
    const balance = parseInt(balanceText);  
    const TotalAmount = balance - MoneyAdd;
    console.log(TotalAmount);

    //  update the
    document.getElementById('amount').innerText = TotalAmount;
  } else {
    alert("Invalid Pin Number");
  }
});
