//prompt the user  to input the speed

const speedMonitor = require('prompt-sync')
const prompt = speedMonitor();
// if else inside a function
function speedGovernor(){
    let speed = prompt("Ask for speed ?");
    if (speed <= 70){
        console.log("Ok");
    }
    else if (speed > 70 && speed <= 130){
        let demeritPoint = (speed-70)/5;
        console.log(`points: ${demeritPoint}`);
    }
    else{
        console.log("license suspended")
    }
}
// call out the function
speedGovernor()