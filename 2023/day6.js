function maxDistance(movements) {

  // Code here
  
 const movementList  = {
   [">"]:0,
   ["<"]:0,
   ["*"]:0
 }
 
 
 for (let m of movements){
   movementList[m] = ++movementList[m]
 }

 return Math.abs( movementList["<"] - movementList[">"]) + movementList["*"]
}