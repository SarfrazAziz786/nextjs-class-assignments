
import React from 'react'
import {Montserrat} from 'next/font/google'
import Link from 'next/link'
import Contact from '@/app/contact/page'
import Product from '@/app/product/page'
import Pricing from '@/app/pricing/page'

function Navbar() {
  return (
    <div>
      <div className=' bg-black w-[1322px] h-[91px] ml-9  flex font-bold text-sm fixed top-0 z-50  '   >
      <div className='w-[187px] h-[58px] top-[17px] ml-[136px] p-4 ' >
        <h3><Link href="#" className='min-w-full text-center md:text-2xl hover: border-blue-500  hover:border-b-4 '>BrandName</Link></h3>
        </div>
      
      <div className=' hidden md:flex w-[815px] h-[58px] top-[16px] ml-12 flex-row justify-between items-center '>
        
        <ul className="w-[275px] h-[24px]  flex  gap-5   ">
          <li className='hover: border-blue-500  hover:border-b-4 hover:pb-7 '><Link href="http://localhost:3000">Home</Link></li>
          <li className='hover: border-blue-500  hover:border-b-4 hover:pb-7 '><Link href="http://localhost:3000/product">Product</Link></li>
          <li className='hover: border-blue-500  hover:border-b-4 hover:pb-7 '><Link href="http://localhost:3000/pricing">Pricing</Link></li>
          <li className='hover: border-blue-500  hover:border-b-4 hover:pb-7'><Link href="http://localhost:3000/contact">Contact</Link></li>
        </ul>
      
        <div className="flex  items-center  w-[189px]  gap-5">

        <Link href="#" id='login' className='hover: border-blue-500  hover:border-b-4 '>Login</Link>
        <Link href="#" id='joinus' className='rounded-md w-[110px] h-[52px] bg-[#23A6F0] px-[25px] py-[15px] gap[15px] hover: border-white hover:border-b-4 '>JOIN US</Link>
        
      </div>

      </div>

      </div>
    </div>
  )
}

export default Navbar
