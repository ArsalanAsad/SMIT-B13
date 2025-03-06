// let samplePromise = new Promise((resolve, reject) => {
//     let isSuccessful = Math.random() > 0.5;

//     setTimeout(() => {
//         if (isSuccessful) {
//             resolve("The operation was successful");
//         } else {
//             reject("Something went wrong");
//         }
//     },1000);
// });
// // Handling the promise with .then(), .catch(), and .finally()
// samplePromise
// .then((data) => {
//     console.log(data, ": Data in .then");
// })
// .catch((error) => {
//     console.log(error, ": error in .catch")
// })
// .finally(() => {
//     console.log("the operation is complete, regardless of success or failure");
// });
let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation was successful");
    } else {
        reject("Something wen wrong");
    }
});
myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

//ASYCHRONUS
// console.log("Start");
// setTimeout(() => {
//     console.log("This happens after 2 seconds");
// }, 2000);
// console.log("End");
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      },2000);  
    });
}
async function getData() {
    try {
      console.log("Fetching data...");
      const result = await fetchData(); // Pauses here until fetchData resolves
      console.log(result); // Logs: "Data fetched successfully!"
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  getData();

//CALLBACK
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data fethed");
//     }, 1000);
// }
// fetchData((message) => {
//     console.log(message);
// });

//Errors and exceptions
// try {
//     let result = riskyFunction();
// } catch (error) {
//     console.log("An error occurred:" + error);
// }

//setTimeout and setInterval
// setTimeout(() => {
//     console.log("Executed after 1 second")
// }, 1000);

// const getData = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Function Calling..")
//             res("Promise resolved")
//         }, 2000)
//     })
// }
// getData()
//     .then((data) => {
//         console.log(data);  // "Promise resolved" will be logged after 2 seconds
//     })
//     .catch((error) => {
//         console.log(error);  // In case of an error, it would be logged here
//     });
