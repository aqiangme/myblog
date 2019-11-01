// 返回一个n~m的随机数
export function num(n, m) {
  return Math.round(Math.random() * (m - n) + n)
}
// 返回 YYYY-MM-DD 的字符串
export function parseDate(year, month, day) {
  const YYYY = year
  let MM = month
  let DD = day
  if (MM < 10) MM = '0' + MM
  if (DD < 10) DD = '0' + DD
  return YYYY + '-' + MM + '-' + DD
}
