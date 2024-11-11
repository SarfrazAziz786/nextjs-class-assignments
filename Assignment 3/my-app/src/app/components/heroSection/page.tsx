import React from 'react'
import Image from 'next/image'
import arrow from '@/app/assets/Group 214.png'

const HeroSection = () => {
  return (
    <>
    
    <div className='w-[1920px] h-[829px] top-[92px] ml-[1px] py-[140px] px-[220px] bg-[#043873] flex content-center justify-center '>
    
    <div className='w-[656px] h-[361px] gap-[60px] flex flex-col  self-center'>
        <div className='w-[656px] h-[238px] gap-[24px] text-white content-between  '>
        <h2 className='w-[656px] h-[154px] font-Inter font-bold text-[64px] leading-[77.45px] tracking-[-2%] '>Get More Done with whitepace</h2>
        <p className='w-[656px] h-[60px] font-Inter font-normal text-[18px] leading-[30px] tracking-[-2%] '>Project management software that enables your teams to collaborate, plan, analyze and manage everyday </p>
        </div>
        
        
        
        <div className='w-[219px] h-[63px] rounded-lg p-[20px] gap-[10px] bg-[#4F9CF9] flex flex-row justify-center content-center align-middle  hover:bg-slate-300  '>
              <button className='w-[159px] h-[23px]  font-medium text-[18px] leading-[23px] tracking-[-2%]  text-white'>Try Whitepace free</button>
              <Image src={arrow} alt='image' className='w-[14px] h-[14px] gap-[4px] self-center' />
              </div>
    </div>
    
    
    
    
    
    <div className='w-[824px] h-[549px] gap-[4px] bg-[#C4DEFD]  hover:bg-slate-300'></div>
    </div>

    
    </>
  )
}

export default HeroSection
