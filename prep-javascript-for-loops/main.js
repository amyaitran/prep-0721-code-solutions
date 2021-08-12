var x;
// declaring var x so that the error 'x is not defined' is resolved
for (x = 0; x < 10; x++) {
  console.log(x);
}

var evens = -2;
for (x = 0; x < 10; x++) {
  evens += 2;
  console.log(evens);
}

var time = 101;
for (x = 0; x < 100; x++) {
  time--;
  console.log('Time till explosion: ' + time + '!');
}
