'use client'

import { useState } from 'react'
import UseStateExample from '@/components/hooks/UseStateExample'
import UseEffectExample from '@/components/hooks/UseEffectExample'
import UseRefExample from '@/components/hooks/UseRefExample'
import UseMemoExample from '@/components/hooks/UseMemoExample'
import UseCallbackExample from '@/components/hooks/UseCallbackExample'
import CustomHooksExample from '@/components/hooks/CustomHooksExample'

export default function HooksModule() {
  const [activeTab, setActiveTab] = useState('useState')

  const tabs = [
    { id: 'useState', label: 'useState', icon: '🏠' },
    { id: 'useEffect', label: 'useEffect', icon: '⚡' },
    { id: 'useRef', label: 'useRef', icon: '��' },
    { id: 'useMemo', label: 'useMemo', icon: '💾' },
    { id: 'useCallback', label: 'useCallback', icon: '🔄' },
    { id: 'custom', label: 'Custom Hooks', icon: '🛠️' }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Hooks Explorer
        </h1>
        <p className="text-lg text-gray-600">
          Master React hooks through interactive examples and challenges. Hooks let you use
          state and other React features in functional components.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'useState' && <UseStateExample />}
          {activeTab === 'useEffect' && <UseEffectExample />}
          {activeTab === 'useRef' && <UseRefExample />}
          {activeTab === 'useMemo' && <UseMemoExample />}
          {activeTab === 'useCallback' && <UseCallbackExample />}
          {activeTab === 'custom' && <CustomHooksExample />}
        </div>
      </div>
    </div>
  )
}
