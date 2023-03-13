import '@/styles/globals.css'
import React, {ReactNode} from 'react'
import Providers from '@/providers'
import Header from '@/components/molecules/Header'
import {useTheme} from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative flex flex-col items-center gap-10 bg-todo-lightMode-blue-lightest dark:bg-todo-darkMode-blue-darkest md:gap-12'>
        <div
          className={`absolute z-0 h-[200px] w-full bg-center bg-no-repeat bg-[url('/images/bg-desktop-dark.jpg')] md:h-[250px] md:bg-[auto_100%] lg:h-[300px] xl:bg-[100%_auto]`}
        />
        <Providers>
          <Header />
          {children}
        </Providers>
        <footer className='text-center'>
          <h1 className='font-todo text-[14px] text-todo-lightMode-blue-dark-gray dark:text-[#5B5E7E]'>Drag and drop to reorder list</h1>
        </footer>
      </body>
    </html>
  )
}
