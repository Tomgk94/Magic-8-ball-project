var userName = 'Tom';

if ( userName === 'Tom') {
    console.log(`Hello, Tom!`)
};

var userQuestion = 'will my cat bite my toes today';

console.log (` ${userName} asked ${userQuestion} `);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = ''

if ( randomNumber === 1) {
    eightBall = 'It is Certian'
}
else if ( randomNumber === 2) {
    eightBall = `it is decidedly so`
}
else if ( randomNumber === 3) {
    eightBall = `Reply hazy try again`
}
else if ( randomNumber === 4) {
    eightBall = `Cannot predict now`
}
else if (randomNumber === 5) {
    eightBall = `Do not count on it`
}
else if (randomNumber === 6) {
    eightBall = `My sources say no`
}
else if (randomNumber === 7) {
    eightBall = `Outlook not so good`
}
else if ( randomNumber === 8) {
    eightBall = `Signs point to yes`
}
else {console.log ('something is broken')}

console.log(eightBall)
