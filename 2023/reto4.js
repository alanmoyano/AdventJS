function decode(message) {
  let output = ""
  let inverted,
    doubleInverted = false
  let buffer = ""
  let doubleBuffer = ""

  for (const char of message) {
    switch (char) {
      case "(":
        !doubleInverted && !inverted
          ? (inverted = true)
          : (doubleInverted = true)
        break
      case ")":
        if (!doubleInverted && inverted) {
          inverted = false
          output += [...buffer].reverse().join("")
          buffer = ""
        } else {
          doubleInverted = false
          buffer += [...doubleBuffer].reverse().join("")
          doubleBuffer = ""
        }
        break
      default:
        if (!inverted && !doubleInverted) output += char
        else if (inverted && !doubleInverted) buffer += char
        else {
          doubleBuffer += char
        }
        break
    }
  }

  return output
}
