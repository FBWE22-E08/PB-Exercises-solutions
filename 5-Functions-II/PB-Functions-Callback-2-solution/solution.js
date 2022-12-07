function squareNumber(number){
    return number*number
}

function square(array,callback){
    return array.map(num=> callback(num))
}

console.log(square([1,2,3,4,5],squareNumber))