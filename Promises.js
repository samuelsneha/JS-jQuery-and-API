//When the promise is rejected
var promise = new Promise((resolve, reject) => {
    //wait for one second
    setTimeout( () => {
        //promise is rejected
        reject({mesage:'error'});
    }, 3000);

});
//once the promise is successful then what to do
promise
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log('error',error );
});

//When the promise is resolved
var promise = new Promise((resolve, reject) => {
    //wait for one second
    setTimeout( () => {
        //promise is rejected
        resolve({mesage:'success'});
    }, 3000);

});
//once the promise is successful then what to do
promise
.then( (data) => {
    
    console.log(data);
})
.catch( (error) => {
    console.log('error',error );
});