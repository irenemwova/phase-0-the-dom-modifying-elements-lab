// Remove the <main> element with the id of 'main'
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new header to 'victory'
newHeader.id = 'victory';

// Set the text content of the new header
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your desired text

// Append the new header to the body
document.body.appendChild(newHeader);
