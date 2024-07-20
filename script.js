document.getElementById('generate-btn').addEventListener('click', fetchIdiom);

function fetchIdiom() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'pleaseenteryourrapidapihere',
            'X-RapidAPI-Host': 'idioms.p.rapidapi.com'
        }
    };

    fetch('https://idioms.p.rapidapi.com/idioms', options)
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomIdiom = data[randomIndex].idiom;
            document.getElementById('idiom-text').innerText = randomIdiom;
        })
        .catch(error => {
            console.error('Error fetching the idiom:', error);
            document.getElementById('idiom-text').innerText = 'Failed to fetch idiom. Please try again.';
        });
}
