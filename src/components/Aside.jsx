import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {


   useEffect(() => {
      let links = document.querySelectorAll('a')
      links.forEach(link => {
         if(link.classList.contains('active')) {
            link.lastChild.style.color = 'white'
            link.firstChild.style.filter = 'invert(-100%)'
         } else {
            link.lastChild.style.color = '#616A8B'
            link.firstChild.style.filter = 'invert(0%)'
         }
      } )
   }, [])
   
   return ( 
   <>
      <aside className="w-[16%] h-[100vh] bg-gradient drop-shadow-aside rounded-asideRadius px-[15px] py-[24px] flex flex-col justify-between">
         <section className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[4px]">
               <p className="title font-raleway">valuet</p>
               <div className="w-[100px] borderline mx-auto"></div>
            </div>
            <div className="">
               <NavLink to={'/'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
                  <div className="overview w-[16px] h-[16px] bg-contain bg-no-repeat bg-center"></div>
                  <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize"  >Overview</p>
               </NavLink>
               <NavLink to={'wallets'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
                  <div className="wallet w-[16px] h-[13px] bg-contain bg-no-repeat bg-center"></div>
                  <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Wallets</p>
               </NavLink>
               <NavLink to={'transictions'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
                  <div className="trans w-[16px] h-[16px] bg-contain bg-no-repeat bg-center"></div>
                  <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Transictions</p>
               </NavLink>
               <NavLink to={'exchange'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
                  <div className="exchange w-[16px] h-[24px] bg-contain bg-no-repeat bg-center"></div>
                  <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Exchange</p>
               </NavLink>
               <NavLink to={'market'} className="links w-full h-[46px] flex items-center gap-[16px] pl-[16px] cursor-pointer">
                  <div className="market w-[16px] h-[16px] bg-contain bg-no-repeat bg-center"></div>
                  <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Market</p>
               </NavLink>
            </div>
         </section>
         <section className="flex flex-col gap-[24px]">
         <div className="w-full borderline2 mx-auto"></div>
         <div className="flex gap-[24px] items-center cursor-pointer">
            <div className="borderline2 w-[21px] h-[21px] rounded-full"></div>
            <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Mike Jakson</p>
         </div>
         <div className="flex gap-[24px] items-center cursor-pointer">
            <div className="exit w-[21px] h-[16px] bg-contain bg-no-repeat"></div>
            <p className="font-openSans font-[600] text-[14px] text-[#616A8B] capitalize">Log out</p>
         </div>
         </section>
      </aside>
   </>
    );
}
 
export default Aside;