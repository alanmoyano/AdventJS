function adjustLights(lights) {
  let nice = 0
  let wrong = 0

  for (let i = 0; i < lights.length; i++) {
    if (i % 2 === 0) {
      lights[i] === lights[0] ? nice++ : wrong++
    } else {
      lights[i] !== lights[0] ? nice++ : wrong++
    }
  }
  return Math.min(nice, wrong)
}
