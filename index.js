const EXPECTED_MINUTES_IN_OVEN = 40

function remainingMinutesInOven(elappsed){
    return EXPECTED_MINUTES_IN_OVEN - elappsed
}

function preparationTimeInMinutes(layer){
    return layer * 2
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}

console.log(remainingMinutesInOven(32), preparationTimeInMinutes(3), totalTimeInMinutes(3, 32))