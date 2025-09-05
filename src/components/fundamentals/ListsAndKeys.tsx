'use client'

import { useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
  isActive: boolean
}

interface Product {
  id: string
  name: string
  price: number
  category: string
  inStock: boolean
}

export default function ListsAndKeys() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', isActive: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', isActive: true },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'guest', isActive: false }
  ])

  const [products, setProducts] = useState<Product[]>([
    { id: 'p1', name: 'Laptop', price: 999, category: 'Electronics', inStock: true },
    { id: 'p2', name: 'Book', price: 19, category: 'Education', inStock: true },
    { id: 'p3', name: 'Phone', price: 699, category: 'Electronics', inStock: false }
  ])

  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user' as const })
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, category: '' })

  const addUser = () => {
    if (newUser.name && newUser.email) {
      const user: User = {
        id: Date.now(),
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        isActive: true
      }
      setUsers([...users, user])
      setNewUser({ name: '', email: '', role: 'user' })
    }
  }

  const addProduct = () => {
    if (newProduct.name && newProduct.category) {
      const product: Product = {
        id: `p${Date.now()}`,
        name: newProduct.name,
        price: newProduct.price,
        category: newProduct.category,
        inStock: true
      }
      setProducts([...products, product])
      setNewProduct({ name: '', price: 0, category: '' })
    }
  }

  const toggleUserStatus = (id: number) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, isActive: !user.isActive } : user
    ))
  }

  const toggleProductStock = (id: string) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, inStock: !product.inStock } : product
    ))
  }

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const deleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800'
      case 'user': return 'bg-blue-100 text-blue-800'
      case 'guest': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Electronics': return 'bg-purple-100 text-purple-800'
      case 'Education': return 'bg-green-100 text-green-800'
      case 'Clothing': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Lists and Keys</h2>
        <p className="text-gray-600 mb-6">
          Learn how to render lists of data efficiently using the map() function and proper key props.
          Keys help React identify which items have changed, been added, or removed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">User Management</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="flex space-x-2">
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value as any })}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="guest">Guest</option>
                </select>
                <button
                  onClick={addUser}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Add User
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {users.map((user) => (
                <div
                  key={user.id}
                  className={`p-3 rounded border ${
                    user.isActive ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{user.name}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className={`px-2 py-1 rounded text-xs ${
                          user.isActive 
                            ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {user.isActive ? 'Deactivate' : 'Activate'}
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-800 hover:bg-gray-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Product Catalog</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })}
                  className="px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <button
                  onClick={addProduct}
                  className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors"
                >
                  Add Product
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`p-3 rounded border ${
                    product.inStock ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{product.name}</h4>
                        <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(product.category)}`}>
                          {product.category}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => toggleProductStock(product.id)}
                        className={`px-2 py-1 rounded text-xs ${
                          product.inStock 
                            ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {product.inStock ? 'Mark Out' : 'Mark In Stock'}
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-800 hover:bg-gray-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Concepts:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Use map() to transform arrays into JSX elements</li>
          <li>• Always provide a unique key prop for each list item</li>
          <li>• Keys help React efficiently update the DOM when lists change</li>
          <li>• Use stable, unique identifiers (like IDs) as keys when possible</li>
          <li>• Avoid using array index as key when items can be reordered</li>
          <li>• Keys only need to be unique among siblings, not globally</li>
        </ul>
      </div>
    </div>
  )
}
