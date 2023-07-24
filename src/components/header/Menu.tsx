import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Menu() {
    const [active, setActive] = useState(false)

    return (
        <div className={`fixed z-50 top-0 left-0 ${active?'w-full h-full':'w-fit h-fit'} flex md:hidden`}>
            <div className={`bg-white ${active?'w-56 min-h-full':''} top-0 left-0 pl-5 pt-10`}>
                <button onClick={() => {
                    setActive(!active)
                }}>
                    <Image src={active ? '/images/icon-close.svg' : '/images/icon-menu.svg'} alt='menu' width={20} height={20} />
                </button>
                <nav className={`${active ? '' : 'hidden'} mt-14`}>
                    <Link className='mb-6 transition-all h-full font-bold text-black flex items-center' href='/'>Collections</Link>
                    <Link className='mb-6 transition-all h-full font-bold text-black flex items-center' href='/'>Men</Link>
                    <Link className='mb-6 transition-all h-full font-bold text-black flex items-center' href='/'>Women</Link>
                    <Link className='mb-6 transition-all h-full font-bold text-black flex items-center' href='/'>About</Link>
                    <Link className='mb-6 transition-all h-full font-bold text-black flex items-center' href='/'>Contact</Link>
                </nav>
            </div>
            <div className={`h-full w-full bg-[#00000060] ${active ? '' : 'hidden'}`} onClick={()=>{
                setActive(false)
            }}>
            </div>
        </div>
    )
}
