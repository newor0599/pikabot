head = 0;
started = 0;
motor=0;
ultrasonic=0;
button=0;
irline =0;
document.getElementById("head").onclick = function(){
    if(head==0){
        document.getElementById("head").style.height="auto"
        head=1;
    }else{
        document.getElementById("head").style.height = "70px"
        head=0;
    }
    
}

document.getElementById("started").onclick=function(){
    if(started==0){
        document.getElementById("started").style.height="auto";
        started = 1;
    }else{
        document.getElementById("started").style.height="70px"
        started =0;
    }
}

document.getElementById("motor").onclick=function(){
    if(motor==0){
        document.getElementById("motor").style.height="auto"
        motor =1;
    }else{
        document.getElementById("motor").style.height="70px"
        motor =0;
    }
}

document.getElementById("ultrasonic").onclick=function(){
    if (ultrasonic==0){
        document.getElementById("ultrasonic").style.height="auto"
        ultrasonic =1
    }else{
        document.getElementById("ultrasonic").style.height="70px"
        ultrasonic =0
    }
}

document.getElementById("button").onclick=function(){
    if (button==0){
        document.getElementById("button").style.height="auto"
        button = 1
    }else{
        document.getElementById("button").style.height="70px"
        button =0
    }
}
document.getElementById("irline").onclick=function(){
    if (irline==0){
        document.getElementById("irline").style.height="auto"
        irline=1
    }else{
        document.getElementById("irline").style.height="70px"
        irline=0
    }
}
document.getElementById("open").onclick =function(){
    head = 1
    started=1
    motor=1
    ultrasonic=1
    button=1
    irline=1
    document.getElementById("head").style.height="auto"
    document.getElementById("started").style.height="auto";
    document.getElementById("motor").style.height="auto"
    document.getElementById("ultrasonic").style.height="auto"
    document.getElementById("button").style.height="auto"
    document.getElementById("irline").style.height="auto"
}
document.getElementById("close").onclick =function(){
    head = 0
    started=0
    motor=0
    ultrasonic=0
    button=0
    irline=0
    document.getElementById("head").style.height="70px"
    document.getElementById("started").style.height="70px";
    document.getElementById("motor").style.height="70px"
    document.getElementById("ultrasonic").style.height="70px"
    document.getElementById("button").style.height="70px"
    document.getElementById("irline").style.height="70px"
}