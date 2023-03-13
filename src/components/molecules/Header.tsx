'use client'

import React from 'react'

import Image from 'next/image'
import {useTheme} from 'next-themes'

function Header() {
  const {theme, setTheme} = useTheme()

  return (
    <header className='mt-12 flex h-[20px] items-center justify-between px-6 md:mt-14 md:h-[40px] lg:mt-20'>
      <div
       className='relative h-full w-[120px] md:w-[240px]'
      >
        <Image
          src='/images/logo.png'
          alt='logo'
          className='cursor-pointer'
          fill
        />
      </div>
      <div className="relative h-full w-[20px] md:w-[40px]">
        <Image
          src={`/icons/icon-${theme === 'dark' ? 'moon' : 'sun'}.svg`}
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