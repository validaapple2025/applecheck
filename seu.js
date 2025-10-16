function showPasswordInput() {
  const appleId = document.getElementById('apple-id').value;

  if (appleId) {
    document.getElementById('password-group').style.display = 'block';
    document.getElementById('apple-id').disabled = true;
    document.querySelector('.arrow-button').style.display = 'none';
    document.querySelector('.login-button').style.display = 'block';
    document.getElementById('password').focus();
  } else {
    alert('Please enter your Apple ID.');
  }
}





function login() {
  const password = document.getElementById('password').value;
  if (password) {
    alert('Logged in successfully!');
  } else {
    alert('Please enter your password.');
  }
}