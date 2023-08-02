/*
 * @Description:
 * @Author: 景 彡
 * @Date: 2023-07-12 09:04:05
 * @LastEditors: 景 彡
 */
/**
 *viewModel to editModel
 *
 * @export
 * @template T
 * @template U
 * @param {T} source
 * @param {(U & any)} target
 * @return {*}  {T}
 */
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export function assignIfExist<T extends object, U extends object>(source: T, target: U & any): T {
  for (const key in source) {
    if (target[key] === undefined)
      continue
    source[key] = target[key]
  }
  return source
}

export function enum2Array<T>(enumData: T): { text: string | number; value: string }[] {
  const data: any[] = []
  const regPos = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/
  for (const key in enumData) {
    if (!regPos.test(key))
      data.push({ value: enumData[key], text: key })
  }
  return data
}

export default function dateTime(value: Date | string | number, pattern = 'YYYY-MM-DD HH:mm:ss'): string | null {
  const result = dayjs(value).format(pattern)
  if (result === 'Invalid date')
    return null

  return result.replace('00:00:00', '')
}
