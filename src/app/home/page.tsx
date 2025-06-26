import React from 'react'
import Image from 'next/image'

import Navbar from '@/components/Navbar'
import HeroPage_Banner from '@/assets/Home_Page/HeroPage_Banner.jpg'
import BlogTemp from '@/assets/Blog/blog1/thumbnail.jpg'

import brand_icon from '@/assets/brand_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


// export const metadata = {
//   title: "Home",
//   description: "WGroup Enterprise delivers real estate, and corporate services tailored to help you grow.",
// };

export default function HomePage() {
  return (
    <div className='w-full'>
      <Navbar/>
      <div>
        <Image className='w-full block saturate-0 contrast-75' src={HeroPage_Banner} alt="Hero Page Banner"/>
      </div>

      <div className='mt-5 px-6'>
        <hr className='mb-2 bg-[#353B3C] opacity-20'/>
        <h2 style={{ fontFamily: "var(--font-playfair)" }}
           className='text-center text-2xl font-bold'>The Meaning Behind W
        </h2>
        <hr className='mt-2 mb-5 bg-[#353B3C] opacity-20'/>
        <p style={{ fontFamily: "var(--font-lora)" }} 
           className='text-[#353B3C] text-lg opacity-90'>
          W is aiming to expand its business and investment via acquisition of land in high-potential
          locations and quality project development under the “Best in Class” concept in tandem
          with investment, or joint investment in businesses or assets with high growth potential.
        </p>
      </div>

      <div className='mt-5 px-6'>
        <hr className='mb-2 bg-[#353B3C] opacity-20'/>
        <h2 style={{ fontFamily: "var(--font-playfair)" }}
           className='text-center text-2xl font-bold'>OUR VISION
        </h2>
        <hr className='mt-2 mb-5 bg-[#353B3C] opacity-20'/>
        <p style={{ fontFamily: "var(--font-lora)" }} 
            className="text-[#353B3C] text-lg opacity-90 mb-5">
          Invested and dedicated to inspire growth and development by acting, thinking 
          and operating with care and imagination.
        </p>
        
        <p style={{ fontFamily: "var(--font-lora)" }} 
            className="text-[#353B3C] text-lg opacity-90 mb-5">
          As active investors, we operate with a value creation mindset to enable
          insightful perspectives and develop collaborative solutions with imagination and care, 
          propelling progress with our partners.
        </p>
        
        <p style={{ fontFamily: "var(--font-lora)" }} 
            className="text-[#353B3C] text-lg opacity-90">
          We are inquisitive and entrepreneurial, reflective and decisive in action.
        </p>
      </div>

      <div className='mt-5 px-6'>
        <hr className='mb-2 bg-[#353B3C] opacity-20'/>
        <h2 style={{ fontFamily: "var(--font-playfair)" }}
           className='text-center text-2xl font-bold'>Latest News
        </h2>
        <hr className='mt-2 mb-5 bg-[#353B3C] opacity-20'/>

        <div className='overflow-x-auto whitespace-nowrap flex gap-2'>
          <div className='flex-shrink-0 w-75 '>
            <Image className='w-full h-50 mb-3 object-cover aspect-[4/3]' src={BlogTemp} alt="Hero Page Banner"/>
            <div className='whitespace-normal'>
              <h2 style={{ fontFamily: "var(--font-inter)" }}
              className='text-md font-bold mb-1'>OFFICAL LAUNCHED OF V-KOOL CAMBODIA
              </h2>
              <p style={{ fontFamily: "var(--font-lora)" }} 
                className="text-[#353B3C] text-md opacity-90">
              As another milestone added to the company house, W Group is exciting to announced that we will be the...
              </p>
            </div>
          </div>

          <div className='flex-shrink-0 w-75 '>
            <Image className='w-full h-50 mb-3 object-cover aspect-[4/3]' src={BlogTemp} alt="Hero Page Banner"/>
            <div className='whitespace-normal'>
              <h2 style={{ fontFamily: "var(--font-inter)" }}
              className='text-md font-bold mb-1'>OFFICAL LAUNCHED OF V-KOOL CAMBODIA
              </h2>
              <p style={{ fontFamily: "var(--font-lora)" }} 
                className="text-[#353B3C] text-md opacity-90">
              As another milestone added to the company house, W Group is exciting to announced that we will be the...
              </p>
            </div>
          </div>

          <div className='flex-shrink-0 w-75 '>
            <Image className='w-full h-50 mb-3 object-cover aspect-[4/3]' src={BlogTemp} alt="Hero Page Banner"/>
            <div className='whitespace-normal'>
              <h2 style={{ fontFamily: "var(--font-inter)" }}
              className='text-md font-bold mb-1'>OFFICAL LAUNCHED OF V-KOOL CAMBODIA
              </h2>
              <p style={{ fontFamily: "var(--font-lora)" }} 
                className="text-[#353B3C] text-md opacity-90">
              As another milestone added to the company house, W Group is exciting to announced that we will be the...
              </p>
            </div>
          </div>
        </div>

        <div className='mb-25'></div>

      </div>

      <div className='mt-5 px-6 bg-[#02040F] flex flex-col justify-center'>
        <div className='mb-12'/>
        <h2 style={{ fontFamily: "var(--font-playfair)" }}
           className='text-center text-2xl font-bold text-[#F0F0F0]'>Stay in the Know
        </h2>
        <h2 style={{ fontFamily: "var(--font-inter)" }}
          className='text-center text-md font-bold mb-1 text-[#F0F0F0]'>Join our mailing List
        </h2>
        <form>
          <label style={{ fontFamily: "var(--font-inter)" }} 
          htmlFor="email" className="block text-md font-medium text-[#F0F0F0] mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            placeholder="e.g. name@example.com"
            className="
              block w-full p-3 text-base text-[#02040F] bg-white
              border border-gray-300 rounded-full
              focus:outline-none focus:ring-2 focus:ring-[#02040F]
              transition
            "
          />
        </form>

        <Image className="inline-block mx-auto mt-12 mb-2" width={100} height={100} src={brand_icon} alt="Brand Logo"/>
        <h2 style={{ fontFamily: "var(--font-inter)" }}
          className='text-center text-md font-bold mb-12 text-[#F0F0F0]'>For any questions please email info@wgroup.com
        </h2>

        <div className="flex gap-8 mx-auto">
          <a href="https://www.facebook.com/wautopremium" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-[#F0F0F0] hover:text-neutral-300" />
          </a>
          <a href="https://www.instagram.com/wautopremium" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#F0F0F0] hover:text-neutral-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="text-[#F0F0F0] hover:text-neutral-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="text-[#F0F0F0] hover:text-neutral-300" />
          </a>
        </div>

        <div className='mb-12'></div>
      </div>

      
    </div>
  )
}

// #BE7C4D
// #353B3C
// #92140C
// #F0F0F0
// #02040F