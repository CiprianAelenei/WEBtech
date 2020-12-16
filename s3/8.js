const sampleDictionary=['the', 'quick', 'brown', 'focks']
const sampleString='next read the book'

const checkAcrostic=(input,dictionary)=>{
    const lines=input.split('\n')
    let target=''
    for(const line of lines){
        if(line.trim()){
            target+=line.trim()[0] //trim -> scoate spatiite de la inceput si de la sfarsit dintr-un string
        }
    }
    return dictionary.indexOf(target)!==-1
}
console.log(sampleString,sampleDictionary)