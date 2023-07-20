import Header from '@/components/header/Header'
import Product from '@/components/product/Product'
import Description from '@/components/product/Description'
import { useEffect } from 'react'
import { Kumbh_Sans } from 'next/font/google'

const kumbhSans = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  // useEffect(() => {
  //   window.onclick = (e:any) => {
  //     console.log(e.target.classList)
  //   }
  // }, [])

  return (
    <main
      className={`${kumbhSans.className}`}
    >
      <Header />
      <section className='flex mt-0 md:mt-10 px-0 md:px-10 items-center md:justify-evenly flex-col md:flex-row'>
        <Product />
        <Description />
      </section>
    </main>
  )
}
