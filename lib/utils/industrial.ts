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

interface EquipmentData {
  name: string
  efficiency: number
  status: 'running' | 'stopped' | 'maintenance'
}

export function formatIndustrialReport(data: EquipmentData[]): string {
  if (data.length === 0) {
    return '暂无设备数据'
  }

  const total = data.length
  const avgEfficiency = Math.round(
    data.reduce((sum, eq) => sum + eq.efficiency, 0) / total
  )
  const problemEquipment = data.filter(eq => eq.efficiency < 60)

  let report = `=== 工业设备报告 ===\n`
  report += `设备总数：${total} 台\n`
  report += `平均效率：${avgEfficiency}%\n`

  if (problemEquipment.length > 0) {
    report += `需要关注：${problemEquipment.map(eq => eq.name).join('、')}\n`
  } else {
    report += `所有设备运行正常\n`
  }

  report += `\n设备明细：\n`
  data.forEach(eq => {
    report += `- ${eq.name}：效率 ${eq.efficiency}%，状态 ${eq.status}\n`
  })

  return report
}