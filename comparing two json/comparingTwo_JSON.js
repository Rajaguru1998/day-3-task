

let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};


if(Object.keys(obj1) == Object.keys(obj2)){

    console.log("object's Keys and values are same")

}
else if(Object.keys(obj1) != Object.keys(obj2)){
    console.log("object's Keys and values are missmatched")
}