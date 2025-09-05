'use client'

import { useState } from 'react'

export default function EventHandling() {
  const [clickCount, setClickCount] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [inputValue, setInputValue] = useState('')
  const [keyLog, setKeyLog] = useState<string[]>([])

  const handleClick = () => {
    setClickCount(prev => prev + 1)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    setKeyLog(prev => [...prev.slice(-9), `${e.key} (${e.code})`])
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Form submitted with: ${inputValue}`)
  }

  const handleDoubleClick = () => {
    alert('Double clicked!')
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Right click prevented!')
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Event Handling</h2>
        <p className="text-gray-600 mb-6">
          Learn how to handle user interactions with React event handlers. Events are the
          primary way users interact with your application.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Click Events</h3>
            <div className="space-y-4">
              <button
                onClick={handleClick}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Click me! ({clickCount})
              </button>
              
              <button
                onDoubleClick={handleDoubleClick}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Double click me!
              </button>

              <div
                onContextMenu={handleContextMenu}
                className="bg-yellow-100 border border-yellow-300 rounded p-4 cursor-pointer"
              >
                Right click me (context menu prevented)
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Mouse Events</h3>
            <div
              onMouseMove={handleMouseMove}
              className="h-32 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center"
            >
              <p className="text-gray-600">Move your mouse here</p>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              Position: x={mousePosition.x}, y={mousePosition.y}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Form Events</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Text Input</label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Type something..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Submit Form
              </button>
            </form>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Keyboard Events</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Recent keys pressed:</p>
              <div className="h-20 bg-gray-50 rounded p-2 overflow-y-auto">
                {keyLog.length === 0 ? (
                  <p className="text-gray-400 text-sm">No keys pressed yet</p>
                ) : (
                  <div className="space-y-1">
                    {keyLog.map((key, index) => (
                      <div key={index} className="text-xs text-gray-600">
                        {key}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Concepts:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Event handlers are functions that respond to user interactions</li>
          <li>• React uses SyntheticEvent wrapper for cross-browser compatibility</li>
          <li>• Event handlers receive an event object with useful properties</li>
          <li>• Use preventDefault() to stop default browser behavior</li>
          <li>• Event handlers are passed as props to JSX elements</li>
          <li>• Common events: onClick, onChange, onSubmit, onKeyDown, onMouseMove</li>
        </ul>
      </div>
    </div>
  )
}
