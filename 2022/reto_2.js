function countHours(year, holidays) {
  let days = 0

  holidays.forEach((holiday) => {
    let day = new Date(`${holiday}/${year}`).getDay()
    if (day != 0 && day != 6) {
      days++
    }
  })

  return days * 2
}

console.log(countHours("2022", ["01/06", "04/01", "12/25"]))
