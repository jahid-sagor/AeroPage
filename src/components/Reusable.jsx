import React from 'react'
import { FaBaseballBall } from "react-icons/fa";

const Reusable = ({title,para}) => {
  return (
    <>
      
           <div className='border-r-2 h-24 border-[#FAD0BC] after:mx-6  after:content-[""]   items-center relative'>
            <FaBaseballBall className=' absolute top-10' />
           </div>
           <div>
            <h2 className='text-[#09090B] font-robo text-[18px] lg:text-[20px] font-medium leading-[28px]'>{title}</h2>
            <p className='mt-[7px] text-[#71717A] font-robo text-[14px] lg:text-[16px] font-medium leading-[24px]'>{para}</p>
           </div>
       
    </>
    
  )
}

export default Reusable