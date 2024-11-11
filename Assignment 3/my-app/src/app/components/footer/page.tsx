import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/Logo.png'

const Footer = () => {
  return (
    <div className='w-[1920px] h-[461px] top-[5195px] left-[1px] pt-[140px] pb-[32px] px-[220px] gap-[200px] bg-[#043873] '>
        <div className='w-[1480px] h-[289px] gap-[100px] flex flex-col content-between text-white '>
            <div className='w-[1480px] h-[169px] gap-[100px] grid grid-cols-4 justify-between  content-between '>
                <div className=' w-[295px] h-[169px] gap-[15px] flex flex-col  content-between   '>
                    <Image src={logo} alt='white space w-[1 91px] h-[34px]' />
                    <p className=' font-Inter font-normal text-lg leading-[30px] tracking-[-2%] text-[#F7F7EE] hover:underline'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>
                <div >
                    <ul className=' w-[295px] h-[127px]  gap-[15px]  font-normal text-base leading-5 tracking-[-2%] text-white flex flex-col  content-center  ' >
                        <li className='font-bold text-[18px] leading-[21.78px] hover:underline'>Product</li>
                        <li className='text-[#FFE492] hover:underline'>Overview</li>
                        <li className='hover:underline'>Pricing</li>
                        <li className='hover:underline'>Customer stories</li>
                    </ul>
                </div>
                <div>
                    <ul className='w-[295px] h-[130px] gap-[16px] text-white font-normal text-base leading-5 tracking-[-2%] flex flex-col content-between '>
                        <li className='font-bold text-[18px] leading-[21.78px] tracking-[-2%] hover:underline'>Resources </li>
                        <li className='hover:underline'>Blog</li>
                        <li className='hover:underline'>Guides & tutorials</li>
                        <li className='hover:underline'>Help center</li>
                    </ul>
                </div>
                <div>
                <ul className='w-[295px] h-[130px] gap-[16px] text-white font-normal text-base leading-5 tracking-[-2%] flex flex-col content-between'>
                        <li className='font-bold text-[18px] leading-[21.78px] tracking-[-2%] hover:underline'>Company </li>
                        <li className='hover:underline'>About us</li>
                        <li className='hover:underline'>Careers</li>
                        <li className='hover:underline'>Media kit</li>
                    </ul>
                </div>
            </div>
            <p className='text-center hover:underline'>©2021 Whitepace LLC.</p>
        </div>
        <p className='text-slate-400 text-right hover:underline'>Auther: <cite>Sarfraz Aziz</cite></p>
      
    </div>
  )
}

export default Footer
