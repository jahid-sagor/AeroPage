import React from 'react'
import Bannerimg from "../assets/banner.png"
import { FaRegBell } from "react-icons/fa6";





const Banner = () => {
  return (
   <section id='banner' className='max-w-container mx-auto '>
    <div className='flex justify-between flex-wrap'>
        <div className="w-full lg:w-[60%] mt-[80px] lg:mt-[191px]">
           <div className='w-[60%] lg:w-[25%] mx-2 lg:mx-0  flex gap-2 items-center border-2 rounded-[24px]'>
            <div className= ' px-3 py-3  bg-[#FAD7C4] rounded-full'>
              <FaRegBell className=' text-black'/>
            </div>
            <a className='text-[#000] font-abz text-[14px] lg:text-[16px] font-normal' href="">Startup Business</a>
           </div>
           <div className='mt-[35px]'>
              <h2 className='text-[#09090B] font-robo text-[24px] lg:text-[36px] font-medium leading-[36px] lg:leading-[45px] mx-2 lg:mx-0 lg:pr-[300px]'>Empowering startups to fuel their business growth</h2>
           </div>
           <div className='mt-[32px]'>
            <p className='text-[#000] font-robo text-[16px] lg:text-[18px] font-normal leading-[28px] mx-2 lg:mx-0  lg:pr-[200px]'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet, <br /> velit <br /> nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
           </div>
           <div className='mt-[37px]'>
            <a className='text-[#fff] font-abz text-[14px] lg:text-[16px] font-normal py-4 px-14 lg:px-20 bg-[#EA580C] rounded-md mx-2 lg:mx-0' href="#">Get started now </a>
           </div>
        </div>
        <div className="w-full lg:w-[40%] mt-[50px] lg:mt-[114px] ">
            <img src={Bannerimg} width={451} height={414}  alt="Bannerimg" />
        </div>
    </div>
   </section>
  )
}

export default Banner