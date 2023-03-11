import Header from '@/components/molecules/Header'
import React from 'react'

export default function Home() {
  return (
    <main className='relative h-full w-full bg-todo-lightMode-blue-lightest dark:bg-todo-darkMode-blue-darkest'>
      <div
        className='h-[200px] md:h-[300px] bg-[auto_100%] bg-no-repeat bg-center'
        style={{
          backgroundImage: 'url(/images/bg-desktop-light.jpg)',
        }}
      />

      <div
        className='absolute h-full w-full z-50 top-0 px-6 py-12 flex flex-col gap-10 justify-start items-start'
      >
        <Header />
        Hello World
      </div>
    </main>
  )
}
