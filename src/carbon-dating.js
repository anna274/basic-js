const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity == undefined || typeof(sampleActivity) != 'string' || 
    sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || /[^0-9.]/.test(sampleActivity)){
    return false; 
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))*HALF_LIFE_PERIOD / 0.693);
};
