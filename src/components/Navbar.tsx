"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'

import brand_icon from '@/assets/brand_icon.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-[#F0F0F0] shadow-sm p-3'>
      <div className='max-w-6xl mx-auto flex justify-between lg:justify-around items-center'>
        <div className='text-3xl font-bold'>
           <Link href="/">
            <Image className="inline-block invert-100" width={70} height={70} src={brand_icon} alt="Brand Logo"/>
           </Link>
        </div>

        {/* Desktop View */}
        <div className='hidden md:flex space-x-6'>
          <Link style={{ fontFamily: "var(--font-lora)" }} href="/">Home</Link>
          <Link style={{ fontFamily: "var(--font-lora)" }} href="/about">About Us</Link>
          <Link style={{ fontFamily: "var(--font-lora)" }} href="/services">Services</Link>
          <Link style={{ fontFamily: "var(--font-lora)" }} href="/contact">Contact</Link>
          <Link style={{ fontFamily: "var(--font-lora)" }} href="/news">News</Link>
        </div>

        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>
      
      {/* Mobile View */}
        {menuOpen && (
          <div className="md:hidden px-4 pt-4 pb-4 flex flex-col space-y-4">
            <Link style={{ fontFamily: "var(--font-lora)" }} href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link style={{ fontFamily: "var(--font-lora)" }} href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link style={{ fontFamily: "var(--font-lora)" }} href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link style={{ fontFamily: "var(--font-lora)" }} href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link style={{ fontFamily: "var(--font-lora)" }} href="/news" onClick={() => setMenuOpen(false)}>News</Link>
          </div>
        )}
    </nav>
  )
}
