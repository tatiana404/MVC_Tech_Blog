const loginFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-input-login');
  const password = document.querySelector('#password-input-login');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username, password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/mypage');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
