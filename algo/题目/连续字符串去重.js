// adfgggglikaf => adfglikaf
function _(str) {
  let result = '';
  for(let i = 0 ;i < str.length;i++){
    if (str[i] === str[i + 1]){
      continue;
    }else {
      result += str[i];
    }
  }
  return result;
}