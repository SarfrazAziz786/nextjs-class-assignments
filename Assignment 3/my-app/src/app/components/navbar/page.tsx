import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/Logo.png'


const Navbar = () => {
  return (
    <div>
    
        <div className='flex  w-[1920px] h-[92px] lm-[1px] justify-between py-4 px-[220px] bg-[#043873] items-center '>
            
            <div className='w-[191px] h-[34px]'>
              <Image src={logo} alt='Logo' />
            </div>
            
            <div className='flex  flex-row w-[737.5px] h-[60px] gap-[60px] items-center  '>
              <ul className='flex justify-between flex-row w-[549px] h-[23px] gap-8  text-white font-dmSans font-medium text-[18px] leading-[23px]'  >
                <li className='hover:underline'>Products</li>
                <li className='hover:underline' >Solutions</li>
                <li className='hover:underline' >Resources</li>
                <li className='hover:underline' >Pricing</li>
            </ul>            
            

            <div className='w-[126px] h-[60px]'>
              <button className='  hover:bg-slate-300 py-4 px-10 gap-[10px] rounded-lg bg-[#FFE492] font-Inter font-medium text-[18px] leading-[23px] tracking[-2%]'>Login</button> </div>
            </div>
        
            </div>
    
    
    
    
    </div>
  )
}

export default Navbar
