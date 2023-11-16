document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Dummy user credentials for demonstration purposes
    const dummyUser = {
      username: 'demo_user',
      password: 'password123'
    };
  
    // Get user input
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
  
    // Check if the entered credentials match the dummy user
    if (usernameInput === dummyUser.username && passwordInput === dummyUser.password) {
      // Redirect to the main portfolio page (replace 'index.html' with the actual file name)
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  