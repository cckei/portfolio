import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Layout from '@/components/Layout'
import {Provider} from "@/scripts/provider"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>cckei.co</title>
        
        <meta name="description" content="I'm a developer  designer  freelancer  technologist. I collaborate with clients and peers to nurture and transform ideas into well thought out design specs." />
        <meta name="keywords" content="Web development. digital production" />
        <meta name="author" content="kei" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="cckei.co" />
        <meta property="og:description" content="I'm a developer  designer  freelancer  technologist. I collaborate with clients and peers to nurture and transform ideas into well thought out design specs." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content="https://cckei.co" />
        <meta property="og:site_name" content="cckei.co" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className='home-main'>
        <Provider>
          <Layout />
        </Provider>
      </main>
    </>
  )
}
