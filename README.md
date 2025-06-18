# What Did They Pay? - Irish Property Price Search

A simple, single-page web application to search for the sale prices of residential properties in Ireland. This project fetches data directly from Ireland's Property Price Register.
---

## Description

This web app provides an easy-to-use interface for querying property sales data in Ireland. Users can enter a full or partial address to retrieve a list of historical sales for that location, including the date of sale and the final price.

It uses a publicly available API to get the data. You can see how the results compares against Irish [House Prices](https://irishhouses.ie) or [the Property Price Register](https://www.propertypriceregister.ie/)

---

## Features

* **Address Search:** Search for any Irish address to see its sales history.
* **Dynamic Results:** Fetches and displays data from a live API without needing to reload the page.
* **Clean UI:** Simple and intuitive interface for a smooth user experience.
* **Error Handling:** Provides clear messages if no results are found or if an error occurs.
* **Formatted Data:** Prices and dates are formatted for easy readability.

---

## Tech Stack

This project is intentionally simple and relies only on front-end technologies:

* **HTML5:** For the structure and content of the application.
* **CSS3:** For custom styling and layout.
* **Vanilla JavaScript:** For all the application logic, including API calls (`fetch`) and DOM manipulation.

---

## Data Source

This application uses data made available by the **Property Services Regulatory Authority (PSRA)**. All data is fetched from the public [Property Price Register](https://www.propertypriceregister.ie/).

The live data is accessed via the free-to-use [Property Price Register Ireland API](https://rapidapi.com/damiananslik/api/property-price-register-ireland-api) on RapidAPI.

---

## Setup and Installation

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Get a free API Key:**
    * Visit [RapidAPI](https://rapidapi.com/damiananslik/api/property-price-register-ireland-api) and sign up for a free account to get your personal API key.

4.  **Add your API Key:**
    * Open the `app.js` file.
    * Find the line `const apiKey = 'YOUR_API_KEY_HERE';`
    * Replace `'YOUR_API_KEY_HERE'` with your actual RapidAPI key.

5.  **Open `index.html` in your browser:**
    * You can simply double-click the `index.html` file or use a live server extension in your code editor (like Live Server for VS Code).

---
