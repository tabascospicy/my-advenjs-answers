function decode(message) {
  const stackAccumulated = [[]]
  for (let letter of message){
 if(letter === "("){
      stackAccumulated.push([])
      continue
    }
    
    if(letter === ")"){
      const last = stackAccumulated.pop().reverse()
      stackAccumulated[stackAccumulated.length - 1].push(...last) 
      continue    
    }
    stackAccumulated[stackAccumulated.length - 1]?.push(letter)
  }
  

  return stackAccumulated?.[0]?.join("") || ""
  }
  