import React from 'react'

const TotalScore = ({ score }) => {
  return (
    <div className='w-[135px] h-[151px] gap-[3px] '>
      <h1 className='font-[500] text-[100px] leading-[150px] text-left w-[62px] h-[112px] '>{score}</h1>
      <p className='font-[500] text-[24px] leading-[36px] text-left w-[162px] h-[36px]'>Total Score</p>
    </div>
  )
}

export default TotalScore