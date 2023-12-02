function manufacture(gifts, materials) {
  const mats = materials.split("")

  return gifts.filter((gift) =>
    gift.split("").every((letter) => mats.includes(letter))
  )
}
