// 返回一个n~m的随机数
export function num(n, m) {
  return Math.round(Math.random() * (m - n) + n)
}
