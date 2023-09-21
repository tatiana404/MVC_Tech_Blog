const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    alert('logged out!')
  } else {
    alert('try to log out one more time');
  }
};

document.querySelector('#logout-link').addEventListener('click', logout);
