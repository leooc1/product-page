import React, { useState } from 'react'
import Image from 'next/image'

export default function Modal({children}:{children:React.JSX.Element}) {
    const [product, setProduct] = useState(1)

    return (
        <div className='h-screen w-full fixed top-0 z-50 flex flex-col items-center justify-center bg-[#0000009a]'>
            <div className='relative'>
            {children}
                <button onClick={() => {
                    setProduct(product - 1)
                    if (product === 1) {
                        setProduct(4)
                    }
                }} className='absolute w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center top-2/4 -left-5'>
                    <Image className='h-7' src='/images/icon-previous.svg' alt='previous' width={20} height={20} />
                </button>
                <button onClick={() => {
                    setProduct(product + 1)
                    if (product === 4) {
                        setProduct(1)
                    }
                }} className='absolute w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center top-2/4 -right-5'>
                    <Image className='h-7' src='/images/icon-next.svg' alt='next' width={20} height={30} />
                </button>
                <Image className='rounded-2xl h-fit w-96' src={`/images/image-product-${product}.jpg`} alt='product' width={350} height={350} />
            </div>
            <section className='md:flex hidden w-96 justify-between mt-4'>
                <div onClick={() => setProduct(1)} className={`bg-white cursor-pointer rounded-lg ${product === 1 ? 'border-[var(--secondary)]' : 'border-transparent'} border-2`}>
                    <Image className={`rounded-md hover:opacity-70 ${product === 1 ? 'opacity-50' : ''}`} src='/images/image-product-1-thumbnail.jpg' alt='product' width={80} height={80} />
                </div>
                <div onClick={() => setProduct(2)} className={`bg-white cursor-pointer rounded-lg ${product === 2 ? 'border-[var(--secondary)]' : 'border-transparent'} border-2`}>
                    <Image className={`rounded-md hover:opacity-70 ${product === 2 ? 'opacity-50' : ''}`} src='/images/image-product-2-thumbnail.jpg' alt='product' width={80} height={80} />
                </div>
                <div onClick={() => setProduct(3)} className={`bg-white cursor-pointer rounded-lg ${product === 3 ? 'border-[var(--secondary)]' : 'border-transparent'} border-2`}>
                    <Image className={`rounded-md hover:opacity-70 ${product === 3 ? 'opacity-50' : ''}`} src='/images/image-product-3-thumbnail.jpg' alt='product' width={80} height={80} />
                </div>
                <div onClick={() => setProduct(4)} className={`bg-white cursor-pointer rounded-lg ${product === 4 ? 'border-[var(--secondary)]' : 'border-transparent'} border-2`}>
                    <Image className={`rounded-md hover:opacity-70 ${product === 4 ? 'opacity-50' : ''}`} src='/images/image-product-4-thumbnail.jpg' alt='product' width={80} height={80} />
                </div>
            </section>
        </div>
    )
}
