//clousers
// const myClouser = () => {
//     let x = 5
//     return{
//         show(){ console.log('show') },
//         test() { console.log('test') },
//         print() { console.log(x) }
//     }
// }

// console.log(myClouser().show())

// const Student = (name, age) =>{
//     return {
//         printData(){ console.log(`user is ${name} and age is ${age}`)},
//         setData(){ name=name, age=age}
//     }
// }
// const s1 = Student('marwa', 36)
// s1.printData()

// "user name is "+ name + "and age is "+ age
// `user name is ${name} and age is ${age}`

// const c = (x, y) =>{
//     x=5
//     y=10
//     return{

//     }
// }

// const x = c(5,3)

// setTimeout(()=>{
//     console.log("hello")
// }, 1500)
// console.log('hi')

// var x
// setTimeout(()=>{
//     x = 5
// }, 1500)
// console.log(x)

// const f1= () =>{
//     console.log('f1')
//     const f2 = () =>{
//         console.log('f2')
//         const f3=()=>{
//             console.log('f3')
//             return "hi"
//         }
//     }
//     console.log(f2)
// }
// f1()

//callback
// const myCallBack = (val, cb ) =>{
//     setTimeout(()=>{
//         if(val>5) cb(true, 1, 4)
//         else cb(false, 5,8)
//     }, 1500)
// }

// myCallBack(0, (x, y, z)=>{
//     console.log(x)
// } )

// const mycb = (x, y , mcb) =>{
//     setTimeout(()=>{
//         if(x>y) mcb("x>y")
//         else mcb("y<x")
//     }, 1500)
// }

// mycb(5, 3, s=>{
//     console.log(s)
// })

// const myTest = (val, cb)=>{
//     if(typeof val == "string") cb('error', null)
//     else cb(null, 'val')
// }
// myTest('dd', (err, res)=>{
//     if(err) console.log(err)
//     else console.log(res)
// })

// promises
// const myPromise = (val) => new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         typeof val=="number"? resolve('number'):reject('fe moshkla')
//     }, 2000)
// })

// console.log(myPromise(5))

//then catch
// myPromise("m")
// .then(data=> console.log(data))
// .catch(e=> console.log(e))

//async await
// const newX = async ()=>{
//     try{
//         x = await myPromise(5)
//         y = await myPromise(x)
//         console.log(x)    
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// newX()
// console.log('d')
async function test(cb){
    try{
        let x = await fetch('https://jsonplceholder.typicode.com/users')
        let y = await x.json()
        // console.log(y)
        cb (null, y)
    
    }
    catch(e){
        cb(e, null)
    }
}
test((err,res)=>{
    if(err) return console.log(err)
    console.log(res)
})


