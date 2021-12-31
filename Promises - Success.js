var promise = new Promise((resolve, reject) => {
    //wait for one second
    setTimeout( () => {
        //promise is resolved
        resolve();
    }, 1000);

});
//once the promise is successful then what to do
promise.then( () => {
    console.log("successful");
});