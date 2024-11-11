import React from 'react'
import HeroSection from './components/heroSection/page'
import Image from 'next/image'
import arrow from '@/app/assets/Group 214.png'
import workTogetherImage from '@/app/assets/Work Together Image.png'
import applelogo from '@/app/assets/Apple.png'
import microsoftlogo from '@/app/assets/microsoft 1.png'
import slacklogo from '@/app/assets/Slack.png'
import  googlelogo from '@/app/assets/Google.png'
import Footer from './components/footer/page'






const Home = () => {
  return (
    <div className='font-Inter'>
      <HeroSection/>

      <div className='w-[1920px] h-[1588px] top-[921px] left-[1px] py-[140px] px-[220px] gap-[100px] flex flex-col content-between'>

      {/* project management section  */}
      <div className='w-[1480px] h-[547px] gap-[60px] flex flex-row '>
        <div className='w-[672px] h-[411px] gap-[60px] flex flex-col justify-between self-center'>
          <div className='w-[672px] h-[288px] g-6 flex flex-col justify-between  '>
            <h1 className='w-[672px] h-[90px] font-Inter font-bold text-7xl leading-[87.14px] tracking-[-2%] text-[#212529] '>Project Management
            </h1>
            <p className='w-[672px] h-[90px] font-Inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#212529]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          </div>
          
          <div className='w-[201px] h-[63px] rounded-md  py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9] flex flex-row justify-center content-center align-middle  hover:bg-slate-300 '>
          <button className='w-[97px] h-[23px] font-Inter font-medium text-[18px] leading-[23px] tracking-[-2%] text-white  '>Get Started </button>
          <Image src={arrow}  alt='image' className='w-[14px] h-[14px] gap-[4px] self-center'/>
          </div>
          </div>
      <div className='w-[748px] h-[547px] bg-[#C4DEFD]  hover:bg-slate-300'></div>
      </div>

      {/* work together section */}
      <div className='w-[1480px] h-[661px] gap-[100px] flex flex-row content-center '>
          <div className='w-[710px] h-[661px] hover:scale-110'>
              <Image src={workTogetherImage} alt='Work Together'/></div>
        
           <div className='w-[670px] h-[294px] gap-[60px] self-center ' >
                <div className='w-[670px] h-[171px] gap-[24px] self-center'>
                    <h1 className='w-[670px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-2%] text-[#212529]'>Work together</h1>
                    <p className='w-[670px] h-[60px] font-normal text-lg leading-[30px] tracking-[-2%] text-[#212529]'>With whitepace, share your notes with your colleagues and collaborate on them.
                    You can also publish a note to the internet and share the URL with others.
                    </p>
                  </div>
                   <div className='w-[186px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] flex flex-row justify-center content-center align-middle  hover:bg-slate-300 '>
                    <button className='w-[82px] h-[23px]  font-medium text-[18px] leading-[23px] tracking-[-2%] text-white'>Try it now</button>
                    <Image src={arrow} alt='image' className='w-[14px] h-[14px] gap-[4px] self-center' />
                    </div>
            </div>
          
         </div>
      </div>
      
          

         {/* Extention Section */}
      <div  className='w-[1921px] h-[759px] top-[2509px] left-[1px] py-[140px] px-[220px] gap-[98px] bg-[#043873] flex flex-row '>
          <div className='w-[697px] h-[294px] gap-[60px] flex flex-col content-between self-center'>
              <div className='w-[697px] h-[171px] gap-[24px] text-white'>
                <h1  className='w-[697px] h-[87px] font-Inter font-bold text-[72px] leading-[87.14px] tracking-[-2%]'>Use as Extension</h1>
                <p className='w-[697px] h-[60px] font-Inter font-normal text-[18px] leading-[30px] tracking-[-2%] '>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                </p>
                </div>
                <div className='w-[171px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] flex flex-row justify-center align-middle  hover:bg-slate-300  '>
              <button className='w-[82px] h-[23px]  font-medium text-[18px] leading-[23px] tracking-[-2%] text-white'>Let’s Go</button>
              <Image src={arrow} alt='image' className='w-[14px] h-[14px] gap-[4px] self-center' />
              </div>
          </div>
         <div className='w-[748px] h-[547px] bg-[#C4DEFD]  hover:bg-slate-300'></div>

      </div>

    
      {/* Customise Section */}

      <div  className='w-[1921px] h-[812.09px] top-[3268px] left-[1px] py-[140px] px-[220px] gap-[98px] bg-white flex flex-row '>
          <div className='w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]  hover:bg-slate-300'></div>
         
          <div className='w-[669px] h-[411px] gap-[60px] flex flex-col content-between self-center'>
              <div className='w-[669px] h-[288px] gap-[24px] flex flex-col content-between '>
                <h1  className='w-[669px] h-[174px] font-Inter font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]'>Customise it
                to your needs</h1>
                <p className='w-[669px] h-[90px] font-Inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#212529] '>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.    </p>
                </div>
                <div className='w-[171px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] flex flex-row justify-center align-middle   hover:bg-slate-300  '>
              <button className='w-[67px] h-[23px]  font-medium text-[18px] leading-[23px] tracking-[-2%] text-white'>Let’s Go</button>
              <Image src={arrow} alt='image' className='w-[14px] h-[14px] gap-[4px] self-center' />
              </div>
          </div>

      </div>
        
    

      {/* your work section */}
      <div className='w-[1921px] h-[574px] top-[4080px] left-[1px] py-[140px] px-[220px]  bg-[#043873]   '>
          <div className='w-[1481px] h-[294px] gap-[60px]  flex  flex-col justify-center text-center '>

              <div className='w-[1064px] h-[171px] gap-[24px]  flex flex-col content-center m-auto'>
                <h1  className='w-[1064px] h-[87px] font-Inter font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-white '>Your work, everywhere you are</h1>
                <p className='w-[1064px] h-[60px] font-Inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-white '>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!    </p>
              </div>

              <div className='w-[195px] h-[63px] rounded-md py-5 px-10 gap-[10px] bg-[#4F9CF9] flex flex-row justify-center align-middle m-auto   hover:bg-slate-300'>
              <button className='w-[91px] h-[23px]  font-medium text-[18px] leading-[23px] tracking-[-2%] text-white'>Try Taskey</button>
              <Image src={arrow} alt='image' className='w-[14px] h-[14px] gap-[4px] self-center' />
              </div>


          </div>

      </div>


      {/* Our sponsors */}

      <div className='w-[1922px] h-[538px] top-[4654px] gap-[100px] py-[140px] px-[220px] flex flex-col justify-between   '>
          <h1  className='w-[1482px] h-[87px] font-Inter font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529] text-center'>Our sponsors</h1>
          <div className='flex justify-between'>
          <Image src={applelogo} alt='image' className='w-[55.47px] h-[68px] hover:scale-125' />
          <Image src={microsoftlogo} alt='image' className='w-[287px] h-[62px] hover:scale-125' />
          <Image src={slacklogo} alt='image' className='w-[280px] h-[71px] hover:scale-125' />
          <Image src={googlelogo} alt='image' className='w-[211px] h-[69.81px] hover:scale-125' />
            
          </div>          

      </div>


<Footer/>

  
      



      </div>
    
  )
}

export default Home
