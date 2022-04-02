//	https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
  if (str == null){
    return null;
  }else{
    var arrayStr = str.split("");
    arrayStr.reverse();
    return arrayStr.join("");
  }
  
}