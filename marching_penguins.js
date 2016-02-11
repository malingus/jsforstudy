function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};


function Penguin(name,numLegs){
    this.name = name;
    this.numLegs = numLegs;
}



Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
}


// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();