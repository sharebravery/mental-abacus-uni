export enum ExpressionType {
  综合,
  直加直减,
  满五加,
  破五减,
  进位加,
  退位减,
  破五进位加,
  退位满五减,
}

export enum QuestionType {
  综合,
  连加,
  连减,
}

export class AddAndSubtractOptions {
  /**
   *算式类型
   *
   * @type {ExpressionType}
   * @memberof AddAndSubtractOptions
   */
  expressionType: ExpressionType = ExpressionType.综合
  /**
   *最小位
   *
   * @type {number}
   * @memberof AddAndSubtractOptions
   */
  minDigits: number = 1
  /**
   *最大位
   *
   * @type {number}
   * @memberof AddAndSubtractOptions
   */
  maxDigits: number = 1
  // /**
  //  *小数位数
  //  *
  //  * @type {number}
  //  * @memberof AddAndSubtractOptions
  //  */
  // decimalCount: number = 0
  /**
   *题型
   *
   * @type {QuestionType}
   * @memberof AddAndSubtractOptions
   */
  questionType: QuestionType = QuestionType.综合
  /**
   *笔数
   *
   * @type {number}
   * @memberof AddAndSubtractOptions
   */
  strokeCount: number = 2
  /**
   *首笔位数
   *
   * @type {number}
   * @memberof AddAndSubtractOptions
   */
  firstDigits: number = 1
}

export const arithmeticExpression = {
  [ExpressionType.满五加]: [[4, 1], [3, 2], [4, 2], [2, 3], [3, 3], [4, 3], [1, 4], [2, 4], [3, 4], [4, 4]],
  [ExpressionType.破五减]: [[5, -1], [5, -2], [6, -2], [5, -3], [6, -3], [7, -3], [5, -4], [6, -4], [7, -4], [8, -4]],
  [ExpressionType.进位加]: [[1, 9], [2, 9], [3, 9], [4, 9], [6, 9], [7, 9], [8, 9], [9, 9], [2, 8], [3, 8], [4, 8], [7, 8], [8, 8], [9, 8], [3, 7], [4, 7], [8, 7], [9, 7], [4, 6], [9, 6], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [6, 4], [7, 4], [8, 4], [9, 4], [7, 3], [8, 3], [9, 3], [8, 2], [9, 2], [9, 1]],
  [ExpressionType.退位减]: [[10, -9], [11, -9], [12, -9], [13, -9], [15, -9], [16, -9], [17, -9], [18, -9], [10, -8], [11, -8], [12, -8], [15, -8], [16, -8], [17, -8], [10, -7], [11, -7], [15, -7], [16, -7], [10, -6], [15, -6], [10, -5], [11, -5], [12, -5], [13, -5], [14, -5], [10, -4], [11, -4], [12, -4], [13, -4], [10, -3], [11, -3], [12, -3], [10, -2], [11, -2], [10, -1]],
  [ExpressionType.破五进位加]: [[5, 9], [5, 8], [5, 7], [5, 6], [6, 8], [6, 7], [6, 6], [6, 5], [7, 7], [7, 6], [8, 6]],
  [ExpressionType.退位满五减]: [[11, -6], [12, -6], [13, -6], [14, -6], [12, -7], [13, -7], [14, -7], [13, -8], [14, -8], [14, -9]],
} as Record<ExpressionType, Array<[number, number]>>

/**
 *随机正整数 包含min、max本身
 *
 * @export
 * @param {number} min
 * @param {number} max
 * @return {*}  {number}
 */
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
 * @param {boolean} [positiveOnly=true]
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

export function replaceCharacterWithString(str: string, char: number | string, minIndex: number): string {
  str = str.replace('-', '')
  minIndex = str.length === 1 ? 0 : minIndex

  const resultArray = str.split('')
  resultArray.splice(minIndex, 1, String(char))

  let result = resultArray.join('')

  result.includes('-') && (result = `-${result.replace('-', '')}`)

  return result
}

/**
 * 替换表达式中的数字
 *
 * @param {number} digits 位数
 * @param {ExpressionType} expressionType 表达式类型
 * @param {number[]} expression 原表达式
 * @returns {number[]} 替换后的表达式
 */
export function replaceNumbersWithExpression(digits: number, expressionType: ExpressionType, expression: number[]): number[] {
  const expressionTypeArray = arithmeticExpression[expressionType]

  const [first, second] = expressionTypeArray[getRandomInt(0, arithmeticExpression[expressionType].length - 1)]

  let randomIndex = getRandomInt(0, digits - 1)

  randomIndex = randomIndex - 1 < 0 ? randomIndex : randomIndex - 1

  const secondIndex = randomIndex + 1 // 保证算式按照顺序

  const minDigits = Math.min((String(expression[randomIndex]).replace('-', '')).length - 1, (String(expression[secondIndex]).replace('-', '')).length - 1)

  const res1 = replaceCharacterWithString(String(expression[randomIndex]), first, minDigits)

  const res2 = replaceCharacterWithString(String(expression[secondIndex]), second, minDigits)

  expression[randomIndex] = Number(res1)

  expression[secondIndex] = Number(res2)

  return expression
}

/**
 *生成加减算算式
 *
 * @export
 * @param {AddAndSubtractOptions} options
 * @return {*}  {number[]}
 */
export function generateAdditionOrSubtractionExpression(options: AddAndSubtractOptions): number[] {
  if (options.strokeCount < 2)
    throw new Error('Error: strokeCount must be at least 2')

  if (options.firstDigits > options.strokeCount)
    throw new Error('Error: firstDigits must be at least strokeCount')

  if (options.expressionType === ExpressionType.综合)
    options.expressionType = getRandomInt(ExpressionType.综合 + 1, ExpressionType.退位满五减)

  const expression = []
  for (let i = 0; i < options.strokeCount; i++) {
    let num = 0

    let positiveOrNegative = getRandomBoolean() // 数字正负

    if (options.questionType === QuestionType.连加 || [ExpressionType.满五加, ExpressionType.进位加, ExpressionType.破五进位加].includes(options.expressionType))
      positiveOrNegative = true
    if (options.questionType === QuestionType.连减 || [ExpressionType.破五减, ExpressionType.退位减, ExpressionType.破五减, ExpressionType.退位满五减].includes(options.expressionType))
      positiveOrNegative = false

    num = getRandomNumberByDigit(getRandomInt(options.minDigits, options.maxDigits), positiveOrNegative) // 最大位、最小位

    expression.push(num)
  }

  const first = getRandomNumberByDigit(options.firstDigits) // 首笔位数
  expression[0] = first

  replaceNumbersWithExpression(options.maxDigits, options.expressionType, expression) // 插入七个模块的式子

  // expression[0] = expression[0] * (10 ** (options.firstDigits - 1))
  return expression
}

export class ExpressionItem {
  /**
   *位数
   *
   * @type {number}
   * @memberof ExpressionItem
   */
  digits: number = 0

  /**
   *小数位数
   *
   * @memberof ExpressionItem
   */
  // decimalDigits = 0

  /**
   *指定的数字数组 数组长度大于0即从该数组随机一个数字作为乘数（或者被乘数）
   *
   * @type {Array<number>}
   * @memberof ExpressionItem
   */
  specifiedNumbers: Array<number> = []
}

export class MultiplicationOptions {
  /**
   *被乘数
   *
   * @type {number}
   * @memberof MultiplicationOptions
   */
  multiplicand = new ExpressionItem()

  /**
   *乘数
   *
   * @type {number}
   * @memberof MultiplicationOptions
   */
  multiplier = new ExpressionItem()
}

/**
 *生成乘法算式
 *
 * @export
 * @param {MultiplicationOptions} options
 * @return {*}  {[number, number]}
 */
export function generateMultiplicationExpression(options: MultiplicationOptions): [number, number] {
  const positiveOrNegative = true
  const multiplicand = getRandomNumberByDigit(getRandomInt(1, options.multiplicand.digits), positiveOrNegative)

  let multiplier = 0

  if (options.multiplier.specifiedNumbers.length > 0) {
    const randomIndex = getRandomInt(0, options.multiplier.specifiedNumbers.length - 1)
    multiplier = options.multiplier.specifiedNumbers[randomIndex]
  }
  else {
    multiplier = getRandomNumberByDigit(getRandomInt(1, options.multiplier.digits), positiveOrNegative)
  }

  return [multiplicand, multiplier]
}

export enum DivisionType {
  自助除算1 = 1,
  自助除算2,
  一口清,
  估首商,
}

export class DivisionOptions {
  /**
   *除算类型
   *
   * @memberof DivisionOptions
   */
  type = DivisionType.自助除算1

  /**
   *被除数
   *
   * @memberof DivisionOptions
   */
  dividend = new ExpressionItem()

  /**
   *除数
   *
   * @memberof DivisionOptions
   */
  divisor = new ExpressionItem()

  /**
   *商
   *
   * @memberof DivisionOptions
   */
  quotient = new ExpressionItem()

  /**
     *是否整除(自助除算1使用)
    *
    * @memberof DivisionOptions
    */
  isDivisible = true
}

function getNonDivisiblePairDivisor(dividend: number, divisor: number): number {
  do {
    if (dividend % 2 === 0)
      divisor = divisor % 2 === 0 ? divisor + 1 : divisor + 2
    else divisor = divisor % 2 === 0 ? divisor + 2 : divisor + 1
  }
  while (dividend % divisor === 0)

  return divisor
}

export function generateDivisionExpression(options: DivisionOptions): [number, number] {
  if (options.dividend.digits <= 0 || options.divisor.digits <= 0)
    throw new Error('位数必须大于0')

  const funcs = {
    [DivisionType.自助除算1]: (): [number, number] => {
      let divisor = getRandomNumberByDigit(getRandomInt(1, options.divisor.digits))

      const minMultiplier = 10 ** (options.dividend.digits - options.divisor.digits)
      const maxMultiplier = 10 ** options.dividend.digits - 1
      const multiplier = getRandomInt(minMultiplier, maxMultiplier)
      let dividend = divisor * multiplier

      if (!options.isDivisible)
        divisor = getNonDivisiblePairDivisor(dividend, divisor)

      // 调整 dividend 的位数
      const targetDividendDigits = options.dividend.digits
      const dividendDigits = Math.floor(Math.log10(dividend)) + 1
      if (dividendDigits > targetDividendDigits) {
        const divisorPower = 10 ** (dividendDigits - targetDividendDigits)
        dividend = Math.floor(dividend / divisorPower)
      }

      return [Number.parseInt(String(dividend)), Number.parseInt(String(divisor))]
    },
  }

  const result = funcs[options.type as keyof typeof funcs]()

  return result
}

// const isCorrect = dividend % divisor === 0

/**
 *算式生成
 *
 * @export
 * @class GenerateArithmeticExpression
 */
export class GenerateArithmeticExpression {
/**
 *生成加减法算式
 *
 * @static
 * @memberof GenerateArithmeticExpression
 */
  static generateAdditionOrSubtractionExpression = generateAdditionOrSubtractionExpression

  /**
 *生成乘法算式
 *
 * @static
 * @memberof GenerateArithmeticExpression
 */
  static generateMultiplicationExpression = generateMultiplicationExpression

  /**
   *生成除法算式
   *
   * @static
   * @memberof GenerateArithmeticExpression
   */
  static generateDivisionExpression = generateDivisionExpression
}
