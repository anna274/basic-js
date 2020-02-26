module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let dreamTeam = members.reduce(function(result, current){
    if(current == null || current == undefined || typeof(current) != 'string'){
      return result;
    }
    return result + current.trim()[0].toUpperCase();
  },'');

  return dreamTeam.split('').sort().join('');
};