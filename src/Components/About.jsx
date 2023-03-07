import React, { useState, useEffect } from 'react'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { GiCook } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const About = () => {
  const [year, setYear] = useState(0)

  useEffect(() => {
    const thisYear = new Date().getFullYear()
    setYear(thisYear)
  }, [])

  return (
    <section
      id="about-section"
      className="md:flex md:justify-between md:flex-wrap md:mt-20"
    >
      {/* Subscribe to our channel */}
      <div className="text-center bg-red-500 pb-5 md:w-2/5 md:flex md:items-center md:py-2">
        <h3 className="text-xl text-center p-3 text-white font-bold">
          Never Miss Dinner Again!
        </h3>
        <form className="flex justify-center flex-wrap space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="drop-shadow-lg rounded-sm px-8"
            required
          />
          <button
            type="submit"
            className="bg-white p-2 rounded-xl drop-shadow-lg text-sm hover:bg-black hover:text-red-500"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Links */}
      <div className="flex flex-wrap bg-black justify-around p-5 md:w-2/5 md:items-center">
        <div className="flex flex-col bg-black text-white space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <Link to="/hero" className=" hover:text-red-500">
            Home
          </Link>
          <Link to="/meals" className=" hover:text-red-500">
            Meal Recipes
          </Link>
        </div>

        <div className="flex flex-col bg-black text-white space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <a href="#" className=" hover:text-red-500">
            Careers
          </a>
          <a href="#" className=" hover:text-red-500">
            Join Us
          </a>
          <a href="#" className=" hover:text-red-500">
            Support Us
          </a>
          <a href="#" className=" hover:text-red-500">
            Contact Us
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex space-x-5 pb-5 bg-black justify-center md:w-1/5 md:items-center md:py-2">
        <AiFillFacebook className="text-3xl text-white hover:text-blue-600" />
        <AiFillInstagram className="text-3xl text-white hover:text-orange-500" />
        <AiFillYoutube className="text-3xl text-white hover:text-red-500" />
        <AiFillTwitterCircle className="text-3xl text-white hover:text-blue-400" />
        <FaPinterest className="text-3xl text-white hover:text-red-500" />
      </div>

      {/* Copyright */}
      <div className="text-center space-y-2 bg-red-500 p-5 md:w-full md:p-3">
        <div className="flex justify-center text-white">
          <GiCook className="text-3xl" />
          <span className="text-xl">Chef's Kiss</span>
        </div>
        <h6 className="text-white tracking-wide">
          Copyright &copy; All rights reserved {year}
        </h6>
      </div>
    </section>
  )
}

export default About
