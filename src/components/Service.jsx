import React from 'react'
import Reusable from './Reusable';
import ScrollToTop from "react-scroll-to-top";

const Service = () => {
  return (
   <section id='service' className='my-[120px]'>
    <div className='flex max-w-container mx-auto justify-between flex-wrap'>
        <div className="w-[90%] mx-auto mt-4 lg:mt-0 lg:mx-0 lg:w-[28%] flex items-center gap-8 lg:gap-10 bg-[#FDEDE8] py-8 px-6 rounded-lg  border-red-500">
           <Reusable title="Immediate Deployment" para="Et vero eos et accusamus et 
iusto odio dignissimos"/>
        </div>
        <div className="w-[90%] mx-auto mt-4 lg:mt-0 lg:mx-0 lg:w-[28%] flex items-center gap-8  bg-[#FDEDE8] py-8 px-6 rounded-lg">
            <Reusable title="Immediate Deployment" para="Et vero eos et accusamus et 
iusto odio dignissimos"/>
        </div>
        <div className="w-[90%] mx-auto mt-4 lg:mt-0 lg:mx-0 lg:w-[28%] flex items-center gap-8  bg-[#FDEDE8] py-8 px-6 rounded-lg">
        <Reusable title="Immediate Deployment" para="Et vero eos et accusamus et 
iusto odio dignissimos"/>
        </div>
    </div>
    <ScrollToTop smooth />
   </section>
  )
}

export default Service