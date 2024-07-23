// Create a function that reverses a string
function rev(str){
  if(!str || str.length < 2 ||typeof str !=='string'){
    return "Not right"
  }

  const arr = []
  let length = str.length -1
  while(length>=0){
    arr.push(str[length])
    length--
  }
  return arr.join(' ')

}

function rev2(str){
  return str.split('').reverse().join(' ')
}

// Using arrow function
const rev3 = str => [...str].reverse().join(' ')

console.log(rev("My name is adnan"))
