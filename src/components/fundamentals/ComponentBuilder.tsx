'use client'

import { useState } from 'react'

// Example components for the builder
const Button = ({ children, onClick, variant = 'primary' }: { 
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const Card = ({ title, children, className = '' }: {
  title: string
  children: React.ReactNode
  className?: string
}) => (
  <div className={`bg-white border border-gray-200 rounded-lg p-4 shadow-sm ${className}`}>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
)

const Counter = ({ initialValue = 0 }: { initialValue?: number }) => {
  const [count, setCount] = useState(initialValue)
  
  return (
    <div className="text-center">
      <div className="text-2xl font-bold mb-2">{count}</div>
      <div className="space-x-2">
        <Button onClick={() => setCount(count - 1)} variant="secondary">-</Button>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => setCount(0)} variant="danger">Reset</Button>
      </div>
    </div>
  )
}

export default function ComponentBuilder() {
  const [selectedComponent, setSelectedComponent] = useState('button')
  const [componentProps, setComponentProps] = useState({
    text: 'Click me',
    variant: 'primary'
  })

  const components = [
    { id: 'button', name: 'Button', description: 'Interactive button component' },
    { id: 'card', name: 'Card', description: 'Container with title and content' },
    { id: 'counter', name: 'Counter', description: 'Stateful counter component' }
  ]

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'button':
        return (
          <Button 
            variant={componentProps.variant as any}
            onClick={() => alert('Button clicked!')}
          >
            {componentProps.text}
          </Button>
        )
      case 'card':
        return (
          <Card title="Sample Card">
            <p className="text-gray-600">This is a card component with some content inside.</p>
          </Card>
        )
      case 'counter':
        return <Counter />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Component Builder</h2>
        <p className="text-gray-600 mb-6">
          Learn how to create and use React components. Select a component type and see it in action!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Choose a Component</h3>
          <div className="space-y-2">
            {components.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setSelectedComponent(comp.id)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedComponent === comp.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{comp.name}</div>
                <div className="text-sm text-gray-600">{comp.description}</div>
              </button>
            ))}
          </div>

          {selectedComponent === 'button' && (
            <div className="space-y-4">
              <h4 className="font-semibold">Button Properties</h4>
              <div>
                <label className="block text-sm font-medium mb-1">Text</label>
                <input
                  type="text"
                  value={componentProps.text}
                  onChange={(e) => setComponentProps({ ...componentProps, text: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Variant</label>
                <select
                  value={componentProps.variant}
                  onChange={(e) => setComponentProps({ ...componentProps, variant: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="primary">Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="danger">Danger</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Live Preview</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[200px] flex items-center justify-center">
            {renderComponent()}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Concepts:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Components are reusable pieces of UI</li>
          <li>• JSX allows you to write HTML-like syntax in JavaScript</li>
          <li>• Props allow you to pass data to components</li>
          <li>• Components can have internal state using hooks</li>
        </ul>
      </div>
    </div>
  )
}
