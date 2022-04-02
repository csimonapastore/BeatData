//  https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  var result = [];
  if((a.length == 0) || (b.length == 0)){
    result = a;
  }else{
    for(var i = 0; i < a.length; i++){
      if(b.indexOf(a[i]) == -1){
        result.push(a[i]);
      }
    }
  }  
  return result;
}