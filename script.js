function clearText() {
    document.getElementById('texty').value = '';
    alert('Clearing everything...');
}

function toggleCalculator() {
    var calculatorContainer = document.getElementById('calculatorContainer');
    calculatorContainer.style.display = 'block';
}

function closeCalculator() {
    var calculatorContainer = document.getElementById('calculatorContainer');
    calculatorContainer.style.display = 'none';
}

function toggleWhiteBoard() {
    var whiteboardContainer = document.getElementById('WhiteboardContainer');
    whiteboardContainer.style.display = 'block';
}

function closeWhiteBoard() {
    var whiteboardContainer = document.getElementById('WhiteboardContainer');
    whiteboardContainer.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 1; i <= 8; i++) {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex].text;
                const author = data[randomIndex].author || "Unknown Author";

                const quoteElement = document.getElementById(`quote${i}`);
                quoteElement.innerHTML = `
                    <blockquote>
                        <p>${randomQuote}</p>
                        <footer>- ${author}</footer>
                    </blockquote>
                `;
            }
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);
        });
});

function saveText() {
    const texty = document.getElementById('texty');
    localStorage.setItem('savedText', texty.value); // Fix: Use texty.value
    alert('Data saved');
}

window.onload = function () {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('texty').value = savedText; // Fix: Wrap 'texty' in quotes
    }
};
