// get the url from git hub based on an email id

// Function to get GitHub URL based on email
function getGitHubUrlByEmail(email) {
    const apiUrl = `https://api.github.com/search/users?q=${email}+in:email`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Assuming the first result is the user
            const user = data.items[0];

            if (user) {
                const githubUrl = user.html_url;
                console.log(`GitHub URL for ${email}: ${githubUrl}`);
            } else {
                console.log(`No GitHub user found for ${email}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Example usage
const emailToSearch = 'studajay3@email.com';
getGitHubUrlByEmail(emailToSearch);