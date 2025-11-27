// Step 1: Create the async function
async function fetchUserData() {

    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container
    const dataContainer = document.getElementById('api-data');

    // Step 4: Fetch data inside try/catch
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create a list and append all user names
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Error handling
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 8: Run fetchUserData when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);