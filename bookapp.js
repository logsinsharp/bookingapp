let myObj={
    name:"lagnesh",
    email:"lagnesh123@gmail.com"
};
let myObj_serialized=JSON.stringify(myObj);
console.log(myObj_serialized);
localStorage.setItem("myObj",myObj);
console.log(localStorage);
localStorage.setItem("myObj",myObj_serialized);
let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserialized);

