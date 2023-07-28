import React, { useContext } from 'react'
import { NumberContext } from '../context/CartItem'
import Image from 'next/image'

export default function EditCart({children}:{children:React.JSX.Element}) {
  const { number, setNumber } = useContext(NumberContext)
  return (
    <div id='cart' className='fixed sm:absolute w-80 p-2 bg-white shadow-lg shadow-[#0000003d] sm:top-16 top-28 sm:right-0 right-1/2 sm:translate-x-0 translate-x-1/2  z-50 rounded-lg'>
      <div className='flex justify-between items-center border-b border-[var(--light-gray)]'>
        <p className='font-bold text-[var(--dark-gray)]'>Cart</p>
        {children}
      </div>
      {number === 0 ?
        <p className='font-bold text-[var(--gray)] text-center mt-4'>Your cart is empty.</p> :
        <div className='mt-4'>
          <div className='flex'>
            <div className='flex items-center'>
              <Image className='rounded-md' src='/images/image-product-1-thumbnail.jpg' alt='product' width={50} height={50} />
              <p className='text-sm pl-5'>Fall Limited Edition Sneakers<br />$125.00 x {number} <strong>${125 * number}.00</strong></p>
            </div>
            <button className='delete ml-6' onClick={() => {
              setNumber(0)
            }}>
              <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" ><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" /></defs><use fill-rule="nonzero" href="#a" /></svg>
            </button>
          </div>
          <button className='mx-auto sm:mt-0 mt-4 bg-[var(--secondary)] flex text-white justify-evenly items-center gap-4 px-4 py-2 rounded-lg hover:opacity-80 cursor-pointer hover:shadow-2xl shadow-[var(--secondary)]'>
            Checkout
          </button>
        </div>}
    </div>
  )
}
