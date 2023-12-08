// auth.js
function authenticate() {
    // Get values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate authentication (replace with actual server-side authentication)
    fakeServerAuthentication(username, password);
}

function fakeServerAuthentication(username, password) {
    // Simulate a server response (replace with actual server-side logic)
    setTimeout(() => {
        if (username === 'user1' && password === 'password1') {
            alert("Authentication successful. Welcome, " + username + "!");
        } else {
            alert("Authentication failed. Incorrect username or password.");
        }
    }, 1000); // Simulating server delay
}
