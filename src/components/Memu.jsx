import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaCloudArrowUp } from "react-icons/fa6";
import ScrollspyNav from "react-scrollspy-nav";
import { FaBars } from "react-icons/fa";


const Memu = () => {
  let [show, setShow] = useState(false)

  let handleShow = () => {
    setShow(!show)
  } 



  return (
    <section>
    <div className='max-w-container mx-auto flex justify-between items-center flex-wrap '>
       <div className="w-full lg:w-[30%] mx-[20px] lg:mx-0">
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
         <ul className={`lg:flex justify-between py-4 lg:py-0 mt-2 absolute right-0 top-0 lg:static ${show ? " top-[132px] bg-[#EA580C] rounded-md right-0 w-full duration-1000" : " top-[-200px] w-full right-0 duration-1000" }`}>
            <li className='py-1 lg:py-0 text-right mr-4 lg:mr-0'><a className='text-white lg:text-[#0B0B0B] lg:hover:text-[#EA580C] font-abz hover:font-robo text-[16px] font-normal hover:font-medium line-height:normal ' href="#banner">Home</a></li>
            <li  className='py-1 lg:py-0 text-right mr-4 lg:mr-0'><a className='text-white lg:text-[#0B0B0B] lg:hover:text-[#EA580C] font-abz hover:font-robo text-[16px] font-normal hover:font-medium line-height:normal ' href="#">About</a></li>
            <li className='py-1 lg:py-0 text-right mr-4 lg:mr-0'><a className='text-white lg:text-[#0B0B0B] lg:hover:text-[#EA580C] font-abz hover:font-robo text-[16px] font-normal hover:font-medium line-height:normal ' href="#service">Service</a></li>
            <li className='py-1 lg:py-0 text-right mr-4 lg:mr-0'><a className='text-white lg:text-[#0B0B0B] lg:hover:text-[#EA580C] font-abz hover:font-robo text-[16px] font-normal hover:font-medium line-height:normal ' href="#">Contact</a></li>
         </ul>
         </ScrollspyNav>
       </div>
         
       <div className="w-[60%] mt-2 mx-16 lg:w-[20%]">
        <div className='flex lh:gap-4  py-3 px-4 lg:py-4 lg:px-6 bg-[#EA580C] rounded-xl'>
        <div className=''>
        <FaCloudArrowUp className='text-white mx-6 text-[20px] rotate-180'/>
        </div>
        <a className='text-white  font-rem  text-[14px]  lg:text-[16px] font-medium' href="#"> Download</a>
        </div>
       </div>
       <div className='max-w-container mt-2 mx-auto lg:hidden absolute right-2 top-[96px] ' onClick={handleShow}>
               {show == true ? <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
						</svg> : <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M16.803,18.615h-4.535c-1,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.535C18.616,17.803,17.804,18.615,16.803,18.615zM17.71,12.268c0-0.502-0.405-0.906-0.907-0.906h-4.535c-0.501,0-0.906,0.404-0.906,0.906v4.535c0,0.502,0.405,0.906,0.906,0.906h4.535c0.502,0,0.907-0.404,0.907-0.906V12.268z M16.803,9.546h-4.535c-1,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.534C18.616,8.734,17.804,9.546,16.803,9.546zM17.71,3.198c0-0.501-0.405-0.907-0.907-0.907h-4.535c-0.501,0-0.906,0.406-0.906,0.907v4.534c0,0.501,0.405,0.908,0.906,0.908h4.535c0.502,0,0.907-0.406,0.907-0.908V3.198z M7.733,18.615H3.198c-1.002,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.535C9.547,17.803,8.735,18.615,7.733,18.615zM8.64,12.268c0-0.502-0.406-0.906-0.907-0.906H3.198c-0.501,0-0.907,0.404-0.907,0.906v4.535c0,0.502,0.406,0.906,0.907,0.906h4.535c0.501,0,0.907-0.404,0.907-0.906V12.268z M7.733,9.546H3.198c-1.002,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.534C9.547,8.734,8.735,9.546,7.733,9.546z M8.64,3.198c0-0.501-0.406-0.907-0.907-0.907H3.198c-0.501,0-0.907,0.406-0.907,0.907v4.534c0,0.501,0.406,0.908,0.907,0.908h4.535c0.501,0,0.907-0.406,0.907-0.908V3.198z"></path>
						</svg>}
          </div>
    </div>
   </section>
  )
}

export default Memu