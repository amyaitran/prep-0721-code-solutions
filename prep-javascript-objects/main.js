var person = {
  firstName: 'Amy',
  lastName: 'Tran',
  hobby: 'coding'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is: ' + fullName + '.');

person.job = 'student';
person.previousJob = 'lab rat';

console.log('The person\'s current job is: ' + person.job + '.');
console.log('The person\'s previous job was: ' + person.previousJob + '.');

console.log(person);
