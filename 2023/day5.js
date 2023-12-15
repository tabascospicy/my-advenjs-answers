function cyberReindeer (road,time){
  let roadCleanedCopy = road.replaceAll("S" , ".").split("")
 const iterator = new Array(time).fill(0)
 let stepsMoved = 0
 return iterator.map((_,index)=>{
   const copy = [...roadCleanedCopy]
   copy[stepsMoved] = "S"
   
   if(index === 4){
     roadCleanedCopy = roadCleanedCopy.join("").replaceAll("|" , "*").split("")
   }

   if(!(roadCleanedCopy[stepsMoved + 1] === "|")){
     stepsMoved++
   }
 
   return copy.join("")
 })
 }