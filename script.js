
function clearText() {
	document.getElementById('texty').value = '';
	alert('Clearing everything...')
}

function toggleCalculator() {
    var calculatorContainer = document.getElementById('calculatorContainer');
    calculatorContainer.style.display = 'block';
}

function closeCalculator() {
    var calculatorContainer = document.getElementById('calculatorContainer');
    calculatorContainer.style.display = 'none';
}