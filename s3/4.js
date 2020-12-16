const sampleString='this, this is my text'
const getCounts=(input)=>{
    const result={}
    const words=input.split(/'[\s,]'/)
    for(const word of words){
        if(word in result){
            result[word]++
            
        }else{
            result[word]=1
        }
    }
    for(const word of words){
        result[word]=result[word]/words.length
    }
    return result
}
console.log(getCounts(sampleString))