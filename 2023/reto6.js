function maxDistance(movements) {
  let [right, left, joker] = [0, 0, 0]

  for (const movement of movements) {
    if (movement === ">") right++
    if (movement === "<") left++
    if (movement === "*") joker++
  }

  return Math.abs(right - left) + joker
}
