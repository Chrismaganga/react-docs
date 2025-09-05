'use client'

import { useState, useCallback, memo } from 'react'

// Child component that receives a function as prop
const ExpensiveChild = memo(({ onClick, label }: { onClick: () => void; label: string }) => {
  console.log(`Rendering ${label}`)
  
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
    >
      {label}
    </button>
  )
})

// Child component without memo
const RegularChild = ({ onClick, label }: { onClick: () => void; label: string }) => {
  console.log(`Rendering regular ${label}`)
  
  return (
    <button
      onClick={onClick}
      className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
    >
      {label}
    </button>
  )
}

export default function UseCallbackExample() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // Without useCallback - creates new function on every render
  const handleClickWithoutCallback = () => {
    console.log('Clicked without callback!')
  }

  // With useCallback - only creates new function when dependencies change
  const handleClickWithCallback = useCallback(() => {
    console.log('Clicked with callback!')
  }, []) // Empty dependency array - function never changes

  // Callback that depends on count
  const handleCountClick = useCallback(() => {
    console.log(`Count is: ${count}`)
  }, [count]) // Recreated when count changes

  // Callback that depends on name
  const handleNameClick = useCallback(() => {
    console.log(`Name is: ${name}`)
  }, [name]) // Recreated when name changes

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">useCallback Hook</h2>
        <p className="text-gray-600 mb-6">
          useCallback memoizes a function and only recreates it when dependencies change.
          It's useful for preventing unnecessary re-renders of child components that receive functions as props.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Function Memoization</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Count: {count}</label>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Increment Count
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-xs text-gray-500">
              Check console to see when components re-render
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Child Components</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Without useCallback (re-renders on every parent render)</h4>
              <div className="space-x-2">
                <ExpensiveChild 
                  onClick={handleClickWithoutCallback} 
                  label="Memo Child" 
                />
                <RegularChild 
                  onClick={handleClickWithoutCallback} 
                  label="Regular Child" 
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">With useCallback (stable reference)</h4>
              <div className="space-x-2">
                <ExpensiveChild 
                  onClick={handleClickWithCallback} 
                  label="Memo Child" 
                />
                <RegularChild 
                  onClick={handleClickWithCallback} 
                  label="Regular Child" 
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Dependent callbacks</h4>
              <div className="space-x-2">
                <ExpensiveChild 
                  onClick={handleCountClick} 
                  label="Count Callback" 
                />
                <ExpensiveChild 
                  onClick={handleNameClick} 
                  label="Name Callback" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Test</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">{count}</div>
              <div className="text-sm text-gray-600">Parent State</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <h4 className="font-medium mb-2">Memoized</h4>
                <ExpensiveChild 
                  onClick={handleClickWithCallback} 
                  label="Stable" 
                />
                <p className="text-xs text-gray-500 mt-1">
                  Won't re-render when parent updates
                </p>
              </div>

              <div className="text-center">
                <h4 className="font-medium mb-2">Non-memoized</h4>
                <RegularChild 
                  onClick={handleClickWithoutCallback} 
                  label="Unstable" 
                />
                <p className="text-xs text-gray-500 mt-1">
                  Re-renders on every parent update
                </p>
              </div>
            </div>

            <button
              onClick={() => setCount(count + 1)}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
            >
              Update Parent State
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Real-world Example</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              In real applications, useCallback is often used with:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Event handlers passed to child components</li>
              <li>• Functions passed to useEffect dependencies</li>
              <li>• Callbacks for form submissions</li>
              <li>• API call functions</li>
            </ul>
            
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="font-medium mb-2">Example:</h4>
              <pre className="text-xs text-gray-700">
{`const handleSubmit = useCallback((data) => {
  // Submit form data
  submitForm(data)
}, [submitForm])`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Concepts:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• useCallback memoizes a function</li>
          <li>• Only recreates the function when dependencies change</li>
          <li>• Useful for preventing unnecessary re-renders</li>
          <li>• Often used with React.memo for child components</li>
          <li>• Don't overuse - only use when you have a performance problem</li>
          <li>• The dependency array works the same way as useEffect and useMemo</li>
        </ul>
      </div>
    </div>
  )
}
