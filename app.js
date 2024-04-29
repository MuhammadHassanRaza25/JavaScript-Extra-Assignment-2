//Task 1
document.write('<br>')
document.write(`<h1>Task 1:</h1>`)

var numBers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write(`Input: ${numBers} <br><br>`)
for (var i = 0; i < numBers.length; i++) {
    if(numBers[i] % 3 == 0 && numBers[i] % 5 == 0){
      numBers[i] = 'ThreeFive'
    }
    else if(numBers[i] % 3 == 0){
      numBers[i] = 'Three'
    }
    else if(numBers[i] % 5 == 0){
      numBers[i] = 'Five'
    }

}
document.write(`Output:${numBers}`)



//Task 2
document.write('<br> <br>')
document.write(`<h1>Task 2: filter even numbers</h1>`)

var num = [1,2,3,4,5,6,7,8,9,10,15,24]
document.write(num , '<br>')

var newNum = []
for (let i = 0; i < num.length; i++) {
    if(num[i]%2 == 0){
      newNum.push(num[i])
    }
}
document.write(newNum);


//Task 3 reverse user name 
document.write('<br> <br>')

document.write(`<h1>Task 3: reverse string input</h1>`)
document.write(`<h3>Your Reverse Name is</h3>`)

var userInput = prompt('Task 3: Reverse Name','Enter Your Name')
for (let i = userInput.length -1; i >= 0; i--) {
    document.write(`${userInput[i]}`);
}


//Task 4 
document.write('<br> <br>')
document.write(`<h1>Task 4: find max number </h1>`)

var number = [12,15,989,88,664,99,703]
document.write(number , '<br>');
var maxNum = number[0]
for (let i = 0; i < number.length; i++) {
     if(number[i] > maxNum){
       maxNum = number[i]
     }
}
document.write(`max number is: ${maxNum}`);


//Task 5
document.write('<br> <br>')
document.write(`<h1>Task 5: reverse number </h1>`)

var integers = [1,2,3,4,5,6,7,8,9,10]
document.write(integers, '<br>')
for (let i = integers.length -1; i >= 0; i--) {
  document.write(integers[i]+',')
}

// Task 6
document.write('<br> <br>')
document.write(`<h1>Task 6: check palindrome word </h1>`)

var userWord = prompt('Enter Palindrome Word')
var reverseWord = ''
for (let i = userWord.length -1; i >= 0; i--) {
     reverseWord += userWord[i]
}
if(reverseWord == userWord){
   document.write(`<h2>This Is Palindrome Word: ${userWord}</h2>`)
}else{
  document.write(`<h2>Not a Palindrome Word: ${userWord}</h2>`)
}


// Task 7 example of fibonacci series 1+2 = 3  2+3 = 5  and so on
document.write('<br> <br>')
document.write(`<h1>Task 7: fibonacci series</h1>`)

var a = 0 ; b = 1;
for (var i = 0; i < 10; i++) {
     var New = a + b
     document.write(New+',');
     a=b // jo pehly a tha ab wo b hogya
     b=New // jo b tha ab wo new value hogaya
}


// Task 8
document.write('<br> <br>')
document.write(`<h1>Task 8: factorial calculate</h1>`)
var userMath = prompt('Task 8: factorial calculate','Enter a Number')
var math1 = 1
for (let i = 1; i <= userMath; i++) {
        math1 = math1 * i
}
document.write(`factorial of ${userMath} is ${math1}`);




// Task 9
// Ek integer input lein aur check karein ke woh prime hai ya nahi.
document.write(`<h1>Task 9:</h1>`)

let userPrime = +prompt("Task 9: Check Prime Number","Enter a number");
let isPrime = true;

if (userPrime === 1) {
  console.log("1 is neither prime nor composite number");
} 
else if (userPrime > 1) {
  for (let i = 2; i < userPrime; i++) {
    if (userPrime % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.write(`${userPrime} is a Prime Number`);
  } 
  else {
    document.write(`${userPrime} is not a Prime Number`);
  }
} 

else {
  document.write("The number is not a  prime number");
}


