function drawGift(size, symbol) {
  const skin = "#";

  if (size <= 1) {
    return `${skin}\n`;
  }
  const middle = size - 2;

  let boxTop = " ".repeat(size - 1) + skin.repeat(size) + "\n";

  for (let i = 0; i < middle; i++) {
    boxTop +=
      " ".repeat(middle - i) +
      skin +
      symbol.repeat(middle) +
      skin +
      symbol.repeat(i) +
      skin +
      "\n";
  }

  const middleBox = skin.repeat(size) + symbol.repeat(middle) + skin + "\n";

  let boxBottom = "";
  for (let i = 0; i < middle; i++) {
    boxBottom +=
      skin +
      symbol.repeat(middle) +
      skin +
      symbol.repeat(middle - i - 1) +
      skin +
      "\n";
  }

  boxBottom += skin.repeat(size) + "\n";

  return `${boxTop}${middleBox}${boxBottom}`;

}