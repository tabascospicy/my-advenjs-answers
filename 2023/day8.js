function organizeGifts(gifts) { 
  const giftsList = gifts.match(/\d*\w/g)


  let acummulated = ""

  for (let gift of giftsList){
    let singleGiftString = ""
    const giftName = gift.at(-1)
    const giftQuantity = gift.slice(0,-1)
    
    let counter = +giftQuantity
    const palets = Math.floor(counter / 50)
    const cajas = Math.floor((counter - palets * 50) / 10)
    const unidades = Math.floor(counter - palets * 50 - cajas * 10)
    const paletsName = `[${giftName}]`.repeat(palets)
    const cajasName =`{${giftName}}`.repeat(cajas) 
    
    singleGiftString = unidades ? `(${giftName.repeat(unidades)})` : ""
    acummulated = `${acummulated}${paletsName}${cajasName}${singleGiftString}`
  }
  

  
  return acummulated
}
