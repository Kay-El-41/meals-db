import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUp } from 'react-icons/bs'

const GoToTop = () => {
  return (
    <Link
      to="/hero"
      className="fixed bottom-10 right-10 bg-red-500 drop-shadow-lg rounded-full p-2 z-40"
    >
      <BsArrowUp className="text-3xl text-white" />
    </Link>
  )
}

export default GoToTop
