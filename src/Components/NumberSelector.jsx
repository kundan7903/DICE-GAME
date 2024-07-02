import React, { useState } from 'react';
import Box1 from './Box1'; // Assuming Box component is defined in a separate file

const NumberSelector = (
  {
    error, setError,
    selectedNumber, setSelectedNumber,
  }
) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  // const [selectedNumber, setSelectedNumber] = useState();
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <div className=''>


      <p className='text-red-500 font-[400] leading-[36px] text-[24px] text-left '>{error}</p>
      <div className='lg:flex  items-end gap-[24px] mr-4 mt-4 '>
        {arrNumber.map((value, i) => (
          <Box1 
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box1>
        ))}
      </div>




      <p className='ml-[374px] font-[700] text-[24px] leading-[36px] text-left h-[36px] w-[182px] '>Select Number</p>
    </div>
  );
};

export default NumberSelector;




