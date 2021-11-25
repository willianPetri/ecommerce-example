import React from 'react'
import hero from '../../images/hero-img.svg'

const Hero = () => {
  return (
    <div className='md:flex md:flex-row mt-20'>
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <h2 className="font-serif text-4xl text-gray-600 mb-4 text-center md:self-start md:text-left">Some Catchy Title Here</h2>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Our brand tagline goes here.</p>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Our brand motto goes here.</p>
        <a href="/" className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">Shop Now</a>
      </div>      
      <div className="w-3/5">
        <img src={hero} className='w-full' alt="" />
      </div>
    </div>
  )
}

export default Hero
