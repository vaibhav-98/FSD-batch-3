
//1.getElementById ()

// Select one element usinng its id.

// let p = document.getElementById('para')
// p.style.color = 'red'


//2. getElementByClassName 

//Selects all elemts with given class
// Return hmtl-collection (array-like)

/*
 let items = document.getElementsByClassName('text')

items[0].style.color = 'blue'
items[1].style.color = "green";

*/


//3. getElementByTagName()

// selects elements by tag name (p,div, h1, etc)
/*

let ps = document.getElementsByTagName("p")
ps[0].style.fontSize = '20px'
ps[1].style.fontSize = '40px'

*/


//4. querySelector 
// Selects first matching element

/*

let qs = document.querySelector(".demo")
qs.style.color = "pink"

*/
// H.W :- #id, class, tag


//5. querySelectorAll()
// Selects all matching ele
// NodeList 

/*
let all = document.querySelectorAll(".demo")

all.forEach(ele => {
    ele.style.color = "orange"
})

*/
