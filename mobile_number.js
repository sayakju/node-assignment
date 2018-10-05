function possibleMobileNumbers(digits, reserved) { 
  reserved.sort(function(a,b){return a.localeCompare(b); });
  let reservedMap = reserved.reduce(function(map, reservedItem) {
    map[reservedItem] = true;
    return map;
  }, {});
  for(let i=0; i<reserved.length-1; i++){
    if(reservedMap[reserved[i]]){
      for(let j=i+1;j<reserved.length; j++){
        if(reservedMap[reserved[j]]){
          if (reserved[j] != reserved[i] && reserved[j].indexOf(reserved[i]) === 0) {
            delete reservedMap[reserved[j]];
          }
        }
      }
    }
  }
  let mapKeys = Object.keys(reservedMap);
  let a = 0;
  Array.isArray(mapKeys) && mapKeys.forEach(element => {
    if (typeof element == 'string' || element instanceof String) {
      a += Math.pow(10, digits - element.length);
    }
  });
  return Math.pow(10, digits)-a;
} 
console.log(possibleMobileNumbers(7, [ "0", "2", "100" ]));
console.log(possibleMobileNumbers(6, [ "1", "2", "3" , "301"]));
console.log(possibleMobileNumbers(3, [ "411"]));
console.log(possibleMobileNumbers(7, [ "0", "2", "100", "200", "100" ]));