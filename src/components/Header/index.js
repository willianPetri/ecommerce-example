import React from 'react'

const Header = () => {
  return (
    <div className='md:flex md:flex-row md:justify-between text-center'>
      <div className="flex flex-row justify-center">
        <div className="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg" />
        <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
      </div>
      <div className="mt-2">
        <a href="/" className="text-gray-600 hover:text-purple-600 p-4">Home</a>
        <a href="/" className="text-gray-600 hover:text-purple-600 p-4">Shop</a>
        <a href="/" className="text-gray-600 hover:text-purple-600 p-4">Blog</a>
        <a href="/" className="text-gray-600 hover:text-purple-600 p-4">Contact</a>
        <a href="/" className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-5 rounded-full">
          <i className='fas fa-shopping-cart h-6 w-6 inline-block animate-bounce' />
          Cart (0)
        </a>
      </div>
    </div>
  )
}

export default Header
