

const EXPECTED_MINUTES_IN_OVEN = 40;


function remainingMinutesInOven (num) {
    const reimingtime = EXPECTED_MINUTES_IN_OVEN - num;
    return console.log(`falta ${reimingtime}` )
}

function preparationTimeInMinutes (layers) {
    const numberLayers = layers * 2;
    return console.log(`são ${numberLayers} camadas`)
}

function totalTimeInMinutes (lay, timerest) {
    const  numberLay= lay * 2; 
    const  timeTotal = timerest + numberLay
    
    return console.log(timeTotal) 
}

remainingMinutesInOven(30);
preparationTimeInMinutes(2);
totalTimeInMinutes(3,20);