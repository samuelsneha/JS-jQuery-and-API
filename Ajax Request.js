
//The entire logic of making a XML HTTP request, then receiving the response and showing the result will be taken care of here in this function. 
function fetchRandomDogImage(){
    var xhrRequest = new XMLHttpRequest();//Making a http request ourselves
    // Here xhrRequest is the object. So till now we ahve just created an object of the request
    //Now we need to initialize the request
    //Now this xhrRequest.onload is the function that will be called once the request is received.So you have to set this property.
    xhrRequest.onload = function(){
        //third
        console.log(xhrRequest.response)//since we are getting response in JSON, so print that json first and then parse it and proceed further  
    //what should happen or what handler should take care of the response
    //whatever request we are getting, we get it from xhrRequest.response
        var responseJSON = JSON.parse(xhrRequest.response) //convert string which is in the form of JSON to JSON object and store it in a variable. JSON.stringify is a method to convert JSON to string.
        // now responseJSON will have boh status and message out of which I want message onlyfor now
        // the response (xhrRequest.response here) is in json format and inside json format it is in string.
        //and to extract any particular string from that json format, we parse it.
        var imageURL = responseJSON.message;
        $('#dog-image').attr('src', imageURL);//we can add image only on the img tag, not on the div.

    }; // so this above function will be called once you get the request
    xhrRequest.onerror = function(){// this .onerror function will be executed only if there is some error in the API
        console.log('Request Failed');//we get error only if there is  error in the api and not from our side error
    };
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random','true')//so this will open the reuest or initialize the request for us
    //Inside this we need to write the method, and the link you want to hit
    //Another argument also we can take in this .open is the boolean - true or false.
    //True for asynchronous and false for synchronous. Even if we dont specify, its asynchronous by default.
    //So till now we have initialized the request. Now we have to actually make the request to the server.
    //first
    //xhrRequest.open('post','https://dog.ceo/api/breeds/image/random','true') dog api's (out api's) are read only ie. get only
    xhrRequest.send();//so this will make the request to the server
    //second
}


$('#fetchB').click(fetchRandomDogImage);
//now after clicking on this, what we are getting on the console is a string. Now from that string, I want to access the message part.
//So for that, parse/convert the string into JSON object so that, that object will have key-value pairs and its easy for us to access.
//