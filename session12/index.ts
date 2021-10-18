class User{
    private name:string=""
    public age:number = 50
}

let user1 = new User()
console.log(user1.age)

// // let x:number|string = 5
// //x = "marwa"
// // console.log(typeof x)
// // function test (a:number, b:number):number{
// //     return a+b
// // }
// // test(5, 6)
// //oop
// // class User{
// //     private name:string=""
// //     public age:number = 50
// // }

// // let user1 = new User()
// // console.log(user1.age)

// class User{
//     // private public protected
//     protected name:string
//     protected age:number
//     constructor(name:string, age:number){
//         this.name = name
//         this.age = age
//     }
// }

// class Teacher extends User{
//     private salary:number
//     private subjects : string[] = []
//     constructor(name:string, age:number, salary:number){
//         super(name, age)
//         this.salary = salary
//     }
//     get _name():string{
//         return this.name
//     }
//     myName(name:string){
//         this.name=name
//         return this.name
//     }
//     addSubject(sub:string){

//     }
// }

// let t1 = new Teacher("marwa",36, 1000)
// console.log(t1._name)
// t1.myName("omar")

// interface myData{
//     name:string
//     age?:number
//     show():void
// }
// let x : myData ={
//     name: "marwa",
//     show:function(){
//         console.log('test')
//     }
// }

// class X implements myData{

// }


//abstract
// abstract class X {
//     //abstract 
//     name: string=""
//     show(){
//         console.log("hello")
//     }
//     abstract show2():void
// }

// class Y extends X{
//     show2(){
//         console.log('show2')
//     }
// }

//categories=> catName, cat code , products name, sizes [ {size, q}], category

interface Cats{
    _catName: string
    _catCode:string
}
interface Sizes{
    size: string|number // m s l  36 38 40
    q:number
}

class Categories implements Cats{
    _catName:string
    _catCode:string
    static count:number = 0
    constructor(name:string, code:string){
        this._catName=name
        this._catCode=code
        Categories.count++
    }
    static getCount(){
        return Categories.count
    }
}

class Product {
    proName:string
    proSizes : Sizes[] =[]
    category: Cats
    constructor(proName:string,category:Cats ){
        this.proName= proName
        this.category=category    
    }
    addSize(size:Sizes){
        this.proSizes.push(size)
    }
}

let c1 = new Categories('women', "10Ab")
let c2 = new Categories('men', "10Ac")
let c3 = new Categories('kids', "10Ad")
let c4 = new Categories('boys', "10Ae")

let p1 = new Product("tshirt", {_catCode:"10Ab", _catName:"women"})
p1.addSize({size:"S", q:20})
console.log(Categories.count)
