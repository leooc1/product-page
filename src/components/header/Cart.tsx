import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { NumberContext } from '../context/CartItem'
import EditCart from './EditCart'

export default function Cart() {
  const { number } = useContext(NumberContext)
  const [active, setActive] = useState(false)
  return (
    <div className='relative'>
      <div onClick={() => {
      setActive(true)
    }} className='relative mr-10 cursor-pointer'>
        <div className={`${number === 0 ? 'hidden' : null} absolute bg-[var(--secondary)] px-1 text-center font-bold text-white text-xs rounded-md -top-2 left-3`}>{number}</div>
        <Image src='/images/icon-cart.svg' alt='carrinho' width={27} height={27} />
      </div>
      {active ? <EditCart>
        <button className='text-3xl font-bold text-[var(--secondary)] hover:opacity-60 ' onClick={() => {
          setActive(false)
        }}>
          x
        </button></EditCart> : null}
    </div>
  )
}
