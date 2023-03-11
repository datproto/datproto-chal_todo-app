'use client'

import {
  PropsWithChildren
} from 'react'
// import {Provider} from 'react-redux'
// import store from '@/store'
import {ThemeProvider} from 'next-themes'

export default function Providers({children}: PropsWithChildren) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  )
}