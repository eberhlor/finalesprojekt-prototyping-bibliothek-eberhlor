import { API_KEY } from "$env/static/private";

export async function load() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return {
            quotes: data
        };
    } catch (error) {
        console.error('Fetch error:', error.message);
        return {
            quotes: [],
            error: error.message
        };
    }
}