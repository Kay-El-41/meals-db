import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const AZButtons = () => {
  const navigateTo = useNavigate()
  const {alphabet} = useParams()
  const azList = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  const clickHandler = (alp) => {
    navigateTo(`/all-recipes/list/${alp}`, { state: { type: 'alphabet' } })
  }

  return (
    <div className="flex flex-wrap justify-center mb-20">
      {azList.map((alp) => {
        return (
          <button
            key={alp}
            className={`w-7 h-10 mx-2 mb-3 text-xl font-light rounded-full drop-shadow-lg ${
              alp == alphabet
                ? 'bg-white text-red-500'
                : 'bg-red-500 text-white'
            } hover:bg-white hover:text-red-500 `}
            onClick={() => clickHandler(alp)}
          >
            {alp}
          </button>
        )
      })}
    </div>
  )
}

export default AZButtons
