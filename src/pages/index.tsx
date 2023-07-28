import Head from 'next/head'
import Header from '@/components/header/Header'
import Product from '@/components/product/Product'
import Description from '@/components/product/Description'
import { Kumbh_Sans } from 'next/font/google'
import { NumberProvider } from '@/components/context/CartItem'

const kumbhSans = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Sneakers</title>
        <link rel="shortcut icon" href="/images/favicon-32x32.png" type="image/x-icon" />
      </Head>
      <NumberProvider>
        <main className={`${kumbhSans.className}`}>
          <Header />
          <section className='flex mt-0 md:mt-10 px-0 md:px-10 items-center md:justify-evenly flex-col md:flex-row'>
            <Product />
            <Description />
          </section>
        </main>
      </NumberProvider>
    </>
  )
}
