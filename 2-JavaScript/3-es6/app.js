// const a = [1, 2, 3]
// const name = ['a', 'b', 'd', 'u', 'l', 'l', 'a', 'h']
// const b = [1, 2, 3]

// const b = a.map((element, index, array) => {
// console.log(element, index, array)
// return element + 1
// if (index === 0) {
//     return "A" + element
// } else {
//     return element
// }
// })

// const filteredArr = a.filter(function (element, index, array) {
//     console.log(element, index, array)
//     return element != 1
// })
// let myName = "use case"

// const newArr = a.forEach((element, index, array) => {
//     myName += element
// });
// console.log(a, myName, "===array");
// const newValue = name.reduceRight(function (prev, cur, ind, arr) {
//     return prev + cur
// }, 0)

// a.fill("0",1,2)
// console.log(a)


// const students = [
//     { id: 1, name: "Fareed", time: "6-9" },
//     { id: 2, name: "Ahsan", time: "8-9" },
//     { id: 3, name: "Ahsan", time: "8-9" },
//     { id: 3, name: "Rafeeq", time: "7-9" }
// ]
// const element = a.find(element => element === 1)
// console.log(element)

// const student = students.find((student, index) => {
//     return student.name === "Ahsan"
// })

// console.log(student)
// const studentIndex = students.findIndex(student => student.id == 2)
// console.log(studentIndex)


// const completeName = name.join(" ")
// console.log(completeName)
// const nameAray = completeName.split(" ")

// console.log(nameAray)

// const one = "1"
// const two = "2"
// console.log(one)
// console.log(two)
// PROMISE
// NORMAL FUNCTION

// console.clear()
// setTimeout(() => {
//     console.log("RUN")
// },3000)
// function getWater(cb) {
//     let water = undefined
//     setTimeout(() => {
//         water = "adha kilo"
//         console.log(water, "===> water agya")
//         cb()
//     }, 3000)
// }
// function getSugar(cb) {
//     let sugar = undefined
//     setTimeout(() => {
//         sugar = "adha kilo"
//         console.log(sugar, "===> sugar agyi")
//         cb()
//     }, 3000)
// }
// function getDahi(cb) {
//     let dahi = undefined
//     setTimeout(() => {
//         dahi = "adha kilo"
//         console.log(dahi, "==> dahi agyi")
//         cb()
//     }, 3000)
// }
// function lassiBnao() {
//     let lassi = undefined
//     setTimeout(() => {
//         lassi = "1.75l"
//         console.log(lassi, "==> lassi bn gyi")
//     }, 3000)
// }

// getDahi(() => {
//     getSugar(() => {
//         getWater(lassiBnao)
//         alert
//     })
// })
// getDahi(() => {
//     getSugar(() => {
//         getWater(lassiBnao)
//     })
// })

// function getDahi(cb) {
//     let dahi = undefined
//     setTimeout(() => {
//         dahi = "adha kilo"
//         console.log(dahi, "==> dahi agyi")
//         cb()
//     }, 3000)
// }
// let ourPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         const a = 1;
//         if (a > 10) {
//             res("Promise is resolved")
//         } else {
//             rej("Promise is rejected")
//         }
//     }, 3000)
// })
// console.log(ourPromise)
// ourPromise.then((value) => {
//     console.log(value, ": SUCCESS")
// })
// .then((value) => {
//     console.log(value, ": SUCCESS")
// })
// .catch((error) => {
//     console.log(error, ": FAILED")
// })
// console.log("Agay chla gya")


// console.log("A")
// setTimeout(() => {
//     console.log("B")
// }, 0)
// console.log("C")

// console.log("a")
// setTimeout(() => { }, 2000)
// console.log("c")
// console.log("d")

// async function call() {
//     console.log("before")
//     const value = await ourPromise()
//     console.log(value)
//     console.log("after")
// }
// call()

// const promise = new Promise ((res, rej) => {
//     setTimeout(() => {
//         const data = { id: 1, name:"user" }
//         const err = { id: 1, name:null }
//         res(data)
//         rej(err)
//     }, 2000)
// }) 
// console.log(promise)

// // // ********************************* //
// // // promise
// .then((data) => {
//     console.log(data, ": data");
// })
// .catch((error) => {
//     console.log(error, ": error");
// })
// .finally(() => {
//     console.log(data, ": finally")
// })

const getData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Function Calling..")
            res("Promise resolved")
        }, 2000)
    })
}
async function foo() {
         try {
             console.log("A")
              const data = await getData()
              const data1 = await getData()
              const data2 = await getData()
              const [data1, data2, data3] = await Promise.all([getData(), getData(), getData()])
              data[0],data[1],data[2]
              const data1 = data[0]
              const data2 = data[1]
              const data3 = data[2]
              console.log(data)
              console.log("B")
        } catch (error) {
            console.log(error)
        }
     }
    
     foo()