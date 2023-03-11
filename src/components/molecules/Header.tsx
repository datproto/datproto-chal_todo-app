'use client'

import React from 'react'

import Image from 'next/image'
import {useTheme} from 'next-themes'

function Header() {
  const {theme, setTheme} = useTheme()

  return (
    <header className='w-full flex justify-between items-center h-[20px] md:h-[40px]'>
      <div
       className='relative w-[120px] md:w-[240px] h-full'
      >
        <Image
          src='/images/logo.png'
          alt='logo'
          className='cursor-pointer'
          fill
        />
      </div>
      <div className="relative w-[20px] md:w-[40px] h-full">
        <Image
          src='/icons/icon-moon.svg'
          alt='theme-switch-icon'
          className='cursor-pointer'
          fill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </header>
  )
}

export default Header