const socket = io('http://localhost:621');

socket.on('connect', () => {
    console.log('Connected to the server');
});

socket.on('message', (url) => {
    const avr = url.includes('http') ? url : null;

    if (url) {
        document.getElementById('img').setAttribute('src', url)
    }
});