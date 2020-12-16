const fib=(index)=>{
    switch(index){
        case 0:
        case 1:
            return fib(index)=1;
        default:
            return fib(index-1)+fib(index-2)
        
    }    
}
console.log(fib(3))
console.log(fib(5))
console.log(fib(8))
// if(process.argv.length<3){
//     console.log('usage:node')
// }