import React from 'react'
import { useState, useEffect } from 'react'
import TypeCard from './TypeCard'
import { Link } from 'react-router-dom'

const Recipes = () => {
  const [mealTypes, setMealTypes] = useState([])

  useEffect(() => {
    apiFetchTypes()
  }, [])

  const apiFetchTypes = async () => {
    const url = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    )
    const data = await url.json()
    setMealTypes(data.categories)
  }

  return (
    <section id="recipes-section" className="md:mt-20">
      <h3 className="text-3xl font-semibold mb-10 text-red-500 md:text-4xl md:font-bold text-center ">
        Choose From Various Meals
      </h3>
      {/* Change this to Link Tag */}
      <Link to="/all-recipes">
        <p className="mr-10 text-red-500 text-right text-xl md:text-2xl hover:font-semibold">
          See All
        </p>
      </Link>

      {/* Meal Types */}
      <div className="p-10 mb-10 md:px-20 mx-auto flex flex-wrap justify-center">
        {mealTypes?.map((type) => {
          return (
            <TypeCard
              key={type.idCategory}
              name={type.strCategory}
              image={type.strCategoryThumb}
              description={type.strCategoryDescription}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Recipes
