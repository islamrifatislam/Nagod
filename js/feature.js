// Cash Out button
document.getElementById('btn-Cash-out').addEventListener('click', function () {
  // Show Cash Out section
  document.getElementById('cash-out-hidden').classList.remove('hidden');
  // Hide Add Money section
  document.getElementById('Show-Add-Money').classList.add('hidden');
});

// Add Money button
document.getElementById('btn-Add-Money').addEventListener('click', function () {
  // Show Add Money section
  document.getElementById('Show-Add-Money').classList.remove('hidden');
  // Hide Cash Out section
  document.getElementById('cash-out-hidden').classList.add('hidden');
});

