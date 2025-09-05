'use client'

import { useState } from 'react'

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<'admin' | 'user' | 'guest'>('guest')
  const [items, setItems] = useState<string[]>([])
  const [showDetails, setShowDetails] = useState(false)
  const [score, setScore] = useState(0)

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`])
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    if (score >= 50) return 'text-orange-600'
    return 'text-red-600'
  }

  const getScoreMessage = (score: number) => {
    if (score >= 90) return 'Excellent!'
    if (score >= 70) return 'Good job!'
    if (score >= 50) return 'Not bad!'
    return 'Keep trying!'
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Conditional Rendering</h2>
        <p className="text-gray-600 mb-6">
          Learn how to conditionally render content based on state, props, or other conditions.
          This is essential for creating dynamic user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Authentication State</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsLoggedIn(!isLoggedIn)}
                  className={`px-4 py-2 rounded transition-colors ${
                    isLoggedIn
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isLoggedIn ? 'Logout' : 'Login'}
                </button>
                <span className="text-sm text-gray-600">
                  Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}
                </span>
              </div>

              {/* Conditional rendering with if statement */}
              {isLoggedIn ? (
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <h4 className="font-medium text-green-800 mb-2">Welcome back!</h4>
                  <p className="text-green-700 text-sm">
                    You are successfully logged in to your account.
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 border border-gray-200 rounded p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Please log in</h4>
                  <p className="text-gray-600 text-sm">
                    You need to log in to access your account.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Role-based Content</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">User Role</label>
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value as any)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="guest">Guest</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="space-y-2">
                {/* Multiple conditions */}
                {userRole === 'admin' && (
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <h4 className="font-medium text-red-800">Admin Panel</h4>
                    <p className="text-red-700 text-sm">You have full access to all features.</p>
                  </div>
                )}
                
                {userRole === 'user' && (
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <h4 className="font-medium text-blue-800">User Dashboard</h4>
                    <p className="text-blue-700 text-sm">You can access most features.</p>
                  </div>
                )}
                
                {userRole === 'guest' && (
                  <div className="bg-gray-50 border border-gray-200 rounded p-3">
                    <h4 className="font-medium text-gray-800">Guest Access</h4>
                    <p className="text-gray-600 text-sm">Limited access to public content.</p>
                  </div>
                )}

                {/* Logical AND operator */}
                {userRole !== 'guest' && (
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <p className="text-green-700 text-sm">
                      ✓ You can create and edit content
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Dynamic Lists</h3>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <button
                  onClick={addItem}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Add Item
                </button>
                <button
                  onClick={() => setItems([])}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Conditional rendering with arrays */}
              {items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No items yet. Click "Add Item" to get started!</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 rounded p-3"
                    >
                      <span>{item}</span>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Show count only if items exist */}
              {items.length > 0 && (
                <div className="text-sm text-gray-600 text-center">
                  {items.length} item{items.length !== 1 ? 's' : ''} total
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Score Display</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Score (0-100)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={score}
                  onChange={(e) => setScore(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-2xl font-bold mt-2">
                  <span className={getScoreColor(score)}>{score}</span>
                </div>
              </div>

              {/* Conditional rendering with functions */}
              <div className="text-center">
                <p className={`font-medium ${getScoreColor(score)}`}>
                  {getScoreMessage(score)}
                </p>
              </div>

              {/* Toggle visibility */}
              <div className="space-y-2">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
                >
                  {showDetails ? 'Hide' : 'Show'} Details
                </button>

                {showDetails && (
                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <h4 className="font-medium text-purple-800 mb-2">Score Details</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Current score: {score}</li>
                      <li>• Percentage: {score}%</li>
                      <li>• Grade: {score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F'}</li>
                      <li>• Status: {score >= 70 ? 'Passing' : 'Needs Improvement'}</li>
                    </ul>
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
          <li>• Use ternary operator (condition ? true : false) for simple conditions</li>
          <li>• Use logical AND (&&) for conditional rendering without else</li>
          <li>• Use if statements outside JSX for complex logic</li>
          <li>• Return null to render nothing</li>
          <li>• Use arrays and map() for dynamic lists</li>
          <li>• Combine multiple conditions with logical operators</li>
        </ul>
      </div>
    </div>
  )
}
