function Person (name, age) {
    this.name = name;
    this.age = age;
}
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};
var olderAge = function(alice,bob){
    if(alice.age>bob.age){
        return alice.age;
    }else{
        return bob.age;
    }
}
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));