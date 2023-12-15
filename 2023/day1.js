function findFirstRepeated(gifts) {
  // Code here
 const numbersRegistered  = []

 const result = gifts?.find((curr)=>{
   const exist = numbersRegistered.includes(curr)
   numbersRegistered.push(curr)
   
   return exist
 })
 
return typeof result === "number" ? result : -1

}
