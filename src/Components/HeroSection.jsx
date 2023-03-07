import React, { useState } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="flex flex-col space-y-5 md:flex-row-reverse pt-20"
    >
      <div className="flex p-6 md:w-1/2 md:mr-10">
        <div className="object-cover self-center backgroundImg" />
      </div>

      <div className="px-7 pb-7 space-y-5 md:w-1/2  md:p-20">
        <h1 className="text-5xl text-bold text-red-500 text-center font-bold leading-snug tracking-wide -mt-5 md:mt-0 md:text-left md:text-6xl lg:text-8xl">
          Take cooking to <br /> NEXT LEVEL!
        </h1>
        <p className="text-center font-light text-xl md:text-left md:text-2xl lg:text-3xl">
          Browse from thousand of recipes.
        </p>
        <p className="text-center font-light text-xl md:text-left md:text-2xl lg:text-3xl">
          Search by Category, Country or Ingredients.
        </p>
        <p className="text-center font-light text-xl md:text-left md:text-2xl lg:text-3xl">
          Cooking has never been easier.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
