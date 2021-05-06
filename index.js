function add(number1,number2){
    let totalAdd = number1+number2
    console.log(totalAdd)
return totalAdd
}

function subtract(number1,number2){
    let totalSub = number1-number2
       console.log(totalSub)
    return totalSub
}
function multiply(number1,number2){
    let totalMul = number1 * number2 
        console.log(totalMul)
     return totalMul
}
 function divide (number1,number2){
     let totalDiv = number1 / number2
     console.log(totalDiv)
     return totalDiv
 }
function increment(number1){
    let totalIncre = number1++;
    let finalIncre = totalIncre+1;
      console.log(totalIncre+1)
      console.log(finalIncre)
    return finalIncre
}
function decrement(number1){
   let totalDecre = number1--;
   let finalDecre = totalDecre-1;
   console.log(totalDecre-1)
   console.log(finalDecre)
   return finalDecre 
}
function makeInt(n){
    let finalNum = parseInt(n, 10);
    console.log(parseInt(`n`))
    return finalNum
}
function preserveDecimal(n){
    let finalDec = parseFloat(n);
    console.log(parseFloat(`n`))
     return finalDec
}