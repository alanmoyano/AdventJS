function organizeGifts(gifts) {
  const organizedGifts = gifts.match(/\d+\w{1}/g)
  let finalStorage = ""

  for (const organizedGift of organizedGifts) {
    let storage = []
    const [quantity, gift] = [organizedGift.slice(0, -1), organizedGift.at(-1)]
    const boxesQuantity = parseInt(quantity / 10)

    storage.push(`[${gift}]`.repeat(boxesQuantity / 5))
    storage.push(`{${gift}}`.repeat(boxesQuantity % 5))

    if (quantity - boxesQuantity * 10 !== 0)
      storage.push(`(${gift.repeat(quantity - boxesQuantity * 10)})`)

    finalStorage += storage.join("")
  }

  return finalStorage
}
