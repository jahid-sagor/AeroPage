import React from 'react'
import Logo from "../assets/logo.png"
import { FaCloudArrowUp } from "react-icons/fa6";
import ScrollspyNav from "react-scrollspy-nav";


const Memu = () => {
  return (
    <section>
    <div className='max-w-container mx-auto flex justify-between items-center flex-wrap'>
       <div className="w-full lg:w-[30%]">
        <img src={Logo} alt="Logo" />
       </div>
       <div className="w-[80%] mx-10 lg:mx-0 lg:w-[30%] ">
       <ScrollspyNav
           scrollTargetIds={["banner", "service"]}
           offset={100}
           activeNavClass="is-active"
           scrollDuration="1000"
           headerBackground="true"
       >
         <ul className='flex justify-between mt-2'>
            <li><a className='text-[#0B0B0B] hover:text-[#EA580C] font-abz hover:font-robo text-[16px] font-normal hover:font-medium line-height:normal ' href="#banner">Home</a></li>
            <li><a className='text-[#0B0B0B] hover:text-[#EA580C] font-abz hover:font-robo text-[16px] font-normal hover:font-medium line-height:normal ' href="#">About</a></li>
            <li><a className='text-[#0B0B0B] hover:text-[#EA580C] font-abz hover:font-robo text-[16px] font-normal hover:font-medium line-height:normal ' href="#service">Service</a></li>
            <li><a className='text-[#0B0B0B] hover:text-[#EA580C] font-abz hover:font-robo text-[16px] font-normal hover:font-medium line-height:normal ' href="#">Contact</a></li>
         </ul>
         </ScrollspyNav>
       </div>
       <div className="w-[60%] mt-6 mx-16 lg:w-[20%]">
        <div className='flex lh:gap-4  items-center py-3 px-4 lg:py-4 lg:px-6 bg-[#EA580C] rounded-xl'>
        <div className=''>
        <FaCloudArrowUp className='text-white mx-6 text-[20px] rotate-180'/>
        </div>
        <a className='text-white text-center font-rem  text-[14px]  lg:text-[16px] font-medium' href="#"> Download</a>
        </div>
       </div>
    </div>
   </section>
  )
}

export default Memu