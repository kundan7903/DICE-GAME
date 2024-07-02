import React from 'react'

const Rules = () => {



  return (
    <div className='w-[794px] h-[208px] bg-[#FBF1F1] top-[776px] mt-[34px] left-[338px] p-[20px] gap-[24px] mx-auto '>
    <h2 className='font-[700] leading-[36px] text-left text-[24px] w-[280px] h-[36px] '>How to play dice game</h2>
    <div className="w-[754px] h-[108px] gap-[4px] ">
      <p className='font-[500] text-[16px] leading-[24px] text-left w-[153px] h-[24px] '>Select any number</p>
      <p className='font-[500] text-[16px] leading-[24px] text-left w-[160px] h-[24px] '>Click on dice image</p>
      <p className='font-[500] text-[16px] leading-[24px] text-left w-[754px] h-[24px] '>
        after click on dice if selected number is equal to dice number you
        will get same point as dice{" "}
      </p>
      <p className='font-[500] text-[16px] leading-[24px] text-left w-[424px] h-[24px] '>if you get wrong guess then 2 point will be dedcuted </p>
    </div>
  </div>
  )
}

export default Rules