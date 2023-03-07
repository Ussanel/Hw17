let text = 'You can ignore single and double quotes like this: \\\'\\\' \\\"\\\"'
console.log(text);

alert('Please enter your data');
let userName = prompt('Enter your name:');
alert(`Your name is: ${userName}`);

let userSurname = prompt('Enter your surname: ');
alert(`Your full name is: ${userName} ${userSurname}`);

let age = prompt('How old are your: ');
alert(`Your full name is: ${userName} ${userSurname}, you age: ${age}`);

let admin = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${userSurname}, you age: ${age}, admin status: ${admin}`);
