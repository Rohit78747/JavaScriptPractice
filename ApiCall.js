const request = new XMLHttpRequest();
// we need to call the api or request the api using GET method ki, me jo
// url pass kar kr rha hu uska data chaiye 
request.open('GET', "https://covid-api.mmediagroup.fr/v1");
request.send(); // we need to send the request and its async so we need to 
// add the event to load the data adn get it

// to get the response 
request.addEventListener("load", () => {
    console.log(this.responseText);
});