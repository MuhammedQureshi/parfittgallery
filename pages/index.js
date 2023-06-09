import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '../components/hero'
import About from '../components/about'
import Imgly from '../components/imglayout'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parfitt Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      
      <Hero heading='Welcome to Parfitt Gallery'/>
      <About/>
      <Imgly/>        
    </div>
    
  )
}
