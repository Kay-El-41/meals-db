import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiCook } from 'react-icons/gi'
import { RiSearchLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const RecipesNavbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [search, setSearch] = useState('')
  const navigateTo = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigateTo(`/all-recipes/search/${search}`)
    setSearch('')
  }

  const searchBar = () => {
    return (
      <>
        <form className="flex items-center" onSubmit={submitHandler}>
          <input
            type="text"
            name="search"
            className="rounded-lg drop-shadow-lg py-2 px-7 focus:outline-none"
            placeholder="Search by name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <button type="submit" className="ml-5">
            <RiSearchLine className=" text-white text-2xl" />
          </button>
        </form>
      </>
    )
  }

  const MobileSearchBox = () => {
    return (
      <div className="md:hidden flex justify-around items-center absolute bottom-[-50px] left-0 bg-red-500 h-[70px] w-full">
        {searchBar()}
      </div>
    )
  }

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="flex justify-between bg-red-500 px-5 py-6 relative">
        <Link to="/hero" className="flex h-full my-auto">
          <GiCook className="text-white text-4xl" />
          <span className="text-white text-3xl px-1 select-none">
            Chef's Kiss
          </span>
        </Link>
        <div className="hidden md:flex items-center md:space-x-5">
          {searchBar()}
        </div>

        <div
          className="md:hidden h-full my-auto"
          onClick={() => setShowSearch(!showSearch)}
        >
          {!showSearch && (
            <RiSearchLine className=" text-white text-2xl mx-auto" />
          )}
        </div>

        {showSearch && MobileSearchBox()}
      </div>
    </nav>
  )
}

export default RecipesNavbar
