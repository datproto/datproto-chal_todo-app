'use client'

import {
  PropsWithChildren
} from 'react'
// import {Provider} from 'react-redux'
// import store from '@/store'
import {ThemeProvider} from 'next-themes'
import {Provider} from 'react-redux'
import store from '@/store'

export default function Providers({children}: PropsWithChildren) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute='class'>
        {children}
      </ThemeProvider>
    </Provider>
  )
}