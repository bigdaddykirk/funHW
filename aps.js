const user = {
name:"Allen",
age: 21,
married: false,
purchases: ["house", "car", "computer"],

sayName: function(){
    console.log(this.name);
    }
};

user.sayName();

function sayMyAge(){

console.log(`My age is ${this}`);

}

sayMyAge()