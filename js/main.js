const quoteID = document.getElementById("quote-id");
const quoteContent = document.getElementById("quote");
const circleButton = document.getElementById("circle-button");


function fetchData() {

    var randomNumber = Math.floor(Math.random() * 224) + 1;

    fetch('https://api.adviceslip.com/advice/'+randomNumber)
        .then(response => response.json())
        .then(data => {

            quoteID.innerText = data.slip.id;
            quoteContent.innerText = '"' + data.slip.advice + '"';
    })
        .catch(error => console.error('Error fetching advice:', error));
}


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

circleButton.addEventListener('click', function() {
    fetchData();
});