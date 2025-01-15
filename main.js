// API URL
const apiURL = 'https://dummyjson.com/quotes';

// Function to fetch and display a random quote
async function generateQuote() {
  try {
    // Fetch data from the API
    const response = await fetch(apiURL);
    const data = await response.json();

    // Get a random quote
    const randomIndex = Math.floor(Math.random() * data.quotes.length);
    const randomQuote = data.quotes[randomIndex];

    // Update the HTML with the new quote and author
    document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
  } catch (error) {
    console.error('Error fetching quotes:', error);

    // Show an error message
    document.getElementById('quote').textContent = 'Oops! Could not load a quote.';
    document.getElementById('author').textContent = '';
  }
}

// Call the function to load the first quote on page load
generateQuote();
