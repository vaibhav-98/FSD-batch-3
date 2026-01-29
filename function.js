// A fn is a block of code desigend to perform a particular task

// =======================Ex 1 =======================================//
/*
function sqr(x) {     //  x --> parameter

    //console.log(x*x);  
    let c = x*x
    return c
}

let a = sqr(5)  // 8 --> argument

console.log(a);

*/

// ================== Fn without a parameter ==================//
/*
function hello() {
    console.log("hey");
   
}
hello()

*/

// ========= Fn with a parameter ( single, mult) ===============//

/*
function sum( x , y ) {
  console.log( x+y);
  
}

sum(10,5)

*/


// =============== Fn with an unlimited no of parameters ===============
/*
function sumOf() {
    let sum = 0
    for(var i = 0; i < arguments.length; i++) {
        sum =  sum + arguments[i] 
        
    }
    return sum
}

 let result = sumOf(5,8,9,7,3,2,4)
 console.log(result);
 
 */



 // ========== Arrow function =========================//

 /*
 const sumOf = (...nums) => {
    let sum = 0
    for(var i = 0; i < nums.length; i++) {
        sum =  sum + nums[i] 
        
    }
    return sum
 }

 let result = sumOf(5,8,9,7,3,2,4)
 console.log(result);
 
*/


// =================== Short arrow fun ===============

/*
const sumOf = (...nums) => nums.reduce((a,b) => a+b,0)
console.log(sumOf(5,8,9,7,3,2,4));

*/


// ===================== Anonymus Function =============================
/*

let a = function () {
    console.log("Hello Danish");
    
}

a()

*/

// ================= IIFE & Self invoking function ============= 

/*

(function (x){
        let a = 10
    console.log(x*x);
    console.log(a);

})();

console.log(a);

*/