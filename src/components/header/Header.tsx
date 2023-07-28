import React, { useState } from 'react'
import Cart from './Cart'
import Profile from './Profile'
import Link from 'next/link'
import Menu from './Menu'
import EditCart from './EditCart'

export default function Header() {
  const [active, setActive] = useState(true)


  return (
    <div className='flex h-24 items-center border-b border-[var(--light-gray)] w-full justify-around'>
      <Menu />
      <div className='flex h-full items-center'>
        <h1 className='text-black font-bold text-3xl sm:mr-20 mr-2 sm:ml-0 ml-12'>sneakers</h1>
        <nav className='h-full hidden md:flex items-center gap-8'>
          <Link className='transition-all h-full text-[var(--gray)] border-b-4 border-transparent font-bold hover:text-black hover:border-[var(--secondary)] flex items-center' href='/'>Collections</Link>
          <Link className='transition-all h-full text-[var(--gray)] border-b-4 border-transparent font-bold hover:text-black hover:border-[var(--secondary)] flex items-center' href='/'>Men</Link>
          <Link className='transition-all h-full text-[var(--gray)] border-b-4 border-transparent font-bold hover:text-black hover:border-[var(--secondary)] flex items-center' href='/'>Women</Link>
          <Link className='transition-all h-full text-[var(--gray)] border-b-4 border-transparent font-bold hover:text-black hover:border-[var(--secondary)] flex items-center' href='/'>About</Link>
          <Link className='transition-all h-full text-[var(--gray)] border-b-4 border-transparent font-bold hover:text-black hover:border-[var(--secondary)] flex items-center' href='/'>Contact</Link>
        </nav>
      </div>
      <div className='flex items-center'>
        <Cart />
        <Profile />
      </div>
    </div>
  )
}
