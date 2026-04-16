'use client'
import { useState } from 'react'

const allEquipment = [
  { name: "车床A", status: "running", efficiency: 85 },
  { name: "铣床B", status: "maintenance", efficiency: 45 },
  { name: "钻床C", status: "stopped", efficiency: 0 },
  { name: "焊机D", status: "running", efficiency: 92 },
  { name: "压机E", status: "running", efficiency: 78 },
]

export function EquipmentSearch() {
  const [query, setQuery] = useState('')

  const filtered = allEquipment.filter(eq =>
    eq.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="mt-6 w-full max-w-md">
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
          placeholder="搜索设备名称..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <button
            className="px-3 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => setQuery('')}
          >
            清空
          </button>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {filtered.map(eq => (
          <div key={eq.name} className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm">
            <span className="font-medium">{eq.name}</span>
            <span className="ml-2 text-gray-400">效率 {eq.efficiency}%</span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-gray-400">没有找到匹配的设备</p>
        )}
      </div>
    </div>
  )
}