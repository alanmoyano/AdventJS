function revealSabotage(store) {
  const cloneArray = (items) =>
    items.map((item) => (Array.isArray(item) ? cloneArray(item) : item))

  const result = cloneArray(store)

  for (let fila = 0; fila < store.length; fila++) {
    for (let columna = 0; columna < store[0].length; columna++) {
      let count = 0
      const actual = store[fila][columna]
      // izquierda y derecha
      if (store?.[fila]?.[columna + 1] === "*") count++
      if (store?.[fila]?.[columna - 1] === "*") count++
      // arriba y abajo
      if (store?.[fila + 1]?.[columna] === "*") count++
      if (store?.[fila - 1]?.[columna] === "*") count++
      //diagonales
      if (store?.[fila + 1]?.[columna + 1] === "*") count++
      if (store?.[fila + 1]?.[columna - 1] === "*") count++
      if (store?.[fila - 1]?.[columna + 1] === "*") count++
      if (store?.[fila - 1]?.[columna - 1] === "*") count++
      result[fila][columna] = `${actual === "*" ? actual : count ? count : " "}`
    }
  }

  return result
}

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
