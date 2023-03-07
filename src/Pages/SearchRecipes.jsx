import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RecipesNavbar from '../Components/RecipesNavbar'
import MealCard from '../Components/MealCard'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import AZButtons from '../Components/AZButtons'
import Filter from '../Components/Filter'


const SearchRecipes = () => {
  const [searchedMealList, setSearchedMealList] = useState([])
  const search = useParams()

  useEffect(() => {
    Object.keys(search)[0] == 'search'
      ? dataFetchByName()
      : Object.keys(search)[0] == 'category'
      ? dataFetchByCategory()
      : Object.keys(search)[0] == 'alphabet'
      ? dataFetchByAlphabet()
      : Object.keys(search)[0] == 'area'
      ? dataFetchByArea()
      : dummyFetch()
  }, [search])

  const dummyFetch = async () => {
    const url = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s'
    )
    const data = await url.json()
    setSearchedMealList(data.meals)
  }

  const dataFetchByName = async () => {
    const url = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.search}`
    )
    const data = await url.json()
    setSearchedMealList(data.meals)
  }

  const dataFetchByAlphabet = async () => {
    const url = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search.alphabet}`
    )
    const data = await url.json()
    setSearchedMealList(data.meals)
  }

  const dataFetchByCategory = async () => {
    const url = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search.category}`
    )
    const data = await url.json()
    setSearchedMealList(data.meals)
  }

  const dataFetchByArea = async () => {
    const url = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${search.area}`
    )
    const data = await url.json()
    setSearchedMealList(data.meals)
  }

  return (
    <>
      <RecipesNavbar />
      <Filter />
      <div className="p-10 pt-5 mb-10 md:px-20 mx-auto flex flex-wrap justify-center items-center">
        {searchedMealList ? (
          searchedMealList.map((meal) => {
            return (
              <MealCard
                key={meal.idMeal}
                id={meal.idMeal}
                image={meal.strMealThumb}
                name={meal.strMeal}
                country={meal.strArea}
                ingredient={meal.strCategory}
              />
            )
          })
        ) : (
          <div className="flex flex-col items-center">
            <GiForkKnifeSpoon className="text-5xl" />
            <p className="text-2xl mt-5 font-thin">There is no meal recipe!</p>
          </div>
        )}
      </div>
      <AZButtons />
    </>
  )
}

export default SearchRecipes
