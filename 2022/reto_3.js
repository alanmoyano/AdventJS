const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2

function distributeGifts(packOfGifts, reindeers) {
  let gifts_weight = 0
  let reindeer_weight = 0

  packOfGifts.forEach((gift) => {
    gifts_weight += gift.length
  })

  reindeers.forEach((reindeer) => {
    reindeer_weight += reindeer.length * 2
  })

  return Math.floor(reindeer_weight / gifts_weight)
}
