import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { BsYoutube } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'
import RecipesNavbar from '../Components/RecipesNavbar'
import { MdArrowDropDown } from 'react-icons/md'

const DetailPage = () => {
  const [hideIngredients, setHideIngredients] = useState(false)
  const [mealData, setMealData] = useState({})
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = mealData
  const [ingredients, setIngredients] = useState([])
  const id = useParams().id
  const navigate = useNavigate()

  useEffect(() => {
    dataFetchByID()

    // get ingredients items as keys and returns them as array
    const ingrArr = Object.keys(mealData).filter((key) => {
      return key.includes('strIngredient')
    })

    // turn ingredients into state
    setIngredients(
      ingrArr.map((item, idx) => {
        return {
          ingredientName: mealData[item],
          ingredientAmount: mealData[`strMeasure${idx + 1}`],
        }
      })
    )
  }, [mealData])

  const dataFetchByID = async () => {
    const url = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
    const data = await url.json()
    setMealData(data.meals[0])
  }

  return (
    <>
      <RecipesNavbar />
      <button
        className="mt-20 p-5 lg:ml-10 font-semibold flex hover:text-red-500 items-center cursor-pointer select-none"
        onClick={() => {
          navigate(-1)
        }}
      >
        <BiArrowBack className="mr-1" />
        Go Back
      </button>
      <div className="lg:flex lg:px-16 lg:py-5 lg:space-x-10">
        {/* Image Section */}
        <div className="p-5 lg:w-1/2 flex justify-center lg:px-10 lg:py-2 lg:h-2/3">
          <img
            src={strMealThumb}
            alt="meal-picture"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
        {/* Data Section */}
        <div className="data lg:w-1/2">
          <div>
            <h1 className="text-2xl text-center font-semibold lg:text-4xl lg:text-left">
              {strMeal}
            </h1>
            <div className="flex justify-between w-2/3 mx-auto p-5 lg:justify-start lg:w-full lg:pl-0">
              <div>
                <h3>Meal Category</h3>
                <h3>Meal Country</h3>
              </div>
              <div>
                <h3>: {strCategory}</h3>
                <h3>: {strArea}</h3>
              </div>
            </div>
          </div>
          {/* Ingredients Sections */}
          <div>
            <div
              className="flex lg:justify-start justify-center items-center hover:text-red-500"
              onClick={() => setHideIngredients(!hideIngredients)}
            >
              <h2 className="text-xl font-semibold select-none lg:text-left">
                Ingredients
              </h2>
              <MdArrowDropDown className="text-xl" />
            </div>
            {/* Ingredients Cards Section */}
            <div
              className={`flex flex-wrap justify-center ${
                hideIngredients && 'hidden'
              } lg:justify-start`}
            >
              {ingredients.map((ing, idx) => {
                return (
                  ing.ingredientName && (
                    // Ingredient Card Start
                    <div
                      key={idx}
                      className=" bg-white w-[160px] h-[250px] mx-2 my-4 p-4 shadow-lg hover:shadow-red-300/50"
                    >
                      <div className="p-2">
                        <img
                          src={`https://www.themealdb.com/images/ingredients/${ing.ingredientName}.png`}
                          alt="ingredient"
                          className="object-fit h-[120px]"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold">{ing.ingredientName}</h4>
                        <h5 className="text-sm">{ing.ingredientAmount}</h5>
                      </div>
                    </div>
                    // Ingredient Card End
                  )
                )
              })}
            </div>
          </div>
          {/* Instruction Section */}
          <div className="p-8 lg:pl-0">
            <h3 className="text-xl font-semibold text-center mb-3 lg:text-left">
              Instructions
            </h3>
            <p className=" text-justify whitespace-pre-line">
              {strInstructions}
            </p>
          </div>
          {/* Youtube Section */}
          <div className="flex px-8 lg:items-start items-center lg:pl-0 space-x-2">
            <h3 className="text-xl mb-1 font-semibold">Watch on Youtube</h3>
            <a href={strYoutube}>
              <BsYoutube className="text-4xl drop-shadow-md text-red-500 cursor-pointer hover:text-red-400" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage
