// Get references to our HTML elements
const searchButton = document.getElementById('search-button');
const addressInput = document.getElementById('address-input');
const resultsContainer = document.getElementById('results-container');
const statusMessage = document.getElementById('status-message');

// Listen for a click on the search button
searchButton.addEventListener('click', () => {
    const address = addressInput.value.trim();
    if (address) {
        fetchPropertyData(address);
    }
});

async function fetchPropertyData(address) {
    statusMessage.textContent = 'Searching...';
    resultsContainer.innerHTML = ''; // Clear previous results

    const url = `https://property-price-register-ireland-api.p.rapidapi.com/properties?address=${encodeURIComponent(address)}`;
    
    // IMPORTANT: Get your own API Key from RapidAPI
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY_HERE', 
            'X-RapidAPI-Host': 'property-price-register-ireland-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.properties && result.properties.length > 0) {
            statusMessage.textContent = '';
            displayResults(result.properties);
        } else {
            statusMessage.textContent = 'No results found for that address.';
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        statusMessage.textContent = 'An error occurred. Please try again later.';
    }
}

function displayResults(properties) {
    properties.forEach(prop => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'property-card';

        const addressEl = document.createElement('p');
        addressEl.textContent = prop.address;
        
        const dateEl = document.createElement('p');
        dateEl.textContent = `Date of Sale: ${new Date(prop.date_of_sale).toLocaleDateString('en-IE')}`;
        
        const priceEl = document.createElement('p');
        // Format price with a Euro sign and commas
        priceEl.textContent = `Price: €${parseInt(prop.price).toLocaleString('en-IE')}`;
        priceEl.className = 'price';

        resultDiv.appendChild(addressEl);
        resultDiv.appendChild(dateEl);
        resultDiv.appendChild(priceEl);

        resultsContainer.appendChild(resultDiv);
    });
}
