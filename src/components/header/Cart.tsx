import Image from 'next/image'
import React from 'react'

export default function Cart() {
    let number = 2
  return (
    <div className='relative mr-10'>
        <div className={`${number===0?'hidden':null} absolute bg-[var(--secondary)] px-1 text-center font-bold text-white text-xs rounded-md -top-2 left-3`}>{number}</div>
        <Image src='/images/icon-cart.svg' alt='carrinho' width={27} height={27} />
    </div>
  )
}
