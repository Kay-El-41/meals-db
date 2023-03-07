import React, { useState, useEffect } from 'react'
import { GiCook } from 'react-icons/gi'
import { GoKebabVertical } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const NavMenu = () => {
  return (
    <>
      <li className="py-1 px-6 text-lg text-white hover:underline">
        <Link to="/hero">Home</Link>
      </li>
      <li className="py-1 px-6 text-lg text-white hover:underline">
        <Link to="/meals">Meals</Link>
      </li>
      <li className="py-1 px-6 text-lg text-white hover:underline">
        <Link to="/recipes">Recipes</Link>
      </li>
      <li className="py-1 px-6 text-lg text-white hover:underline">
        <Link to="/testimonials">Testimonials</Link>
      </li>
      <li className="py-1 px-6 text-lg text-white hover:underline">
        <Link to="/about">About</Link>
      </li>
    </>
  )
}

const Navbar = () => {
  const [menuView, setView] = useState(false)
  const section = useParams()

  useEffect(() => {
    const sectionId = `${section.section}-section`
    const sectionView = document.getElementById(sectionId)
    if (sectionView) {
      sectionView.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [section])

  const viewMenu = () => {
    return (
      <div className="md:hidden absolute left-0 top-0 h-[300px] w-full bg-red-500 drop-shadow-xl">
        <ul className="flex flex-col gap-3 h-full my-auto items-left place-content-center">
          <NavMenu />
        </ul>
        <AiOutlineClose
          className="absolute top-10 right-6 text-white"
          onClick={() => setView(!menuView)}
        />
      </div>
    )
  }

  return (
    <nav className="fixed w-full z-50">
      {/* Logo */}
      <div className="flex justify-between bg-red-500 px-5 py-6 relative">
        <Link to="/hero" className="flex h-full my-auto">
          <GiCook className="text-white text-4xl" />
          <span className="text-white text-3xl px-1 select-none">
            Chef's Kiss
          </span>
        </Link>
        {/* Menu */}
        <div className="hidden md:block">
          <ul className="flex">
            <NavMenu />
          </ul>
        </div>
        {/* Kebab Menu for Mobile */}
        <div
          className="md:hidden h-full my-auto"
          onClick={() => setView(!menuView)}
        >
          <GoKebabVertical className=" text-white text-2xl mx-auto" />
        </div>

        {menuView && viewMenu()}
      </div>
    </nav>
  )
}

export default Navbar
