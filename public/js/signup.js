const signupFormHandler = async function(event) {
  event.preventDefault();

  const username = document.querySelector('#username-input-signup').value.trim();
  const password = document.querySelector('#password-input-signup').value.trim();

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username, password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/mypage');
  } else {
    alert('Sorry, you have failed to sign up');
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
