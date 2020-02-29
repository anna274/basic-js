module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw Error;
  }

  let transformedArray = [];

    for(let i = 0; i<arr.length; i++){
        switch(arr[i]){
          case '--discard-next':{
            i++;
            break;
          }
          case '--discard-prev':{
            if(transformedArray.length > 0){
              transformedArray.pop();
            }
            break;
          }
          case '--double-next':{
            if(i < arr.length - 1){
              transformedArray.push(arr[i + 1]);
            } 
            break;
          }
          case '--double-prev':{
            if(i > 0){
              transformedArray.push(arr[i-1]);
            } 
            break;
          }
          default:
            transformedArray.push(arr[i]);
        }
    }
    return transformedArray;
};
