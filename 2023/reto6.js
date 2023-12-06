function maxDistance(movements) {
  let distance = 0
  for (const movement of movements) {
    switch (movement) {
      case ">":
        distance++
        break
      case "<":
        distance--
        break
      case "*":
        Math.abs(distance + 1) >= Math.abs(distance - 1)
          ? distance++
          : distance--
        break
      default:
        break
    }
  }
  return Math.abs(distance)
}
