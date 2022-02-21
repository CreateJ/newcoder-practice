function solve (s, t) {
  // write code here
  const result = []
  if (s.length === 0) return t
  if (t.length === 0) return s
  let temp = 0
  s = s.split('')
  t = t.split('')
  let st = 0
  let tt = 0
  while (s.length || t.length) {
    st = s.pop() || 0
    tt = t.pop() || 0
    temp += parseInt(st) + parseInt(tt)
    result.unshift((temp % 10).toString())
    temp = Math.floor(temp / 10)
  }
  if (temp > 0) result.unshift(temp.toString())
  return result.join('')
}

// 思路: 简单的从后往前计算即可
// 出错位置1：line14 temp不是每次刷新，而是需要跟后面的两位数字相加
// 出错位置2：line16 无论是否超过10，都需要除以10取整

console.log(solve('733064366', '459309139'))
module.exports = {
  solve: solve
}
