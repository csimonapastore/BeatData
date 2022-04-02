//  https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
  var result = [];
  var nElements = signature.length < n ? signature.length : n;
  
  if((n != null) && (n > 0)){   
    
    for (var i=0; i<nElements; i++){
      result.push(signature[i]);
    }   
    
    for(var i=nElements; i<n; i++){
      var sum = 0;
      for (var j=1; j<=nElements; j++){
        sum = sum + result[i-j];
      }
      result.push(sum);
    }
  }
  
  return result;
}