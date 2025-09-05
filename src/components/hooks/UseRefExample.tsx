'use client'

import { useState, useRef, useEffect } from 'react'

export default function UseRefExample() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const countRef = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const previousCountRef = useRef<number>()

  // Update ref without causing re-render
  const incrementRef = () => {
    countRef.current += 1
    console.log('Ref count:', countRef.current)
  }

  // Focus input using ref
  const focusInput = () => {
    inputRef.current?.focus()
  }

  // Track previous value
  useEffect(() => {
    previousCountRef.current = count
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">useRef Hook</h2>
        <p className="text-gray-600 mb-6">
          useRef returns a mutable ref object that persists for the full lifetime of the component.
          It's useful for accessing DOM elements and storing mutable values without causing re-renders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Mutable Values</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">{count}</div>
              <div className="text-sm text-gray-600">State Count (causes re-render)</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">{countRef.current}</div>
              <div className="text-sm text-gray-600">Ref Count (no re-render)</div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => setCount(count + 1)}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Increment State
              </button>
              <button
                onClick={incrementRef}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              >
                Increment Ref
              </button>
            </div>

            <div className="text-xs text-gray-500 text-center">
              Check console to see ref value updates
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">DOM Access</h3>
          <div className="space-y-4">
            <div>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              onClick={focusInput}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
            >
              Focus Input
            </button>

            <div className="text-xs text-gray-500 text-center">
              Click the button to focus the input field
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Previous Value Tracking</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">{count}</div>
              <div className="text-sm text-gray-600">Current Count</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600 mb-2">
                {previousCountRef.current ?? 'N/A'}
              </div>
              <div className="text-sm text-gray-600">Previous Count</div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => setCount(count - 1)}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                -1
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              >
                +1
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Timer with useRef</h3>
          <TimerExample />
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Concepts:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• useRef returns a mutable ref object with a .current property</li>
          <li>• Changing .current doesn't trigger a re-render</li>
          <li>• Perfect for accessing DOM elements directly</li>
          <li>• Useful for storing mutable values that don't need to trigger re-renders</li>
          <li>• Can be used to store previous values</li>
          <li>• Refs persist between renders</li>
        </ul>
      </div>
    </div>
  )
}

// Timer component using useRef
function TimerExample() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  const reset = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-blue-600 mb-4">{seconds}s</div>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
            isRunning
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={reset}
          className="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
