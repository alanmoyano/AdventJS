function findFirstRepeated(gifts) {
  let repeatedGifts = new Set()
  let result = -1

  for (let gift of gifts) {
    repeatedGifts.has(gift) ? (result = gift) : repeatedGifts.add(gift)
    if (result !== -1) break
  }

  return result
}
