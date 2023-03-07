import React from 'react'
import { Link } from 'react-router-dom'

const MealCard = ({ id, name, country, ingredient, image }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl w-[300px] h-[400px] shadow-lg mx-8 my-8  hover:shadow-red-200">
      <div className="flex overflow-hidden object-cover justify-center items-center w-full h-[200px] border-b-4 border-gray-100 rounded-2xl">
        <img src={image} alt="" className="h-full object-cover w-full" />
      </div>

      <div className="flex-col space-y-2 px-7">
        <h3 className="select-none font-bold text-xl mb-4 text-center truncate text-gray-800">
          {name}
        </h3>

        <div className="flex justify-between">
          <div className="font-light">
          {ingredient && <p>Category</p>}
            {country && <p>Country</p>}
          </div>

          <div className="font-light">
             {ingredient && <p className="truncate">: {ingredient}</p>}
             {country && <p className="truncate">: {country}</p>}
          </div>
        </div>
      </div>
      <Link to={`/detail/${id}`}>
        <button className="w-full p-2 bg-red-500 rounded-b-lg text-white hover:text-red-500 hover:bg-white hover:drop-shadow-lg">
          Get Recipe
        </button>
      </Link>
    </div>
  )
}

export default MealCard
