
  
  const btnAddMoney = document.getElementById('btn-Add-Money');


  btnAddMoney.addEventListener('click', function() {
    
    let amount = prompt("Please enter recharge amount:");


    if (amount !== null) {
      amount = amount.trim();

      if (amount === '' || isNaN(amount) || Number(amount) <= 0) {
        alert("Please enter a valid positive number!");
      } else {
        alert("You have recharged ৳" + amount + " successfully!");
      }
    } else {
      alert("Recharge cancelled.");
    }
  });