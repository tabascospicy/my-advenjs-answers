function manufacture(gifts, materials) {
  // Code here
  return gifts?.filter((gift)=>gift.split("").every((letter)=>materials.includes(letter))) || []
}