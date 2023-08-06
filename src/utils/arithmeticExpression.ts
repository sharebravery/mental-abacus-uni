export enum QuestionType {
  综合,
  连加,
  连减,
}

export class AddAndSubtractCondition {
  /**
   *最小位
   *
   * @type {number}
   * @memberof AddAndSubtractCondition
   */
  minDigits: number = 1
  /**
   *最大位
   *
   * @type {number}
   * @memberof AddAndSubtractCondition
   */
  maxDigits: number = 1
  /**
   *小数位数
   *
   * @type {number}
   * @memberof AddAndSubtractCondition
   */
  decimalCount: number = 0
  /**
   *题型
   *
   * @type {QuestionType}
   * @memberof AddAndSubtractCondition
   */
  type: QuestionType = QuestionType.综合
  /**
   *笔数
   *
   * @type {number}
   * @memberof AddAndSubtractCondition
   */
  strokeCount: number = 2
  /**
   *首笔位数
   *
   * @type {number}
   * @memberof AddAndSubtractCondition
   */
  firstDigits: number = 1
}

const arithmeticExpression = {
  满五加: [[4, 1], [4, 2], [4, 3], [4, 4], [3, 2], [3, 3]],
  破五减: [[5, -1], [5, -2], [5, -4], [6, -2], [6, -3], [6, -4], [7, -3], [7, -4], [8, -4]],
}

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 *随机正负
 *
 * @export
 * @return {*}  {boolean}
 */
export function getRandomBoolean(): boolean {
  return Math.random() < 0.5
}

/**
 *根据位数生成范围内的正负数
 *
 * @export
 * @param {number} digits
 * @param {boolean} [positiveOnly=false]
 * @return {*}  {number}
 */
export function getRandomNumberByDigit(digits: number, positiveOnly: boolean = true): number {
  if (digits <= 0)
    throw new Error('Number of digits must be greater than 0.')

  const min = 10 ** (digits - 1)
  const max = 10 ** digits - 1

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

  if (!positiveOnly) {
    randomNumber *= -1
  }
  else {
    // Generate only positive numbers
    randomNumber = Math.abs(randomNumber)
  }

  return randomNumber
}

/**
 *找出绝对值最大的数
 *
 * @export
 * @param {number[]} arr
 * @return {*}  {number[]}
 */
export function moveMaxAbsoluteToFront(arr: number[]): number[] {
  if (arr.length <= 1) {
    // Array has 0 or 1 element, no need to move anything
    return arr.slice() // Return a copy of the original array
  }

  const sortedArray = arr.slice().sort((a, b) => Math.abs(b) - Math.abs(a))

  // Find the first occurrence of maxAbsoluteValue in sortedArray
  const maxIndex = arr.findIndex(num => Math.abs(num) === Math.abs(sortedArray[0]))

  // Create a new array with maxAbsoluteValue moved to the front
  const newArray = [...sortedArray.slice(0, maxIndex), ...arr.slice(maxIndex)]
  return newArray
}

/**
 *生成算式
 *
 * @export
 * @param {AddAndSubtractCondition} condition
 */
export function generateArithmeticExpression(condition: AddAndSubtractCondition) {
  const expression = []
  for (let i = 0; i < condition.strokeCount; i++) {
    let num = 0

    let numType = getRandomBoolean()

    if (condition.type === QuestionType.连加)
      numType = true
    if (condition.type === QuestionType.连减)
      numType = false

    if (getRandomBoolean())
      num = getRandomNumberByDigit(condition.minDigits, numType)
    else
      num = getRandomNumberByDigit(condition.maxDigits, numType)

    expression.push(num)
  }

  // const [first] = moveMaxAbsoluteToFront(numList)

  // 首笔位数
  const first = getRandomNumberByDigit(condition.firstDigits)

  expression[0] = first
  console.log('%c [ numList ]-154', 'font-size:13px; background:#32fd0b; color:#76ff4f;', expression)
}
