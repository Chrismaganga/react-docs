'use client'

import { useState, useMemo } from 'react'

// Expensive calculation function
const expensiveCalculation = (num: number): number => {
  console.log('Calculating...')
  let result = 0
  for (let i = 0; i < 1000000; i++) {
    result += num
  }
  return result
}

// Fibonacci calculation
const fibonacci = (n: number): number => {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

export default function UseMemoExample() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [fibNumber, setFibNumber] = useState(35)
  const [items, setItems] = useState<string[]>([])

  // Without useMemo - recalculates on every render
  const expensiveValue = expensiveCalculation(count * multiplier)

  // With useMemo - only recalculates when dependencies change
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count * multiplier)
  }, [count, multiplier])

  // Memoized fibonacci calculation
  const memoizedFib = useMemo(() => {
    console.log('Calculating fibonacci...')
    return fibonacci(fibNumber)
  }, [fibNumber])

  // Memoized filtered items
  const filteredItems = useMemo(() => {
    console.log('Filtering items...')
    return items.filter(item => item.length > 3)
  }, [items])

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`])
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">useMemo Hook</h2>
        <p className="text-gray-600 mb-6">
          useMemo memoizes the result of a calculation and only recalculates when dependencies change.
          It's useful for expensive calculations and preventing unnecessary re-renders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Expensive Calculation</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Count</label>
                <input
                  type="number"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Multiplier</label>
                <input
                  type="number"
                  value={multiplier}
                  onChange={(e) => setMultiplier(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <h4 className="font-medium text-red-800">Without useMemo</h4>
                <p className="text-red-700">Value: {expensiveValue}</p>
                <p className="text-xs text-red-600">Recalculates on every render</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-3">
                <h4 className="font-medium text-green-800">With useMemo</h4>
                <p className="text-green-700">Value: {memoizedValue}</p>
                <p className="text-xs text-green-600">Only recalculates when dependencies change</p>
              </div>
            </div>

            <div className="text-xs text-gray-500">
              Check console to see when calculations occur
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Fibonacci Calculator</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Fibonacci Number</label>
              <input
                type="number"
                value={fibNumber}
                onChange={(e) => setFibNumber(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="40"
              />
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                {memoizedFib}
              </div>
              <div className="text-sm text-gray-600">
                Fibonacci({fibNumber})
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center">
              Try changing the number to see memoization in action
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Filtered Items</h3>
          <div className="space-y-4">
            <button
              onClick={addItem}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Add Item
            </button>

            <div className="space-y-2">
              <h4 className="font-medium">All Items ({items.length})</h4>
              <div className="max-h-20 overflow-y-auto">
                {items.map((item, index) => (
                  <div key={index} className="text-sm text-gray-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Filtered Items ({filteredItems.length})</h4>
              <div className="max-h-20 overflow-y-auto">
                {filteredItems.map((item, index) => (
                  <div key={index} className="text-sm text-green-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Comparison</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800 mb-2">
                Count: {count}
              </div>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Increment Count
              </button>
            </div>

            <div className="text-xs text-gray-500 text-center">
              Notice how the memoized value doesn't recalculate when you increment count
              (since multiplier hasn't changed), but the non-memoized value does.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Concepts:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• useMemo memoizes the result of a calculation</li>
          <li>• Only recalculates when dependencies in the dependency array change</li>
          <li>• Useful for expensive calculations that don't need to run on every render</li>
          <li>• Can help prevent unnecessary re-renders of child components</li>
          <li>• Don't overuse - only use when you have a performance problem</li>
          <li>• The dependency array works the same way as useEffect</li>
        </ul>
      </div>
    </div>
  )
}
