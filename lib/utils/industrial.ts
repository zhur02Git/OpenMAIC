// 设备效率计算
export function calcEfficiency(actual: number, target: number): number {
  return Math.round(actual / target * 100)
}

// 风险等级判断
export function getRiskLevel(efficiency: number): 'low' | 'medium' | 'high' {
  if (efficiency >= 80) return 'low'
  if (efficiency >= 60) return 'medium'
  return 'high'
}