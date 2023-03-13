import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {todoSlice} from '@/store/todoReducer'

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer
  }
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export default store
