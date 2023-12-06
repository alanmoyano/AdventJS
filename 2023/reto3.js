function findNaughtyStep(original, modified) {
  let bigger, smaller

  if (original.length > modified.length) {
    bigger = original
    smaller = modified
  } else {
    bigger = modified
    smaller = original
  }

  return (
    bigger.split("").find((letter, index) => smaller[index] != letter) ?? ""
  )
}
