import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Meals from './Meals'
import Recipes from './Recipes'
import About from './About'
import GoToTop from './GoToTop'
import Testimonials from './Testimonials'

const LandingPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <Meals />
        <Recipes />
        <Testimonials />
      </main>
      <footer>
        <About />
      </footer>
      <GoToTop />
    </>
  )
}

export default LandingPage
