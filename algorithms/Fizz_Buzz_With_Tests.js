/** printData
 *  This funcition takes input from the fizzbuzz function and
 *  displays data based on the given results. 
 *  
 *
 */ 
function printData(fizz, buzz, fizzB, none, num){
  var isInt = /^-?[0-9]+$/;
  
  if (isInt.test(num) === true){
    console.log("Input is a real number");
  }else{
    console.log("Input is not a real number");
  }

  if((fizz !== 0) || (buzz !== 0) || (fizzB !== 0)){
      console.log("|The Number " + num + " is divisible by:");
      console.log("|3 " + fizz + " times (fizz)");
      
      if (buzz !== 0){
        console.log("|5 " + buzz + " times (buzz)");
        
        if(fizzB !== 0){
          console.log("|both " + fizzB + " times (fizzbuzz)");  
        }else{
          console.log("|Number is not divisable by 3 and 5");
        }
      }else{
        console.log("|No Instances of 5... Not enough for FizzBuzz");
      }
  }else if(none < 3){
        console.log("|The given number is below 3");
      }
      
} 

/** fizzBuzz
 *  Takes in a arguement and assigns:
 *    Fizz if Divisable by 3
 *    Buzz if Divisable by 5
 *    FizzBuzz if Divisible by 3 and 5
 * 
 *  The results are then passed to the printData Function 
 *  if the input contained a real number
 *
 */ 
function fizzBuzz(num) {
  var fizz = 0;
  var buzz = 0;
  var fizzB = 0;
  var none = 0;
  
  if (isNaN(num)){
    console.log("|The given input (" + num + ") cannot be accepted because it is not an integer.");
  }else{
    //Logic accounts for fizzbuzz operation
    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0){
        fizzB = fizzB + 1;
      }else if (i % 3 === 0){
        fizz = fizz + 1;
      }else if (i % 5 === 0){
        buzz = buzz + 1;
      }else{
        none = none + 1;
      }
    }
    printData(fizz, buzz, fizzB, none, num);

  }
}

// TESTS //
/* Test if function works for 0 */
console.log("****Test One****");
fizzBuzz(0);
/* Test if function is higher than 0 but not divisable*/
console.log("****Test Two****");
fizzBuzz(2);
/* Test if function is divisible by 3 but not 5*/
console.log("****Test Three****");
fizzBuzz(4);
/* Test if function is divisible by 3 and 5 but not both*/
console.log("****Test four****");
fizzBuzz(10);
/* Test if function is fully divisible */
console.log("****Test five****");
fizzBuzz(15);
/* Test if function is fully divisible and beyond*/
console.log("****Test six****");
fizzBuzz(20);
/* Test if function recognizes input as not a real number*/
console.log("****Test seven****");
fizzBuzz("Failure");
/* Test if function recognizes that the given number is not a integer*/
console.log("****Test eight****");
fizzBuzz(3.5);
/* Test if function recognizes the data as less than 3*/
console.log("****Test nine****");
fizzBuzz(0.5);
/* Test if function recognizes the data as less than 0*/
console.log("****Test ten****");
fizzBuzz(-1);
