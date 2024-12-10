let timer;
let isRunning=false;
let[hours, mins, sec, millisec]=[0,0,0,0]

let Display=document.querySelector(".timer-display")
let startBtn=document.querySelector(".start")
let stopBtn=document.querySelector(".stop")
let resetBtn=document.querySelector(".resetbtn")

startBtn.addEventListener("click", StartTimer)
stopBtn.addEventListener("click", StopTimer)
resetBtn.addEventListener("click", ResetTimer)

function StartTimer(){
    console.log("Iam starting")
    if(!isRunning){
        isRunning=true
        timer=setInterval(UpdateTimer,10)
    }
}
function StopTimer(){
    console.log("Iam stoping")
    if(isRunning){
        isRunning=false
        clearInterval(timer)
    }
}
function ResetTimer(){
    clearInterval(timer)
    // isRunning=false
    millisec=0;
    sec=0;
    mins=0;
    hours=0;
    Display.textContent=`00:00:00:00`
}

function UpdateTimer(){
    millisec=millisec+10
    if(millisec>=1000){
        millisec=0
        sec++
        if(sec>=60){
            sec=0
            mins++
        if(mins>=60){
            mins=0
            hours++
        }
        }
    }
DisplayTimer()
}

function DisplayTimer(){
    Display.textContent=`
    ${String(hours).padStart(2,0)}:
    ${String(mins).padStart(2,0)}:
    ${String(sec).padStart(2,0)}:
    ${String(millisec)}
    `
}
