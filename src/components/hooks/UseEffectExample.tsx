'use client'

import { useState, useEffect } from 'react'

// Timer with useEffect
const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning])

  const reset = () => {
    setSeconds(0)
    setIsRunning(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Timer with useEffect</h3>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {formatTime(seconds)}
        </div>
        <div className="text-sm text-gray-600">Elapsed Time</div>
      </div>

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

// Data fetching with useEffect
const DataFetcher = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock data based on userId
        const mockData = {
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
          posts: Math.floor(Math.random() * 10) + 1
        }
        
        setData(mockData)
      } catch (err) {
        setError('Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userId]) // Dependency array - effect runs when userId changes

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Data Fetching</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">User ID</label>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(parseInt(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            max="10"
          />
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-2">Loading...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded p-3">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {data && !loading && (
          <div className="bg-gray-50 rounded p-4">
            <h4 className="font-medium mb-2">User Data</h4>
            <div className="space-y-1 text-sm">
              <p><strong>ID:</strong> {data.id}</p>
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Posts:</strong> {data.posts}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Window size tracker
const WindowSizeTracker = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array - effect runs only once

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Window Size Tracker</h3>
      
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600 mb-2">
          {windowSize.width} × {windowSize.height}
        </div>
        <div className="text-sm text-gray-600">Current Window Size</div>
        <p className="text-xs text-gray-500 mt-2">
          Try resizing your browser window to see the effect!
        </p>
      </div>
    </div>
  )
}

// Document title updater
const DocumentTitleUpdater = () => {
  const [title, setTitle] = useState('React Learning Hub')
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    document.title = `Count: ${count} - React Learning Hub`
  }, [count])

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Document Title Updater</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Page Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">{count}</div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              -1
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              +1
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Check the browser tab title!
          </p>
        </div>
      </div>
    </div>
  )
}

export default function UseEffectExample() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">useEffect Hook</h2>
        <p className="text-gray-600 mb-6">
          useEffect lets you perform side effects in functional components. It's like
          componentDidMount, componentDidUpdate, and componentWillUnmount combined.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Timer />
        <DataFetcher />
        <WindowSizeTracker />
        <DocumentTitleUpdater />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Concepts:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• useEffect runs after every render by default</li>
          <li>• Use dependency array to control when effect runs</li>
          <li>• Empty dependency array [] means effect runs only once</li>
          <li>• Return a cleanup function to prevent memory leaks</li>
          <li>• Perfect for data fetching, subscriptions, timers, and DOM manipulation</li>
          <li>• Effects run after the DOM has been updated</li>
        </ul>
      </div>
    </div>
  )
}
