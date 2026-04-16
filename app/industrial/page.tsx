'use client'
import { IndustrialCard } from '@/components/industrial/IndustrialCard'
import { EquipmentSearch } from '@/components/industrial/EquipmentSearch'

export default function IndustrialPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">RuiAI 工业 AI 学习中心</h1>
      <p className="text-gray-500 mb-8">专注工业与制造业的 AI 学习平台</p>

      <div className="flex gap-4 mb-8">
        <IndustrialCard name="车床A" status="running" efficiency={85} />
        <IndustrialCard name="铣床B" status="maintenance" efficiency={45} />
        <IndustrialCard name="钻床C" status="stopped" efficiency={0} />
      </div>

      <EquipmentSearch />
    </div>
  )
}