document.getElementById('fetchBtn').addEventListener('click', async () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Loading...';
    try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        messageElement.textContent = data.message;
    } catch (error) {
        messageElement.textContent = 'Error fetching message';
        console.error('Error:', error);
    }
});
