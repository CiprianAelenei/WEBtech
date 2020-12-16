const sampleArray=[1,6,5,4,7,8,3,2]
const sampleTransform=(x)=> x**2
const map=(a,t)=>{
    let result=a
    for(let i=0;i<t.length;i++){
        result[i].push(t(a[i]))
    }
}
console.log(sampleArray,sampleTransform)
const samplePredicate=(e)=>e>3
const filter=(a,p)=>{
    const result=[]
    for(const element of a) {
       if(p(element)){
           result.push(element)
       }
   }
   return result
}
console.log(sampleArray,samplePredicate)