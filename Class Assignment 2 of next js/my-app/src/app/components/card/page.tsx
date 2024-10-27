import React from 'react'
'Use Client'

function Card() {
  return (
    <div className="px-4 md:px-0">
      <div className="max-w-full md:w-[1046px] md:h-[292px] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
        
        <div className="bg-white hover:shadow-lg hover:shadow-white text-black w-full h-auto md:w-[328px] md:h-[292px] py-6 px-6 md:py-[35px] md:px-[40px] flex flex-col items-start gap-4 md:gap-[20px] shadow-lg hover:-translate-y-3 md:hover:-translate-y-12 transition-transform duration-200">
          <div className="w-16 h-16 md:w-[70px] md:h-[76px] rounded-xl bg-pink-200 flex items-center justify-center gap-2 md:py-[22px] md:px-[19px]"></div>
          <div className="bg-red-500 w-12 h-[2px] md:w-[50px]"></div>
          <h3 className="text-[14px] md:text-[16px] font-bold leading-[20px] md:leading-[24px]">Training Courses</h3>
          <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px]">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
        
        <div className="bg-white hover:shadow-lg hover:shadow-white text-black w-full h-auto md:w-[328px] md:h-[292px] py-6 px-6 md:py-9 md:px-10 flex flex-col gap-4 md:gap-5 shadow-lg hover:-translate-y-3 md:hover:-translate-y-12 transition-transform duration-200">
          <div className="w-16 h-16 md:w-[70px] md:h-[76px] rounded-xl bg-lime-200 flex items-center justify-center gap-2 md:py-[22px] md:px-[19px]"></div>
          <div className="bg-red-500 w-12 h-[2px] md:w-[50px]"></div>
          <h3 className="text-[14px] md:text-[16px] font-bold leading-[20px] md:leading-[24px]">2,769 Online Courses</h3>
          <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px]">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
        
        <div className="bg-blue-500 hover:shadow-lg hover:shadow-blue-200 w-full h-auto md:w-[328px] md:h-[292px] py-6 px-6 md:py-9 md:px-10 flex flex-col gap-4 md:gap-5 shadow-lg hover:-translate-y-3 md:hover:-translate-y-12 transition-transform duration-200">
          <div className="w-16 h-16 md:w-[70px] md:h-[76px] rounded-xl bg-white flex items-center justify-center gap-2 md:py-[22px] md:px-[19px]"></div>
          <div className="bg-white w-12 h-[2px] md:w-[50px]"></div>
          <h3 className="text-[14px] md:text-[16px] font-bold leading-[20px] md:leading-[24px] text-white">Training Courses</h3>
          <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-white">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card
