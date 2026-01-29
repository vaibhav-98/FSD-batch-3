/*

let obj = {
    id:101,
    name:"danish",
    mob: 8525462222,
    add: "g/20 gomtinagar lko up"
}

//console.log(obj.name);

let emp = new Object ()
emp.id = 102
emp.name = "Tanu"
emp.city = "LKO"

console.log(obj);
console.log(emp);


*/

/*

function emp (i,n,s) {
    this.id = i;
    this.name = n;
    this.salary = s;
}

const e = new emp(103,"gopal", 12000)
console.log(e);

*/




let emp = {
    id: 101,
    name: "vaibhav",
    age: 27,
    city: "lko"
}
/*

let keys = Object.keys(emp)
console.log(keys);

let val = Object.values(emp)
console.log(val);

let ent = Object.entries(emp)
console.log(ent);

*/

Object.freeze(emp)
emp.id = 100
console.log(emp);

Object.seal(emp)