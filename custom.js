var time = document.getElementById("countTime").innerText;
var countdown = time * 60 * 1000;
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

console.log(time);

inc.addEventListener("click", (e) => {
    e.preventDefault();
    countdown = (time++) * 60 * 1000;
    $("#countTime").html(countdown / (60*1000));
    console.log("add clicked");
    console.log(time);
});

dec.addEventListener("click", (e) => {
    e.preventDefault();
    countdown = (time--) * 60 * 1000;
    $("#countTime").html(countdown / (60*1000));
    console.log("minus clicked");
    console.log(time);
});

start.addEventListener('click', () => {
    var timerId = setInterval(function(){
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000); 
      
        if (countdown <= 0) {
           alert("Break over!");
           clearInterval(timerId);
        } else {
           $("#countTime").html(min + " : " + sec);
        }

        stop.addEventListener("click", () => {
            clearInterval(timerId);
        });

        reset.addEventListener("click", () => {
            countdown = time * 60 * 1000;
            $("#countTime").html(min + " : " + sec);
        });
      
      }, 1000);
});