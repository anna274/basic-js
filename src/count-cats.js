module.exports = function countCats(matrix) {

  let catsNumber = 0;

  for(let i =0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == NaN || matrix[i][j] == undefined || matrix[i][j] == true || matrix[i][j] == false){
        continue;
      }
      if(matrix[i][j] == '^^'){
        catsNumber++;
      }
    }
  }
  return catsNumber;
};
