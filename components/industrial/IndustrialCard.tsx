'use client'

interface IndustrialCardProps {
  name: string
  status: 'running' | 'stopped' | 'maintenance'
  efficiency: number
}
const statusColor = {
  running: 'text-green-600',
  stopped: 'text-red-500',
  maintenance: 'text-yellow-500'
}
export function IndustrialCard({ name, status, efficiency }: IndustrialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900">{name}</h3>
<p className={`text-sm mt-1 ${statusColor[status]}`}>状态：{status}</p>
      <p className="text-sm text-gray-500">效率：{efficiency}%</p>
    </div>
  )
}