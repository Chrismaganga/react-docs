'use client'

import { useState } from 'react'

// User Profile Component
interface UserProfileProps {
  name: string
  age: number
  email: string
  avatar?: string
  isOnline: boolean
  hobbies: string[]
}

const UserProfile = ({ name, age, email, avatar, isOnline, hobbies }: UserProfileProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            {avatar ? (
              <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-gray-600">{name[0]}</span>
            )}
          </div>
          <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
            isOnline ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-600">{age} years old</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Hobbies:</h4>
        <div className="flex flex-wrap gap-2">
          {hobbies.map((hobby, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Product Card Component
interface ProductCardProps {
  title: string
  price: number
  description: string
  image: string
  inStock: boolean
  rating: number
  onAddToCart: () => void
}

const ProductCard = ({ 
  title, 
  price, 
  description, 
  image, 
  inStock, 
  rating, 
  onAddToCart 
}: ProductCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">🖼️ {image}</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-green-600">${price}</span>
          <div className="flex items-center">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1 text-sm">{rating}/5</span>
          </div>
        </div>
        
        <button
          onClick={onAddToCart}
          disabled={!inStock}
          className={`w-full py-2 px-4 rounded font-medium transition-colors ${
            inStock
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}

export default function PropsExample() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    age: 28,
    email: 'john@example.com',
    avatar: '',
    isOnline: true,
    hobbies: ['Coding', 'Gaming', 'Photography']
  })

  const [productData, setProductData] = useState({
    title: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'headphones.jpg',
    inStock: true,
    rating: 4.5
  })

  const handleAddToCart = () => {
    alert('Added to cart!')
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Props in Action</h2>
        <p className="text-gray-600 mb-6">
          Props allow you to pass data from parent to child components. See how different components
          use props to display dynamic content.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">User Profile Component</h3>
          <UserProfile {...userData} />
          
          <div className="mt-4 space-y-2">
            <h4 className="font-medium">Edit Props:</h4>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded text-sm"
              />
              <input
                type="number"
                placeholder="Age"
                value={userData.age}
                onChange={(e) => setUserData({ ...userData, age: parseInt(e.target.value) || 0 })}
                className="px-3 py-2 border border-gray-300 rounded text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded text-sm"
              />
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={userData.isOnline}
                  onChange={(e) => setUserData({ ...userData, isOnline: e.target.checked })}
                  className="mr-2"
                />
                Online
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Product Card Component</h3>
          <ProductCard {...productData} onAddToCart={handleAddToCart} />
          
          <div className="mt-4 space-y-2">
            <h4 className="font-medium">Edit Props:</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Product Title"
                value={productData.title}
                onChange={(e) => setProductData({ ...productData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Price"
                  value={productData.price}
                  onChange={(e) => setProductData({ ...productData, price: parseFloat(e.target.value) || 0 })}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <input
                  type="number"
                  placeholder="Rating"
                  min="0"
                  max="5"
                  step="0.1"
                  value={productData.rating}
                  onChange={(e) => setProductData({ ...productData, rating: parseFloat(e.target.value) || 0 })}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={productData.inStock}
                  onChange={(e) => setProductData({ ...productData, inStock: e.target.checked })}
                  className="mr-2"
                />
                In Stock
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Concepts:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Props are read-only data passed from parent to child components</li>
          <li>• Use TypeScript interfaces to define prop types</li>
          <li>• Props can be strings, numbers, booleans, objects, arrays, or functions</li>
          <li>• Use destructuring to extract props in component parameters</li>
          <li>• Props make components reusable and configurable</li>
        </ul>
      </div>
    </div>
  )
}
