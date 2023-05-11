let buttonsDrum = document.querySelectorAll(".drum");

for(let i=0; i< buttonsDrum.length; i++) {
    buttonsDrum[i].addEventListener("click", function() {
       let buttonPressed = this.innerHTML;
       console.log(buttonPressed);

        makeSound(buttonPressed);
        buttonAnimation(buttonPressed);
       
    });
    }
    
    document.addEventListener("keydown", function(event) {
        console.log(event.key);

        makeSound(event.key);
        buttonAnimation(event.key);
    });


function makeSound(key) {
    switch(key) {
    
        case "w": 
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
        break;

        case "a": 
            tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
        break;

        case "s": 
            tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
        break;

        case "d": 
            tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
        break;

        case "j": 
            snare = new Audio("sounds/snare.mp3");
            snare.play(); 
        break;

        case "k": 
            kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
        break;

        case "l": 
             crash = new Audio("sounds/crash.mp3");
             crash.play(); 
        break;
    }
}

function buttonAnimation(currentKey) {
    let currentButton = document.querySelector("." + currentKey);

    currentButton.classList.add("pressed");
    
    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100)
}