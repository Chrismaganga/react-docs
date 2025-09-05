'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const modules = [
  {
    id: 'fundamentals',
    title: 'React Fundamentals',
    description: 'JSX, components, props, state, events',
    href: '/modules/fundamentals',
    icon: '🧱',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'hooks',
    title: 'Hooks Explorer',
    description: 'useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue, custom hooks',
    href: '/modules/hooks',
    icon: '🪝',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'routing',
    title: 'Routing & Navigation',
    description: 'Next.js routing, dynamic routes',
    href: '/modules/routing',
    icon: '🗺️',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'state-management',
    title: 'State Management',
    description: 'Context, Redux, Zustand comparison',
    href: '/modules/state-management',
    icon: '🏪',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'data-fetching',
    title: 'Data Fetching',
    description: 'React Query, SWR, server components',
    href: '/modules/data-fetching',
    icon: '📡',
    color: 'bg-cyan-100 text-cyan-800'
  },
  {
    id: 'forms',
    title: 'Forms & Validation',
    description: 'React Hook Form, validation schemas',
    href: '/modules/forms',
    icon: '📝',
    color: 'bg-pink-100 text-pink-800'
  },
  {
    id: 'auth',
    title: 'Authentication',
    description: 'NextAuth.js, JWT, OAuth',
    href: '/modules/auth',
    icon: '🔐',
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 'api-routes',
    title: 'API Routes & DB',
    description: 'Next.js API, Prisma, databases',
    href: '/modules/api-routes',
    icon: '🔌',
    color: 'bg-indigo-100 text-indigo-800'
  },
  {
    id: 'styling',
    title: 'UI & Styling',
    description: 'Tailwind, styled-components, Framer',
    href: '/modules/styling',
    icon: '🎨',
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'Optimization, memoization, lazy loading',
    href: '/modules/performance',
    icon: '⚡',
    color: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'testing',
    title: 'Testing & Quality',
    description: 'Jest, RTL, E2E testing',
    href: '/modules/testing',
    icon: '🧪',
    color: 'bg-teal-100 text-teal-800'
  },
  {
    id: 'animations',
    title: 'Animations & UX',
    description: 'Framer Motion, transitions',
    href: '/modules/animations',
    icon: '✨',
    color: 'bg-violet-100 text-violet-800'
  },
  {
    id: 'realtime',
    title: 'Real-time & Collaboration',
    description: 'WebSockets, live updates',
    href: '/modules/realtime',
    icon: '⚡',
    color: 'bg-rose-100 text-rose-800'
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Integration',
    description: 'Frontend + Backend + DB',
    href: '/modules/fullstack',
    icon: '🏗️',
    color: 'bg-slate-100 text-slate-800'
  },
  {
    id: 'deployment',
    title: 'Deployment & CI/CD',
    description: 'Vercel, Docker, GitHub Actions',
    href: '/modules/deployment',
    icon: '🚀',
    color: 'bg-amber-100 text-amber-800'
  }
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`fixed left-0 top-16 h-screen bg-white shadow-lg transition-all duration-300 z-10 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-gray-900">Learning Modules</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded hover:bg-gray-100"
          >
            <svg 
              className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
          {modules.map((module) => {
            const isActive = pathname === module.href
            return (
              <Link
                key={module.id}
                href={module.href}
                className={`block p-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 border-l-4 border-blue-500' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{module.icon}</span>
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {module.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {module.description}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
