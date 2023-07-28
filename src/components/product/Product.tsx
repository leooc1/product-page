import React, { useState } from 'react'
import Modal from './Modal'
import Image from 'next/image'

export default function Product() {
    const [product, setProduct] = useState(1)
    const [modal, setModal] = useState(false)

    return (
        <>
        {modal? <Modal><button className='text-3xl font-bold absolute right-0 -top-10 text-white hover:text-[var(--secondary)] ' onClick={()=>{
                setModal(false)
            }}>
                x
            </button></Modal>:null}
            <div className='md:w-auto w-full relative'>
                <button onClick={() => {
                    setProduct(product - 1)
                    if (product === 1) {
                        setProduct(4)
                    }
                }} className='md:hidden absolute w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center top-2/4 left-3'>
                    <Image className='h-7' src='/images/icon-previous.svg' alt='previous' width={20} height={20} />
                </button>
                <button onClick={() => {
                    setProduct(product + 1)
                    if (product === 4) {
                        setProduct(1)
                    }
                }} className='md:hidden absolute w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center top-2/4 right-3'>
                    <Image className='h-7' src='/images/icon-next.svg' alt='next' width={20} height={30} />
                </button>
                <Image className='md:cursor-zoom-in sm:rounded-2xl rounded-none w-full sm:w-fit sm:h-96 md:w-[350px] m-0 sm:m-auto md:m-0' src={`/images/image-product-${product}.jpg`} alt='product' width={350} height={350} onClick={() => {
                    if(document.body.clientWidth>=751){
                        setModal(true)
                    }
                }} />
                <section className='md:flex hidden w-[350px] justify-between mt-4'>
                    <div onClick={() => setProduct(1)} className={`cursor-pointer rounded-lg ${product === 1 ? 'border-[var(--secondary)]' : 'border-transparent'} border-2`}>
                        <Image className={`rounded-md hover:opacity-70 ${product === 1 ? 'opacity-50' : ''}`} src='/images/image-product-1-thumbnail.jpg' alt='product' width={80} height={80} />
                    </div>
                    <div onClick={() => setProduct(2)} className={`cursor-pointer rounded-lg ${product === 2 ? 'border-[var(--secondary)]' : 'border-transparent'} border-2`}>
                        <Image className={`rounded-md hover:opacity-70 ${product === 2 ? 'opacity-50' : ''}`} src='/images/image-product-2-thumbnail.jpg' alt='product' width={80} height={80} />
                    </div>
                    <div onClick={() => setProduct(3)} className={`cursor-pointer rounded-lg ${product === 3 ? 'border-[var(--secondary)]' : 'border-transparent'} border-2`}>
                        <Image className={`rounded-md hover:opacity-70 ${product === 3 ? 'opacity-50' : ''}`} src='/images/image-product-3-thumbnail.jpg' alt='product' width={80} height={80} />
                    </div>
                    <div onClick={() => setProduct(4)} className={`cursor-pointer rounded-lg ${product === 4 ? 'border-[var(--secondary)]' : 'border-transparent'} border-2`}>
                        <Image className={`rounded-md hover:opacity-70 ${product === 4 ? 'opacity-50' : ''}`} src='/images/image-product-4-thumbnail.jpg' alt='product' width={80} height={80} />
                    </div>
                </section>
            </div>
        </>
    )
}
