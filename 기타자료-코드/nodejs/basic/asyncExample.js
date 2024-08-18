// function asyncTaskPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Task completed with Promise');
//         }, 2000);
//     });
// }
//
// asyncTaskPromise()
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
//

function asyncTask(callback) {
    setTimeout(() => {
        callback('Task completed');
    }, 2000);
}

asyncTask((message) => {
    console.log(message);
});
