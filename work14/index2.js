let time = new Date()
let minutes = seconds = 0;
minutes = 59 - time.getMinutes()
seconds = 59 - time.getSeconds()
let id0 =setInterval(seckill,1000)

function seckill() {
    seconds--
    if(seconds == -1){
        seconds = 59
        minutes--
    } 
    if(minutes == -1){
        minutes = 59
    } 
    document.getElementById('minutes').innerHTML = minutes +'分'
    document.getElementById('seconds').innerHTML = seconds +'秒'
}