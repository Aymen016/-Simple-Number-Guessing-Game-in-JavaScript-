let maximum = parseInt(prompt('Welcome! Enter your Max Number'));

while (!maximum) {
    maximum = parseInt(prompt('Enter a valid Number'));
}

const target = Math.floor(Math.random() * maximum) + 1;

attempts = 1

let guess = prompt('Enter your guess (Type q to quit)');
console.log(guess)
while (parseInt(guess) !== target) {
    if (guess === 'q') break;
    guess = parseInt(guess);

    if (guess > target) {
        guess = prompt('Too High! Enter a new guess:')
        attempts++;
    } else if (guess < target) {
        guess = prompt('Too Low! Enter a new guess:')
        attempts++;
    } else {
        guess = promt('Invalid guess. Enter again')
    }
}
if (guess === 'q') {
    console.log('Quitted the game');
} else {
    console.log('Congrats');
    console.log(`YOU GOT IT! It took you ${attempts}guesses`)
}
console.log(`YOU GOT IT! It took you ${attempts}guesses`)