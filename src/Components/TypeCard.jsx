import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const TypeCard = ({ name, image, description }) => {
  const [readMore, setReadMore] = useState(true)

  return (
    <div className="bg-white flex flex-col justify-between rounded-xl w-[300px] max-h-fit shadow-lg mx-8 my-8  hover:shadow-red-200">
      <div className="flex overflow-hidden justify-center items-center w-full h-[200px] border-b-4 border-gray-100 rounded-2xl">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex-col space-y-2 px-7">
        <h3 className="select-none font-bold text-2xl mb-5 mt-5 text-center truncate ... text-gray-800 hover:text-red-500">
          {name}
        </h3>

        <div className="font-light">
          <p>
            {readMore ? description.slice(0, 50) : description}
            <span
              onClick={() => setReadMore(!readMore)}
              className="text-red-500 text-semibold cursor-pointer select-none"
            >
              {readMore ? '...read more' : ' show less'}
            </span>
          </p>
        </div>
      </div>
      <Link to={`/all-recipes/category/${name}`}>
        <button className=" bottom-0 mt-10 w-full p-3 bg-red-500 rounded-b-lg text-white hover:text-red-500 hover:bg-white hover:drop-shadow-lg">
          Browse {name} Meals
        </button>
      </Link>
    </div>
  )
}

export default TypeCard
