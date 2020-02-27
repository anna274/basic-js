module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turn =  Math.pow(2, disksNumber) - 1;
  
    return {
        turns: turn,
        seconds: turn / (turnsSpeed / 3600),
    };
}