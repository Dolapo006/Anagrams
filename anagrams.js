const anagrams = (str1, str2) => {
    let str1Idx= {};
    let str2Idx = {};
    for(let s of str1.toLowerCase()) {
      str1Idx[s] = str1Idx[s] + 1 || 1;
    }
    for(let s of str2.toLowerCase()){
      str2Idx[s] = str2Idx[s] + 1 || 1;
    }
  
    if(Object.keys(str1Idx).length !== Object.keys(str2Idx).length) {
      return false;
    }
  
    for(let item in str1Idx){
      if(str1Idx[item] !== str2Idx[item]){
        return false;
      }
    }
  
    return true;
  }
  
  function anagramsSort(stringA, stringB) {
    let array1 = stringA.toLowerCase().split('').sort().filter(char => char.match(/[a-zA-z]/)).join('');
    let array2 = stringB.toLowerCase().split('').sort().filter(char => char.match(/[a-zA-z]/)).join('');
  
    return array1 === array2;
  }


  console.log(anagrams)
  
  anagrams('rail safety', 'fairy tales') 
  anagrams('RAIL! SAFETY!', 'fairy tales') 
  anagrams('Hi there', 'Bye there') 
 