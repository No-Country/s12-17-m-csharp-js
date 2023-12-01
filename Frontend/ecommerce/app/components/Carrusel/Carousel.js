'use client'
import { useState } from 'react'
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import { IoIosArrowDropright } from "react-icons/io";
export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0)

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1)
    else setCurrent(current - 1)
  }

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className='overflow-hidden relative'>
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {slides.map((s) => {
          return <img key={s} src={s} />
        })}
      </div>

      <div className='absolute top-0 h-full w-full justify-between items-center flex text-white  text-3xl overflow-hidden'>
        <button onClick={previousSlide} className='rounded-full bg-white '>
          <CiCircleChevLeft className='text-primary'/>
        </button>
        <button onClick={nextSlide} className='rounded-full bg-white '>
        <CiCircleChevRight  className='text-primary ' />
        </button>
      </div>

      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i)
              }}
              key={'circle' + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? 'bg-white' : 'bg-gray-500'}`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
