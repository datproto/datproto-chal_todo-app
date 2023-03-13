'use client'

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Image from 'next/image'
import {Todo} from '@/types/todoType'

import {deleteTodo, toggleTodo, reorderTodo} from '@/store/todoReducer'

import {AnimatePresence, motion, useDragControls} from 'framer-motion'

const todoContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: .2
    }
  }
}

const todoItemVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector((state: any) => state.todos)

  const changeTodoStatus = (id: number) => {
    dispatch(toggleTodo(id))
  }

  const removeTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const dragControls = useDragControls()

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    dispatch(reorderTodo({startIndex, endIndex}));
  }

  if (!todos) return null

  return (
    <motion.div
      id={'todo-list'}
      className='
          flex w-full flex-col divide-y divide-todo-lightMode-blue-lightest-gray rounded-md bg-white
          shadow-2xl dark:divide-todo-darkMode-blue-darkest-gray-hover dark:bg-todo-darkMode-blue-darkest-saturated'
      variants={todoContainerVariants}
      initial={'hidden'}
      animate={'visible'}
    >
      {/* Todo List - Item */}
      <AnimatePresence>
        {todos ?
          todos
            .map((todo: Todo, index: number) => (
            <motion.div
              key={todo.id}
              className='flex w-full items-center justify-between gap-3 bg-white px-6 py-4 dark:bg-todo-darkMode-blue-darkest-saturated md:gap-6'
              variants={todoItemVariants}
              initial={'hidden'}
              animate={'visible'}
              exit={'hidden'}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragControls={dragControls}
              onDragEnd={(event, info) => {
                const dragDistance = Math.abs(info.offset.y);
                const direction = dragDistance > 0 ? info.offset.y / dragDistance : 0;
                const destinationIndex = direction === -1 ? index - 1 : index + 1;
                handleDragEnd({ source: { index: index }, destination: { index: destinationIndex } });
              }}
            >
              {/* Checkbox */}
              <div
                className={`
                flex h-6 w-6 items-center justify-center rounded-full border border-todo-lightMode-blue-lightest-gray 
                ${todo.completed && 'bg-gradient-to-br from-[#55DDFF] to-[#C058F3]'}
              `}
                onClick={() => changeTodoStatus(todo.id)}
              >
                {todo.completed && <Image src="/icons/icon-check.svg" height={9} width={11} alt="check"/>}
              </div>
              {/* Item */}
              <p className={
                `grow text-xs leading-none md:text-lg ${todo.completed ? 'text-todo-lightMode-blue-light-gray line-through' : 'text-todo-lightMode-blue-darkest-gray dark:text-todo-darkMode-blue-dark-gray'} `
              }>{todo.text}</p>
              {/* Delete button */}
              <Image src='/icons/icon-cross.svg' alt='delete' height={18} width={18} className='h-4 w-4 cursor-pointer' onClick={() => removeTodo(todo.id)} />
            </motion.div>
          ))
          : null
        }
      </AnimatePresence>

    </motion.div>
  )
}

export default TodoList