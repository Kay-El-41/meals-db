import React from 'react'
import Navbar from '../Components/Navbar'
import Error from '../assets/error_404.png'
import About from '../Components/About'

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center py-8 space-y-8">
        <img src={Error} alt="" className="p-10 h-[500px] mt-12" />
        <div>
          <h2 className="text-4xl font-extrabold mb-8 text-center md:text-left">Error 404!</h2>
          <strong>The Chef Couldn't Find What You Are Searching For!</strong>
        </div>
      </div>
      <About />
    </>
  )
}

export default ErrorPage
