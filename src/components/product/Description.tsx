import React from 'react'
import Add from './Add'

export default function Description() {
    return (
        <div className='w-full md:w-[336px] my-14 text-center md:text-left '>
            <p className='font-bold text-xs text-[var(--secondary)]'>SNEAKER COMPANY</p>
            <h1 className='text-3xl font-bold text-black'>Fall Limited Edition Sneakers</h1>
            <p className='text-[var(--gray)] text-sm mt-3 md:px-0 px-20'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <section className='gap-4 mt-10 mb-8'>
                <div className='flex justify-center md:justify-normal'>
                    <p className='font-bold text-2xl'>$125.00</p>
                    <p className='ml-3 bg-[var(--primary)] text-[var(--secondary)] font-bold px-2 rounded-md h-fit'>50%</p>
                </div>
                <p className='font-bold text-[var(--gray)] line-through text-sm'>$250.00</p>
            </section>
            <Add />
        </div>
    )
}
