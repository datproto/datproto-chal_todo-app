'use client'

import React from 'react'

import TodoList from '@/components/molecules/TodoList'
import {useDispatch} from 'react-redux'
import {addTodo} from '@/store/todoReducer'

export default function Home() {
  const dispatch = useDispatch()

  const [newTodo, setNewTodo] = React.useState('')

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTodo({
      id: Date.now(),
      text: newTodo,
      completed: false
    }))
  }

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  return (
    <main className='z-50 flex h-auto w-full flex-col items-start justify-start gap-4 px-6 lg:gap-6'>
        <form onSubmit={(e) => handlerSubmit(e)} className='w-full'>
          <input onChange={handlerInput} name='text' type='text' className='w-full rounded-lg border-0 bg-white px-6 py-4 font-todo text-xs leading-none text-todo-lightMode-blue-darkest-gray dark:bg-todo-darkMode-blue-darkest-saturated dark:text-todo-darkMode-blue-dark-gray dark:text-todo-darkMode-blue-darkest-gray md:py-5 md:text-lg' placeholder='Create a new todo ...' />
        </form>

        <TodoList />
    </main>
  )
}
