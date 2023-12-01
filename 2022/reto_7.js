const a1 = ["bici", "coche", "bici", "bici"]
const a2 = ["coche", "bici", "muñeca", "coche"]
const a3 = ["bici", "pc", "pc"]

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

function getGiftsToRefill(a1, a2, a3) {
  let gifts_to_refill = []

  a1.forEach((gift) => {
    if (
      !(a2.includes(gift) || a3.includes(gift)) &&
      !gifts_to_refill.includes(gift)
    ) {
      gifts_to_refill.push(gift)
    }
  })

  a2.forEach((gift) => {
    if (
      !(a1.includes(gift) || a3.includes(gift)) &&
      !gifts_to_refill.includes(gift)
    ) {
      gifts_to_refill.push(gift)
    }
  })

  a3.forEach((gift) => {
    if (
      !(a2.includes(gift) || a1.includes(gift)) &&
      !gifts_to_refill.includes(gift)
    ) {
      gifts_to_refill.push(gift)
    }
  })

  return gifts_to_refill
}

console.log(gifts)
