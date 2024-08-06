import React from 'react'
import '../style/Cards.css'
import { useMediaQuery } from 'react-responsive';

const Cards = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 359 });
  return (

    <div className=''>
    {isSmallScreen ? (
      <>
      <div className='flex justify-center'>
      <div className='cardStyle text-start'>
    <i class="fa-solid fa-pen sky"></i>
        <p className='text-slate-500'>Create a workout plan</p>
    </div>
    <div className='cardStyle text-start'>
    <i class="fa-solid fa-graduation-cap purple"></i>
        <p className='text-slate-500'>Overcome procrastination </p>
    </div>
    </div>
      </>
    ) : (
      <>
      <div className='flex justify-center'>
      <div className='cardStyle text-start'>
    <i class="fa-solid fa-pen sky"></i>
        <p className='text-slate-500'>Create a workout plan</p>
    </div>
    <div className='cardStyle text-start'>
    <i class="fa-solid fa-graduation-cap purple"></i>
        <p className='text-slate-500'>Overcome procrastination </p>
    </div>
    <div className='cardStyle text-start'>
    <i class="fa-regular fa-lightbulb yellow"></i>
        <p className='text-slate-500'>What to do with art</p>
    </div>
    <div className='cardStyle text-start'>
    <i class="fa-solid fa-code text-start red"></i>
        <p className='text-slate-500'>Python script for daily email reports</p>
    </div>
    </div>
      </>
    )}
    

    </div>
  )
}

export default Cards