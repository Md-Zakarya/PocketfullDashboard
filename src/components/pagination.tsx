import React, { useState } from 'react';

const Pagination = () => {
  const [selectedButton, setSelectedButton] = useState<number>(1); // Specify number type for selectedButton

  const handleButtonClick = (buttonNumber: number | string) => {
    if (typeof buttonNumber === 'number') {
      setSelectedButton(buttonNumber);
    }
    // Handle other cases if needed (like ellipsis)
  };

  const buttonStyle = "font-semibold py-1 px-2 rounded shadow mx-1"; // Reduced padding
  const selectedButtonStyle = "bg-[#5932EA] text-white"; // Selected button styles
  const normalButtonStyle = "bg-gray-200 hover:bg-gray-300 text-gray-800";

  return (
    <div className='flex justify-between mt-8 mb-2'>
      <div className='text-[#ACACAC]'>
        <p>Showing data 1 to 8 of 256K entries</p>
      </div>
      <div className="flex items-center space-x-4">
        <button 
          className={`${buttonStyle} ${normalButtonStyle}`} 
          onClick={() => handleButtonClick(selectedButton - 1)}
          disabled={selectedButton === 1} // Disable previous button when on first page
        >
          <svg className="w-3 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {[1, 2, 3, 4, '...', 40].map((num, index) => (
          <button
            key={index}
            className={`${buttonStyle} ${num === selectedButton ? selectedButtonStyle : normalButtonStyle} w-8 h-8`} // Adjusted width (w-8) and height (h-8)
            onClick={() => num !== '...' && handleButtonClick(num)}
          >
            {num}
          </button>
        ))}

        <button 
          className={`${buttonStyle} ${normalButtonStyle}`} 
          onClick={() => handleButtonClick(selectedButton + 1)}
          disabled={selectedButton === 40} // Disable next button when on last page
        >
          <svg className="w-3 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
