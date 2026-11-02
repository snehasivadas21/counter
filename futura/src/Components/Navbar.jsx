import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between gap-4'>
        <h1 className='font-bold'>Student Managemnet</h1>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
    </div>
  )
}
