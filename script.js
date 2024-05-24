// url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/2024-05-21/currencies"
// const response=fetch(url)
// console.log(response)

document.getElementById('amount').addEventListener('keydown', function(event) {
    const allowedKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.',
        'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 
        'Home', 'End', 'Enter'
    ];

    // Allow specific Ctrl/Meta key combinations
    const ctrlCommands = ['a', 'c', 'v', 'x'];
    if (event.ctrlKey || event.metaKey) {
        if (ctrlCommands.includes(event.key.toLowerCase())) {
            return; // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        }
    }

    // Prevent default action for disallowed keys
    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
});