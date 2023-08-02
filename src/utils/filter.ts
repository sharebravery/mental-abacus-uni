/*
 * @Author: Ztq
 * @Date: 2023-07-13 15:34:09
 * @LastEditors: Ztq
 * @LastEditTime: 2023-07-13 15:36:07
 * @Description:
 * @FilePath: \action-research-association-h5-uni\src\utils\filter.ts
 */
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export function dateTime(
  value?: string | number | Date | null,
  pattern = 'YYYY-MM-DD HH:mm:ss',
): string | null | undefined {
  const result = dayjs(value).format(pattern)
  if (result === 'Invalid date')
    return null

  return result.replace('00:00:00', '')
}

export function dateMonth(value?: string | number | Date | null, pattern = 'YYYY-MM-DD'): string | null | undefined {
  const result = dayjs(value).format(pattern)
  if (result === 'Invalid date')
    return null

  return result.replace('00:00:00', '')
}

export function nullText(value: string | null, pattern = '--'): string {
  return value || pattern
}
