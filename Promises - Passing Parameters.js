
// var userLoggedIn = true;

// var promise = new Promise((resolve, reject) => {
//     //wait for one second
//     setTimeout( () => {
//         //promise is resolved
//         if(userLoggedIn){
//             resolve("User Logged In");
//         }
//       else{
//             // Reject
//             reject();
//         }        
//     }, 1000);
// });

// setTimeout( () => {
//     userLoggedIn = true;
// },500);

// promise.then( (successMsg) => {
//     console.log(successMsg);
//     }).catch( () => {console.log("User Not Logged In")} );


var userLoggedIn = true;
function checkUserLoggedIn(){
    var promise = new Promise((resolve, reject) => {
        //wait for one second
        setTimeout( () => {
            //promise is resolved
            if(userLoggedIn){
                resolve("User Logged In");
            }
            else{
                // Reject
                reject();
            }        
        }, 1000);
    });
    return promise;
}
setTimeout( () => {
    userLoggedIn = true;
},500);
checkUserLoggedIn().then( (successMsg) => {
    console.log(successMsg);
    }).catch( () => {console.log("User Not Logged In")} );