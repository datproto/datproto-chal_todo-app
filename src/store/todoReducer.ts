import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {Todo} from '@/types/todoType'

const initialState: Todo[] = []

interface UpdateItemOrderPayload {
  startIndex: number;
  endIndex: number;
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo: Todo = {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      }
      state.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload)
    },
    reorderTodo: (state, action: PayloadAction<UpdateItemOrderPayload>) => {
      const { startIndex, endIndex } = action.payload
      const items = [...state] // create a copy of the original array
      const [removed] = items.splice(startIndex, 1) // remove the dragged item
      items.splice(endIndex, 0, removed) // insert the dragged item at the dropped index
      return items // return the new order of the items
    }
  }
})

export const {addTodo, toggleTodo, deleteTodo, reorderTodo} = todoSlice.actions

export default todoSlice.reducer