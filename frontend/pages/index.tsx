import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Section from '../components/Section'
import Founding from '../components/Staking/Founding'

const Home: NextPage = () => {
  const description = {
    details: '',
    strategy: 'Acquire LANDs that are listed 20% higher that the floor price at most.',
    fees: {
      management: '2.0',
      success: '5.0'
    }
  }

  return (
    <div >
      <Head>
        <title>Metaverse Staking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header textAuxButton="Decentraland Land Vault" href='/vault'/>
        <Section title='DECENTRALAND LAND FLIPPING STRATEGY' content={<Founding image='/images/founding-img-test.png'/>} description={description}/>
      </main>
    </div>
  )
}

export default Home
