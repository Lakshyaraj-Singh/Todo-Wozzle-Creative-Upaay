import React from 'react'
import { Navbar } from '../Navbar'
import { Todo } from './TodoFunc/Todo.jsx'

export const Home=()=>{
    return(
        <>
        <Navbar/>
       

        <Todo/>
        </>
    )
}