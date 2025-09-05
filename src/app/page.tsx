import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to React Learning Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Master React and Next.js through 15 comprehensive, hands-on modules
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/modules"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Learning
          </Link>
          <Link
            href="/playground"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Open Playground
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">🧱</div>
          <h3 className="text-lg font-semibold mb-2">React Fundamentals</h3>
          <p className="text-gray-600 mb-4">
            Learn JSX, components, props, state, and events through interactive examples.
          </p>
          <Link href="/modules/fundamentals" className="text-blue-600 hover:text-blue-800">
            Start Module →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">🪝</div>
          <h3 className="text-lg font-semibold mb-2">Hooks Explorer</h3>
          <p className="text-gray-600 mb-4">
            Master useState, useEffect, and custom hooks with practical challenges.
          </p>
          <Link href="/modules/hooks" className="text-blue-600 hover:text-blue-800">
            Start Module →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">🗺️</div>
          <h3 className="text-lg font-semibold mb-2">Routing & Navigation</h3>
          <p className="text-gray-600 mb-4">
            Explore Next.js file-based routing and dynamic routes.
          </p>
          <Link href="/modules/routing" className="text-blue-600 hover:text-blue-800">
            Start Module →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">🏪</div>
          <h3 className="text-lg font-semibold mb-2">State Management</h3>
          <p className="text-gray-600 mb-4">
            Compare Context API, Redux, and Zustand with real examples.
          </p>
          <Link href="/modules/state-management" className="text-blue-600 hover:text-blue-800">
            Start Module →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">📡</div>
          <h3 className="text-lg font-semibold mb-2">Data Fetching</h3>
          <p className="text-gray-600 mb-4">
            Learn React Query, SWR, and server components.
          </p>
          <Link href="/modules/data-fetching" className="text-blue-600 hover:text-blue-800">
            Start Module →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl mb-4">📝</div>
          <h3 className="text-lg font-semibold mb-2">Forms & Validation</h3>
          <p className="text-gray-600 mb-4">
            Build forms with React Hook Form and validation schemas.
          </p>
          <Link href="/modules/forms" className="text-blue-600 hover:text-blue-800">
            Start Module →
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose This Learning Path?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="font-semibold mb-2">Hands-on Learning</h3>
            <p className="text-gray-600">
              Build real projects while learning concepts
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="font-semibold mb-2">Comprehensive Coverage</h3>
            <p className="text-gray-600">
              From basics to advanced deployment strategies
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-semibold mb-2">Modern Stack</h3>
            <p className="text-gray-600">
              Latest React 18+ and Next.js 14 features
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
