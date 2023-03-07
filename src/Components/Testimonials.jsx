import React from 'react'
import Gordon from '../assets/gordon_ramsey.jpg'
import Roger from '../assets/uncle_roger.jpg'
import Jamie from '../assets/jamie_oliver.jpg'
import { AiFillStar } from 'react-icons/ai'

const TestimonialsCard = ({ img, name, tets }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white drop-shadow-lg md:w-1/3">
      <img
        src={img}
        alt="img"
        className="rounded-full w-[120px] h-[120px] drop-shadow-lg"
      />
      <h4 className="font-bold p-4">{name}</h4>
      <p>{tets}</p>
      <div className="flex pt-8">
        <AiFillStar className="text-xl text-red-500" />
        <AiFillStar className="text-xl text-red-500" />
        <AiFillStar className="text-xl text-red-500" />
        <AiFillStar className="text-xl text-red-500" />
        <AiFillStar className="text-xl text-red-500" />
      </div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section
      id="testimonials-section"
      className="px-10 pb-12 mb-10 space-y-8 md:flex md:space-x-8 md:justify-center md:flex-wrap md:mt-20"
    >
      <h3 className="text-3xl font-semibold mb-10 text-red-500 md:text-4xl md:font-bold text-center md:w-full ">
        People Are Saying
      </h3>
      <TestimonialsCard
        img={Gordon}
        name={'Gordon Ramsey'}
        tets={
          'Cooking is always easier with Chefs Kiss and I instructed MasterChef contestants to check recipes from Chefs Kiss.'
        }
      />
      <TestimonialsCard
        img={Roger}
        name={'Uncle Roger'}
        tets={
          'Chefs Kiss is the best website for home cooks like me. The only thing missing is MSG.'
        }
      />
      <TestimonialsCard
        img={Jamie}
        name={'Jamie Oliver'}
        tets={
          'Chefs Kiss Recipes are so good that I had to closed down my restaurants and get roasted by Uncle Roger.'
        }
      />
    </section>
  )
}

export default Testimonials
