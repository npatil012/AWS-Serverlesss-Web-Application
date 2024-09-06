const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    greeting.textContent = `Hello, ${name}!`;
});

const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch(
            "https://krufzxj35v64o2kwjhhfqgofze0ivtlx.lambda-url.us-east-1.on.aws/"
        );
        if (response.ok) {
            let data = await response.json();
            // Access the 'views' property from the parsed JSON
            counter.innerHTML = `Views: ${data.views || 'N/A'}`;
        } else {
            console.error('Failed to fetch view count:', response.status, response.statusText);
            counter.innerHTML = "Views: Error loading";
        }
    } catch (error) {
        console.error('Error fetching view count:', error);
        counter.innerHTML = "Views: Error loading";
    }
}

updateCounter();
