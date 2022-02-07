//Total Button
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

 //Mouse click
for(var i = 0; i<numberOfDrumButtons; i++){
   
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        //find which button pressed
        var buttonInnerHtml = this.innerHTML;
            //play
        playSoundByKey(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });

}
//Key Press
document.addEventListener('keydown',function(event){

    playSoundByKey(event.key);
    buttonAnimation(event.key);
    

});

/*funciotn for playing sound by pressed key.*/

function playSoundByKey(key){
    switch (key) {
        case "w":
            drumPlay("sounds/tom-1.mp3");
            break;
        case "a":
            drumPlay("sounds/tom-2.mp3");
            break;
        case "s":
            drumPlay("sounds/tom-3.mp3");
            break;
        case "d":
            drumPlay("sounds/tom-4.mp3");
            break;
        case "j":
            drumPlay("sounds/kick-bass.mp3");
            break;
        case "k":
            drumPlay("sounds/snare.mp3");
            break;
        case "l":
            drumPlay("sounds/crash.mp3");
            break;
        default:
            console.log(buttonInnerHtml);
            break;
    }
}
/** Audio select by url and play */
function drumPlay(url){

    var audio = new Audio(url);
    audio.play();
}


//Fucntion for button animation after pressing.
function buttonAnimation(currentKey){

    var activeKey = "."+currentKey;
    document.querySelector(activeKey).classList.add("pressed");
    setTimeout(function(){

        document.querySelector(activeKey).classList.remove("pressed");

    },100);

}