function findFirstRepeated(gifts: number[]): number {
  let repeatedGifts = new Set()
  let result = -1

  for (const gift of gifts) {
    repeatedGifts.has(gift) ? (result = gift) : repeatedGifts.add(gift)
    if (result !== -1) break
  }

  return result
}

const pepe = findFirstRepeated([5, 3, 2, 3, 2, 5, 1])

console.log(pepe)
