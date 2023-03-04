import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'
import { footerLinks, socialMedias } from '../constants'

const Footer = () => {
  return (
    <section>
      {/* Footer 1 */}
      <div className='flex justify-end items-center bg-dimGreen border-b-2 border-neutral-200 gap-5 py-7 px-[120px] '>
        <div className='font-bold text-white font-inter'>Follow Us</div>
        <div className='flex flex-row gap-5 '>
          {socialMedias.map((socialMedia)=>(
            <li key={socialMedia.id} className="list-none cursor-pointer"><img src={socialMedia.icon}></img></li>
          ))}
        </div>
      </div>

      {/* Footer 2 */}
      <div className='flex justify-start bg-dimGreen  text-white px-[120px] py-5 gap-40'>
      {footerLinks.map((footerlink) => (
          <div className='p-4'>
           {footerlink.links.map((link) => (
            <li key={link.name} className='list-none my-1 font-inter cursor-pointer'>{link.name}</li>
          ))}
          </div>
        ))}
       
      </div>
     {/* footer 3 */}
     <div className='flex justify-between px-[120px] bg-dimGreen py-8'>
      <div>
        <img src={logo}></img>
      </div>
      <div className='font-bold text-white font-inter'>
      @ 2023 Easy Meal, Inc.
      </div>
     </div>
    </section>
  )
}

export default Footer
