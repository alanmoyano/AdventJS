const gifts = ["cat", "game", "socks"]
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

function wrapping(gifts) {
  return gifts.map((gift) => {
    return (
      "*".repeat(gift.length + 2) +
      `\n*${gift}*\n` +
      "*".repeat(gift.length + 2)
    )
  })
}
