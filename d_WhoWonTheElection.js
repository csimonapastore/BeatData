//	https://www.codewars.com/kata/554910d77a3582bbe300009c/train/javascript

function getWinner(listOfBallots) {
  var result = null;
  const candidates = [];
  var nVotes = [];
  
  listOfBallots.sort();
  
  const unmodList = listOfBallots;
  candidates.push(unmodList[0]);
  nVotes.push(1);
  var max = 1;
  
  for(var i=1; i<unmodList.length; i++){
    if(unmodList[i] != unmodList[i-1]){        
      candidates.push(unmodList[i]);
      nVotes.push(1);  
    }else{
      nVotes[nVotes.length-1] = nVotes[nVotes.length-1] + 1;
    }
    if(nVotes[nVotes.length-1]>max){
      max = nVotes[nVotes.length-1];
    }
  }
  
  if(max > (listOfBallots.length)/2){
    result = candidates[nVotes.indexOf(max)];
  }
    
  return result;
}