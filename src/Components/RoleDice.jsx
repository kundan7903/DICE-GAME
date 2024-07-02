import React from 'react';

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <div className='flex  justify-center mt-[48px]'>
      <div onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
        <p className='ml-[10px] font-[500] text-left leading-[36px] text-[24px] '>Click on Dice to roll</p>
      </div>
    </div>
  );
};

export default RoleDice;
