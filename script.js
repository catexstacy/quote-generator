function generateQuote() {
    fetch('https://dummyjson.com/quotes')
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            const quotes = data.quotes; // Get the array of quotes
            const randomIndex = Math.floor(Math.random() * quotes.length); // Pick a random index
            const quote = quotes[randomIndex]; // Get the random quote

            // Display the quote and author
            document.getElementById('quote').innerText = quote.quote;
            if (quote.author) {
                document.getElementById('quote').innerText += `\n— ${quote.author}`;
            }
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById('quote').innerText = 'Failed to load a quote. Please try again.';
        });
}
