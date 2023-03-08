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


onsole.log (Boolean (alert('5'))); 
// Діалогове вікно з текстом "5" і кнопкою Ок - виконуеться alert. В консолі false - виконується boolean,так як немає alert не має типу 
console.log (true>false);
// В порівнянні true= 1, false=0. Одже 1>0 відповідно. В консолі true -порівняння вірне
console.log (true > 5 );
// В порівнянні true= 1, 5 - цифра в даному випадку.Одже 1>5 відповідно. В консолі false - порівняння невірне
console.log (true <'5');
// В порівнянні true= 1, 5 - string в даному випадку перетворюється в number.Одже 1<5 відповідно . В консолі true -порівняння вірне
console.log (true > null);
// / В порівнянні true= 1, null=0. Одже 1>0 відповідно. В консолі true -порівняння вірне

