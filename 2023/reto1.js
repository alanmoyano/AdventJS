function findFirstRepeated(gifts) {
  let repeatedGifts = new Set()

  for (let i = 0; i < gifts.length; i++) {
    if (repeatedGifts.has(gifts[i])) return gifts[i]
    repeatedGifts.add(gifts[i])
  }

  return -1
}
