interface IBead {
  upper: number
  lower: number
}

export class Abacus {
  static convertToBeads(number: bigint) {
    if (number < 0)
      throw new Error('Negative numbers are not supported.')

    const numArray = String(number).split('').map(Number)

    const beads = numArray.reduce((prev: IBead[], curr) => {
      prev.push({ upper: Math.floor(curr / 5), lower: curr % 5 })
      return prev
    }, [])

    return beads
  }
}
