import React from 'react'

import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import DetailPage from './Pages/DetailPage'
import ErrorPage from './Pages/ErrorPage'
import SearchRecipes from './Pages/SearchRecipes'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/:section" element={<LandingPage />}></Route>
        <Route path="/all-recipes" element={<SearchRecipes />}></Route>

        <Route path="/all-recipes/search/:search" element={<SearchRecipes />}></Route>
        <Route path="/all-recipes/category/:category" element={<SearchRecipes />}></Route>
        <Route path="/all-recipes/list/:alphabet" element={<SearchRecipes />}></Route>
        <Route path="/all-recipes/area/:area" element={<SearchRecipes />}></Route>

        <Route path="/detail/:id" element={<DetailPage />}></Route>
        {/* <Route path="/all-recipes/:category" element={<SearchRecipes />}></Route> */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  )
}

export default App

// to do list

/*
- Category is not working!
- Fix Category system

- Detail Page
  - List items from API meal with ID

 */
