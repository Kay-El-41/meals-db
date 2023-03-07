import React, { useEffect } from 'react'
import { useState } from 'react'
import MealCard from './MealCard'
import { GiMeat } from 'react-icons/gi'
import { BsBookHalf } from 'react-icons/bs'
import { FaSortNumericUp } from 'react-icons/fa'
import { RiVideoFill } from 'react-icons/ri'

const Meals = () => {
  const [randomMeal, setRandomMeal] = useState({})

  useEffect(() => {
    apiFetch()
  }, [])

  const apiFetch = async () => {
    const url = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    )
    const data = await url.json()
    setRandomMeal(data.meals[0])
  }

  return (
    <section id="meals-section" className=" h-fit my-10 mb-30 md:px-20 pb-20">
      <div className="text-center p-8">
        <h2 className="text-red-500 font-semibold text-4xl md:text-5xl md:mb-10">
          Cook Now!!
        </h2>
      </div>
      <div className="flex-col md:grid md:grid-cols-3">
        {/* Meals information */}
        <div className=" grid grid-cols-2 grid-rows-2 text-center md:mt-10 md:items-center">
          <p className=" font-bold text-center p-5 text-2xl rounded-2xl drop-shadow-lg mb-5">
            <span className="text-red-500 md:text-3xl">280+</span> <br />
            Recipes
          </p>
          <p className=" font-bold text-center p-5 text-2xl rounded-2xl drop-shadow-lg mb-5">
            <span className="text-red-500 md:text-3xl">500+</span> <br />
            Ingredients
          </p>
          <p className=" font-bold text-center p-5 text-2xl rounded-2xl drop-shadow-lg mb-5">
            <span className="text-red-500 md:text-3xl">25+</span> <br />
            Countries
          </p>
          <p className=" font-bold text-center p-5 text-2xl rounded-2xl drop-shadow-lg mb-5 ">
            <span className="text-red-500 md:text-3xl">10+</span> <br />
            Categories
          </p>
        </div>

        {/* Meal Card */}
        <div className="h-fit flex justify-center mt-10 md:my-auto">
          <MealCard
            id={randomMeal.idMeal}
            image={randomMeal.strMealThumb}
            name={randomMeal.strMeal}
            country={randomMeal.strArea}
            ingredient={randomMeal.strCategory}
          />
        </div>

        {/* Offers */}
        <div className="mt-10 text-center space-y-10 md:flex-col md:justify-center md:ml-6 md:mt-20">
          <h3 className="text-3xl font-semibold text-red-500 md:text-left md:font-bold">
            For Every Meal
          </h3>
          <ul className="space-y-3 font-light text-xl md:text-left md:font-semibold">
            <li>Get ingredients <GiMeat className='inline ml-2'/> </li>
            <li>Get instructions <BsBookHalf className='inline ml-2'/></li>
            <li>Get measurements <FaSortNumericUp className='inline ml-2'/></li>
            <li>Get Youtube Video <RiVideoFill className='inline ml-2'/></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Meals
