/*

function name() {
    var a = 6;
}

if (true) {
    var a = 60;
} 
alert(a);




function Student(name) {
    this.name = name; 
}

Student.prototype.fullname = function() {
    return this.name;
}

Student.prototype.school = "UST";

let stud = new Student("Richmond Francisco");

document.write(`Hi, I am ${stud.fullname()} and my school is ${stud.school}`);

alert('Hi');






let anl = {kind:'MammBirdal'};
let arr = [this.kind];
let disp = function(kind) {
    document.write(`kind: ${this.kind}`)
}
disp.apply(anl,arr);



let anl = {kind:'MammBirdal', type:'Dog', breed:'afsah'};
let disp = function() {
    return `${this.kind}`;
}
let newFunc = disp.bind(anl);
document.write(newFunc()); 


class Bird{
    constructor(name, wingspan) {
        this.name = name;
        this.wingspan = wingspan;
    }
    static fly(dist) {
        document.write(`${this.name} can fly ${dist} miles`);
    }
}

let bird1  = new Bird('Agila', 10);
Bird.fly(100000);


*/ 
class Bird{
    constructor(name, wingspan) {
        this.name = name;
        this.wingspan = wingspan;
    }
    fly = function(dist) {
        document.write(`${this.name} can fly ${dist} miles`);
    }
}

let bird1  = new Bird('Agila', 10);
bird1.fly(100000);