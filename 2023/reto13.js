function calculateTime(deliveries) {
  let time = [0, 0, 0]
  let totalSeconds = 0

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(":")
    totalSeconds +=
      Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600
  }
  const difference = 7 * 3600 - totalSeconds

  time[0] = Math.abs(Math.trunc(difference / 3600))
  time[1] = Math.abs(Math.trunc((difference % 3600) / 60))
  time[2] = Math.abs(Math.trunc((difference % 3600) % 60))

  return `${difference > 0 ? "-" : ""}${time
    .map((num) => num.toString().padStart(2, "0"))
    .join(":")}`
}
