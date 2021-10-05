// class Student{
//     // private x
//     show(){
//         console.log('hello');
//     }
// }

// let s1 = new Student()

// s1.x = 5

// console.log(s1)

// x = {
//     a: 5
// }

// x.c=7

//constructor function
// const data = function(name, age){
//     this.name = name
//     this.age = age
// }
// data.prototype.show = function(r){
//     console.log(this.name)
// }
// const x = new data("marwa", 36)
// console.log(x);
// x.z='test'
// console.log(x);
// x.show(5)

class Data{
    constructor(name, age){
        this.name=name
        this.age=age
    }
    show(){
        console.log(`${this.name} - ${this.age}`)
    }
    get myName() { return this.name}
    set myName(val) { this.name = val}
}

class MyNewClass extends Data{
    static c = 1
    constructor(name, age, w){  
        super(name, age)
        this.w = w
    }
    show(){
        console.log('my new class')
    }
}
let z = new MyNewClass("marwa")
console.log(z.name)
z.show()
console.log(MyNewClass.c)
// let d1 = new Data("marwa", 36)
// console.log(d1.myName)
// d1.myName="ahmed"