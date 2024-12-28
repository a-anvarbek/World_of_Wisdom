// start 

// Default button
document.querySelector('button').addEventListener('click', clickButton);

// function click button
function clickButton(){
    
    // Button activation    
    document.querySelector("button").innerHTML = "Next world";

    var randomNumber = Math.floor(Math.random() * 5 + 1); // 1 - 5
    
    var randomImage = "img" + randomNumber + ".jpg";

    // Wisdom Image in the random img1 - img5  
    var randomImageSource = "Images/" + randomImage;

    var image = document.querySelector("img");
    image.setAttribute("src", randomImageSource);

    // Wisdom world for the image
    if(randomNumber === 1){

        document.querySelector('h2').innerHTML = 
        "Time is money but time waits for no one.";
    }else if(randomNumber === 2){

        document.querySelector('h2').innerHTML =
        "The most important thing in life is to never stop learning.";
    }else if(randomNumber === 3){

        document.querySelector('h2').innerHTML = 
        "If you want to buy something without looking at the price tag, then you will have to work without looking at the clock.";      
    }else if(randomNumber === 4){
        
        document.querySelector('h2').innerHTML = 
        "If you want a lot of money, work only with your head.";
    }else if(randomNumber === 5){
        
        document.querySelector('h2').innerHTML =
        "Success is not final, failure is not fatal: It is the courage to continue that counts.";
    }
}