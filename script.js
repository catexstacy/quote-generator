async function generateQuote() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        console.log(data); // Check the API response in the console
        document.getElementById("quote").innerText = `"${data.quote}"`;
        document.getElementById("author").innerText = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
    }
}
