'use client'
import Link from 'next/link'
import { useState } from 'react'
import { createPortal } from 'react-dom'

function PopUp({ open, title, description }) {
  const [showPopUp, setShowPopUp] = useState(open)
  const togglePopUp = () => setShowPopUp((state) => !state)

  return (
    showPopUp &&
    createPortal(
      <div className='bg-black/50 fixed top-0 h-full w-full flex justify-center items-center p-4'>
        <div className='bg-[#14213D] text-white grid relative gap-y-2.5 text-center p-10 w-full max-w-screen-sm rounded-[20px]'>
          <button onClick={togglePopUp} className='absolute right-7 top-6'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M19.2806 18.2194C19.3502 18.2891 19.4055 18.3718 19.4432 18.4628C19.4809 18.5539 19.5003 18.6515 19.5003 18.75C19.5003 18.8486 19.4809 18.9461 19.4432 19.0372C19.4055 19.1282 19.3502 19.2109 19.2806 19.2806C19.2109 19.3503 19.1281 19.4056 19.0371 19.4433C18.9461 19.481 18.8485 19.5004 18.7499 19.5004C18.6514 19.5004 18.5538 19.481 18.4628 19.4433C18.3717 19.4056 18.289 19.3503 18.2193 19.2806L11.9999 13.0603L5.78055 19.2806C5.63982 19.4214 5.44895 19.5004 5.24993 19.5004C5.05091 19.5004 4.86003 19.4214 4.7193 19.2806C4.57857 19.1399 4.49951 18.949 4.49951 18.75C4.49951 18.551 4.57857 18.3601 4.7193 18.2194L10.9396 12L4.7193 5.78063C4.57857 5.6399 4.49951 5.44903 4.49951 5.25001C4.49951 5.05098 4.57857 4.86011 4.7193 4.71938C4.86003 4.57865 5.05091 4.49959 5.24993 4.49959C5.44895 4.49959 5.63982 4.57865 5.78055 4.71938L11.9999 10.9397L18.2193 4.71938C18.36 4.57865 18.5509 4.49959 18.7499 4.49959C18.949 4.49959 19.1398 4.57865 19.2806 4.71938C19.4213 4.86011 19.5003 5.05098 19.5003 5.25001C19.5003 5.44903 19.4213 5.6399 19.2806 5.78063L13.0602 12L19.2806 18.2194Z'
                fill='white'
              />
            </svg>
          </button>
          <svg className='mx-auto' xmlns='http://www.w3.org/2000/svg' width={120} height={120} viewBox='0 0 135 135'>
            <path
              d='M67.5 123.75C74.8883 123.76 82.2056 122.309 89.0314 119.482C95.8573 116.654 102.057 112.506 107.274 107.274C112.506 102.057 116.654 95.8572 119.482 89.0314C122.309 82.2056 123.76 74.8883 123.75 67.5C123.759 60.1118 122.309 52.7945 119.481 45.9687C116.654 39.1429 112.505 32.9431 107.274 27.7256C102.057 22.4945 95.8573 18.3459 89.0314 15.5185C82.2056 12.691 74.8883 11.2404 67.5 11.25C60.1118 11.2406 52.7946 12.6913 45.9687 15.5187C39.1429 18.3461 32.9432 22.4946 27.7257 27.7256C22.4946 32.9431 18.3462 39.1429 15.5188 45.9687C12.6913 52.7945 11.2406 60.1118 11.25 67.5C11.2405 74.8883 12.6911 82.2056 15.5185 89.0314C18.346 95.8572 22.4945 102.057 27.7257 107.274C32.9432 112.505 39.1429 116.654 45.9687 119.481C52.7946 122.309 60.1118 123.759 67.5 123.75Z'
              stroke='#23856D'
              strokeWidth='8'
              strokeLinejoin='round'
            />
            <path
              d='M45 67.5L61.875 84.375L95.625 50.625'
              stroke='#23856D'
              strokeWidth='9'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <p className='text-3xl font-bold'>{title}</p>
          <p className='text-xl'>{description}</p>
          <Link href={'/'} className='font-medium text-2xl text-secondary'>
            Volver al inicio
          </Link>
        </div>
      </div>,
      document.body,
      'root-popup'
    )
  )
}

export default PopUp
