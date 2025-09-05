import Link from 'next/link'

const modules = [
  {
    id: 'fundamentals',
    title: 'React Fundamentals',
    description: 'JSX, components, props, state, events, conditional rendering, lists & keys',
    href: '/modules/fundamentals',
    icon: '🧱',
    color: 'bg-blue-100 text-blue-800',
    status: 'completed'
  },
  {
    id: 'hooks',
    title: 'Hooks Explorer',
    description: 'useState, useEffect, useRef, useMemo, useCallback, custom hooks',
    href: '/modules/hooks',
    icon: '🪝',
    color: 'bg-green-100 text-green-800',
    status: 'in-progress'
  },
  {
    id: 'routing',
    title: 'Routing & Navigation',
    description: 'Next.js file-based routing, dynamic routes, nested layouts',
    href: '/modules/routing',
    icon: '🗺️',
    color: 'bg-purple-100 text-purple-800',
    status: 'pending'
  },
  {
    id: 'state-management',
    title: 'State Management',
    description: 'Context API vs Redux vs Zustand comparison',
    href: '/modules/state-management',
    icon: '🏪',
    color: 'bg-orange-100 text-orange-800',
    status: 'pending'
  },
  {
    id: 'data-fetching',
    title: 'Data Fetching',
    description: 'React Query, SWR, server components',
    href: '/modules/data-fetching',
    icon: '📡',
    color: 'bg-cyan-100 text-cyan-800',
    status: 'pending'
  },
  {
    id: 'forms',
    title: 'Forms & Validation',
    description: 'React Hook Form, validation schemas',
    href: '/modules/forms',
    icon: '📝',
    color: 'bg-pink-100 text-pink-800',
    status: 'pending'
  },
  {
    id: 'auth',
    title: 'Authentication',
    description: 'NextAuth.js, JWT, OAuth',
    href: '/modules/auth',
    icon: '🔐',
    color: 'bg-red-100 text-red-800',
    status: 'pending'
  },
  {
    id: 'api-routes',
    title: 'API Routes & DB',
    description: 'Next.js API, Prisma, databases',
    href: '/modules/api-routes',
    icon: '🔌',
    color: 'bg-indigo-100 text-indigo-800',
    status: 'pending'
  },
  {
    id: 'styling',
    title: 'UI & Styling',
    description: 'Tailwind, styled-components, Framer Motion',
    href: '/modules/styling',
    icon: '🎨',
    color: 'bg-yellow-100 text-yellow-800',
    status: 'pending'
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'Optimization, memoization, lazy loading',
    href: '/modules/performance',
    icon: '⚡',
    color: 'bg-emerald-100 text-emerald-800',
    status: 'pending'
  },
  {
    id: 'testing',
    title: 'Testing & Quality',
    description: 'Jest, RTL, E2E testing',
    href: '/modules/testing',
    icon: '🧪',
    color: 'bg-teal-100 text-teal-800',
    status: 'pending'
  },
  {
    id: 'animations',
    title: 'Animations & UX',
    description: 'Framer Motion, transitions',
    href: '/modules/animations',
    icon: '✨',
    color: 'bg-violet-100 text-violet-800',
    status: 'pending'
  },
  {
    id: 'realtime',
    title: 'Real-time & Collaboration',
    description: 'WebSockets, live updates',
    href: '/modules/realtime',
    icon: '⚡',
    color: 'bg-rose-100 text-rose-800',
    status: 'pending'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Integration',
    description: 'Frontend + Backend + DB',
    href: '/modules/fullstack',
    icon: '🏗️',
    color: 'bg-slate-100 text-slate-800',
    status: 'pending'
  },
  {
    id: 'deployment',
    title: 'Deployment & CI/CD',
    description: 'Vercel, Docker, GitHub Actions',
    href: '/modules/deployment',
    icon: '🚀',
    color: 'bg-amber-100 text-amber-800',
    status: 'pending'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-800'
    case 'in-progress': return 'bg-yellow-100 text-yellow-800'
    case 'pending': return 'bg-gray-100 text-gray-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function ModulesPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Learning Modules
        </h1>
        <p className="text-lg text-gray-600">
          Master React and Next.js through 15 comprehensive, hands-on modules.
          Each module builds upon the previous ones to create a complete learning path.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={module.href}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl">{module.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {module.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(module.status)}`}>
                    {module.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {module.description}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Start Module →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Learning Path Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Foundation (Modules 1-3)</h3>
            <p className="text-gray-600 text-sm">
              Learn React fundamentals, hooks, and routing to build a solid foundation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Intermediate (Modules 4-8)</h3>
            <p className="text-gray-600 text-sm">
              Master state management, data fetching, forms, auth, and APIs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Advanced (Modules 9-15)</h3>
            <p className="text-gray-600 text-sm">
              Explore styling, performance, testing, animations, and deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
