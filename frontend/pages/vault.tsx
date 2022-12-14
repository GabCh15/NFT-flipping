import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Section from '../components/Section'
import VaultList from '../components/Vault/VaultList'

const vault: NextPage = () => {
  const description = {
    details: 'Stored lands'
  }

  return (
    <div >
      <Head>
        <title>Metaverse Staking</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Section title='VAULT' content={<VaultList />} description={description} centered={false}/>
      </main>
    </div>
  )
}

export default vault