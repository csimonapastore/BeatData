//	https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
  var result = 0;  
  
  if((number != null) && (number > 0)){
    
    for(var i=1; i < number; i++){
      if(((i%3)==0) || ((i%5)==0)) {
        result = result + i;
      }
    }    
  }
  
  return result;
}

