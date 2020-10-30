var countdown = 30 * 60 * 1000;
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

start.addEventListener('click', () => {
    var timerId = setInterval(function(){
        countdown -= 1000 ;
        var min = Math.floor(countdown/ (60 * 1000));
        var sec = Math.floor( (countdown - min * 60 * 1000) / 1000 );

        if(countdown <= 0) {
            alert("Break over!");
            clearInterval(timerId);
        }
        else{
            $("#countTime").html(min + ":" + sec);
        }

        stop.addEventListener("click", () => {
            clearInterval(timerId);
        });

        reset.addEventListener("click", () => {
            countdown = 30 * 60 * 1000;
            $("#countTime").html(min + ":" + sec);
        })
    }, 1000);
});