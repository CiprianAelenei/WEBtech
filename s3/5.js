const sampleString='the quick, brown tjnjynhjtynhjnyhnyjh'
const getCounts=(input)=>{
    const result={}
    const punctuation=['',',']
    for(const letter of input){
        if(punctuation.indexOf(letter)=== -1){
        if(letter in result){
            result[letter]++
            
        }else{
            result[letter]=1
        }
    }
    }
    for(const letter of input){
        result[letter]=result[letter]/input.length
    }
    return result
}
console.log(getCounts(sampleString))