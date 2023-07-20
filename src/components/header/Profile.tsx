import React from 'react'
import Image from 'next/image'

export default function Profile() {
  return (
    <div>
        <Image src='/images/image-avatar.png' alt='avatar' width={40} height={40} className='rounded-full hover:border-[var(--secondary)] border-2 transition-all cursor-pointer'/>
    </div>
  )
}
