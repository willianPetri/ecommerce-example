import React from 'react'

const Product = ({ image, title }) => {
  return (
    <div className="shadow-lg rounded-lg">
      <a href="/">
        <img src={image} className='rounded-tl-lg rounded-tr-lg' alt="" />
      </a>
      <div className="p-5">
        <h3><a href="/">{title}</a></h3>
        <div className="flex flex-row my-3">
          <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2" />
          <div className="bg-blue-800 h-5 w-5 rounded-full shadow-md mr-2" />
          <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2" />
          <div className="bg-red-800 h-5 w-5 rounded-full shadow-md mr-2" />
          <div className="bg-green-700 h-5 w-5 rounded-full shadow-md mr-2" />
        </div>
        <div className="flex flex-row my-3">
          <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">XL</div>
          <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">XXL</div>
          <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">L</div>
          <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">M</div>
          <div className="border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2">S</div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <a href="/" className="w-full xl:w-auto bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 my-2 text-sm text-white hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center">
            <i className='fas fa-shopping-cart h-6 w-6 inline-block mr-1' />
            Add to cart
          </a>
          <a href="/" className="w-full xl:w-auto bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center">
            <i className='h-5 w-5 mr-1 fas fa-arrow-right' />
            View Details
          </a>
        </div>
      </div>
    </div>
    
  )
}

export default Product
