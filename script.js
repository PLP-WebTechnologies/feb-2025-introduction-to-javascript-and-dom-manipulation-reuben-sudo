// script.js

// Get references to DOM elements
const greetingElement = document.getElementById('greeting');
const dynamicTextElement = document.getElementById('dynamicText');
const styleButton = document.getElementById('styleButton');
const addElementButton = document.getElementById('addElementButton');
const container = document.getElementById('container');

// Change text content dynamically
setTimeout(() => {
    greetingElement.textContent = 'Welcome to the dynamic world of JavaScript!';
}, 4000); // Change after 4 seconds

// Modify CSS styles via JavaScript
styleButton.addEventListener('click', () => {
    dynamicTextElement.classList.toggle('highlight');
});

// Add or remove an element when a button is clicked
let newElementCreated = false;
let newDiv;

addElementButton.addEventListener('click', () => {
    if (!newElementCreated) {
        newDiv = document.createElement('div');
        newDiv.id = 'newElement';
        newDiv.textContent = 'A dynamically added element!';
        container.appendChild(newDiv);
        addElementButton.textContent = 'Remove Element';
        newElementCreated = true;
    } else {
        container.removeChild(newDiv);
        addElementButton.textContent = 'Add Element';
        newElementCreated = false;
    }
});