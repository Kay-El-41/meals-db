import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { MdArrowDropDown } from 'react-icons/md'

const CategoryCard = () => {
  const [categories, setCategories] = useState([])
  const [areas, setAreas] = useState([])
  const [cateView, setCateView] = useState(true)
  const [areaView, setAreaView] = useState(false)
  const { category } = useParams()
  const { area } = useParams()

  useEffect(() => {
    apiFetchTypes()
    apiFetchAreas()
  }, [])

  const apiFetchTypes = async () => {
    const url = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    )
    const data = await url.json()
    setCategories(data.categories)
  }

  const apiFetchAreas = async () => {
    const url = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    )
    const data = await url.json()
    setAreas(data.meals)
  }

  return (
    <div className="flex  items-end flex-col mt-20 pt-5">
      {/* Menu */}
      <div className="flex space-x-5 px-8">
        <div className='flex items-center'>
          <h2
            className={`font-semibold text-l cursor-pointer select-none ${
              cateView && 'text-red-500'
            } hover:text-red-500`}
            onClick={() => {
              setCateView(!cateView)
              setAreaView(false)
            }}
          >
            Browse By Categories
          </h2>
          <MdArrowDropDown className='text-l text-red-500'/>
        </div>
        <div className='flex items-center'>
          <h2
            className={`font-semibold text-l cursor-pointer select-none ${
              areaView && 'text-red-500'
            } hover:text-red-500`}
            onClick={() => {
              setAreaView(!areaView)
              setCateView(false)
            }}
          >
            Browse By Countries
          </h2>
          <MdArrowDropDown className='text-l text-red-500'/>
        </div>
      </div>
      {/* Category Cards */}
      <div
        className={`${cateView ? 'flex' : 'hidden'} flex-wrap justify-center`}
      >
        {categories.map((type) => {
          return (
            <Link
              to={`/all-recipes/category/${type.strCategory}`}
              key={type.idCategory}
            >
              <div
                className={`flex cursor-pointer rounded-xl items-center space-x-2 ${
                  category == type.strCategory
                    ? 'bg-red-500 text-white'
                    : 'bg-white'
                } shadow-lg mx-3 px-3 my-3 w-[160px] h-[50px] hover:shadow-red-200`}
              >
                <img
                  src={type.strCategoryThumb}
                  alt="category"
                  className="w-10 h-10"
                />
                <h5 className="font-semibold text-sm">{type.strCategory}</h5>
              </div>
            </Link>
          )
        })}
      </div>
      {/* Country Cards */}
      <div
        className={`${
          areaView ? 'flex' : 'hidden'
        } flex flex-wrap justify-center`}
      >
        {areas.map((country) => {
          return (
            <Link
              to={`/all-recipes/area/${country.strArea}`}
              key={country.strArea}
            >
              <div
                className={`flex justify-center cursor-pointer rounded-xl items-center space-x-2 ${
                  area == country.strArea ? 'bg-red-500 text-white' : 'bg-white'
                } shadow-lg mx-3 px-3 my-3 w-[160px] h-[50px] hover:shadow-red-200`}
              >
                <h5 className="font-semibold text-sm">{country.strArea}</h5>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryCard
// todoList
/*
1. Active Style Set
2. Show and Hide
*/
