const  createBase = (x) => {
    return function(y){
        return x+y 
        
    }
}
const addSix = createBase(6);
const anony =()=>({x:addSix,y:10})
console.log(addSix(10))// returns 16
console.log(addSix(21)) // returns 27

            