import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { NumberContext } from '../context/CartItem'

export default function Add() {
    const [num, setNum] = useState(0)
    const {number, setNumber} = useContext(NumberContext)

    return (
        <div className='flex items-center sm:items-start flex-col sm:flex-row justify-center md:justify-normal'>
            <div className='bg-slate-100 w-28 flex justify-between font-bold text-lg h-fit items-center rounded-lg sm:mr-4'>
                <button className='text-[var(--secondary)] text-2xl h-7 w-6 flex justify-center items-center' onClick={() => {
                    if (num > 0) {
                        setNum(num - 1)
                    }
                }}><Image src='images/icon-minus.svg' alt='menos' width={10} height={10}/></button>
                {num}
                <button className='text-[var(--secondary)] text-2xl h-7 w-6 flex justify-center items-center' onClick={() => {
                    setNum(num + 1)
                }}><Image src='images/icon-plus.svg' alt='mais' width={10} height={10}/></button>
            </div>
            <div onClick={()=>{
                setNumber(number+num)
                setNum(0)
            }} className='sm:mt-0 mt-4 bg-[var(--secondary)] flex text-white justify-evenly items-center gap-4 px-4 py-2 rounded-lg hover:opacity-80 cursor-pointer hover:shadow-2xl shadow-[var(--secondary)]'>
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero" /></svg>
                Add to cart
            </div>
        </div>
    )
}
