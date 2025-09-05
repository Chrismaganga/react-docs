'use client'

import { useState } from 'react'
import ComponentBuilder from '@/components/fundamentals/ComponentBuilder'
import PropsExample from '@/components/fundamentals/PropsExample'
import StateExample from '@/components/fundamentals/StateExample'
import EventHandling from '@/components/fundamentals/EventHandling'
import ConditionalRendering from '@/components/fundamentals/ConditionalRendering'
import ListsAndKeys from '@/components/fundamentals/ListsAndKeys'

export default function FundamentalsModule() {
  const [activeTab, setActiveTab] = useState('components')

  const tabs = [
    { id: 'components', label: 'Components & JSX', icon: '🧱' },
    { id: 'props', label: 'Props', icon: '📦' },
    { id: 'state', label: 'State', icon: '🏠' },
    { id: 'events', label: 'Events', icon: '👆' },
    { id: 'conditional', label: 'Conditional Rendering', icon: '❓' },
    { id: 'lists', label: 'Lists & Keys', icon: '📋' }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          React Fundamentals Playground
        </h1>
        <p className="text-lg text-gray-600">
          Learn the core concepts of React through interactive examples and hands-on building.
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
          {activeTab === 'components' && <ComponentBuilder />}
          {activeTab === 'props' && <PropsExample />}
          {activeTab === 'state' && <StateExample />}
          {activeTab === 'events' && <EventHandling />}
          {activeTab === 'conditional' && <ConditionalRendering />}
          {activeTab === 'lists' && <ListsAndKeys />}
        </div>
      </div>
    </div>
  )
}
