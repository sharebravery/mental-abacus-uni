export interface IBead {
  upper: number
  lower: number
}

export class Abacus {
  /**
   *删除数字最后一位
   *
   * @static
   * @param {bigint} number
   * @return {*}  {bigint}
   * @memberof Abacus
   */
  static deleteLastDigit(number: bigint): bigint {
    const numStr = String(number)
    const truncatedStr = numStr.slice(0, -1)
    return BigInt(truncatedStr)
  }

  /**
   *将数字映射为算盘上的珠子
   *
   * @static
   * @param {bigint} number
   * @return {*}
   * @memberof Abacus
   */
  static convertToBeads(number: bigint): IBead[] {
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
