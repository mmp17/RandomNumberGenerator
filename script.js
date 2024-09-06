document.getElementById('playBtn').addEventListener('click', function() {
    let minRange = parseInt(document.getElementById('minRange').value);
    let maxRange = parseInt(document.getElementById('maxRange').value);

    // Check if input is valid
    if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
        alert('Please enter valid minimum and maximum range values.');
        return;
    }

    let randomNumbers = generateRandomNumbers(minRange, maxRange, 10);

    // Display the random numbers
    let numbersList = document.getElementById('numbersList');
    numbersList.innerHTML = '';
    randomNumbers.forEach(num => {
        let li = document.createElement('li');
        li.textContent = num;
        numbersList.appendChild(li);
    });
});

function generateRandomNumbers(min, max, count) {
    let numbers = [];
    while (numbers.length < count) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers;
}
