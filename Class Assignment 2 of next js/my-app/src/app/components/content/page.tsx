import React from 'react'
import Card from '../card/page'

function Main() {
  return (
    
    <div className="w-full md:w-[1046px] md:h-[1028px] mt-10 md:mt-[104px] mx-auto md:ml-[197px] p-5 md:p-20 gap-10 md:gap-[80px] flex flex-col justify-center items-center">
  
  <div className="w-full md:w-[699px] h-auto text-center py-6 md:py-10 flex flex-col items-center gap-6 md:gap-[40px]">
    <h5 className="text-blue-500 font-bold text-sm md:text-[16px] leading-[24px] hover:scale-110 transform-gpu transition duration-200">
      Welcome
    </h5>
    <h1 className="text-[28px] md:text-[58px] w-full md:w-[542px] leading-[40px] md:leading-[80px] font-bold">
      Selling on the internet like a pro
    </h1>
    <h4 className="font-normal text-base md:text-xl w-full md:w-[536px] leading-6 md:leading-[30px]">
      We know how large objects will act, but things on a small scale just do not act that way.
    </h4>

    <div className="w-full md:w-[365px] h-auto flex flex-col md:flex-row gap-3 md:gap-[10px] justify-center items-center">
      <button className="bg-blue-500 rounded-[5px] w-full md:w-[193px] h-[52px] py-[15px] px-[20px] hover:shadow-lg hover:shadow-blue-400/50">
        <p className="font-bold text-sm text-white">Get Quote Now</p>
      </button>
      <button className="text-blue-500 border-[1px] rounded-[5px] w-full md:w-[162px] h-[52px] py-[15px] px-[20px] hover:shadow-lg hover:shadow-blue-100/50">
        <p className="font-bold text-sm">Learn More</p>
      </button>
    </div>
  </div>
  <Card/>
</div>


      
    
    
  )
}

export default Main
