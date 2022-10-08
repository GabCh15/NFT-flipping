import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from "next/link"

import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { useDispatch } from 'react-redux'
import RPC from '../lib/web3RPC'

import LinkButton from "./LinkButton"
import Button from "./Button"

import { AppDispatch } from '../state/store';

interface IHeader {
  textAuxButton?: string
  href?: string
}

const Header = ({ textAuxButton, href }: IHeader) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const CLIENT_ID = process.env.CLIENT_ID || ''
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: CLIENT_ID,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        });

        setWeb3auth(web3auth);
        await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        };
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    console.log(web3authProvider)
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  return (
    <nav className="shadow w-100 px-8 md:px-auto w-full py-2 absolute bg-opacity-70 bg-black">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-500 md:order-1 w-full">
          <Link href='/' className='cursor-pointer' dir="/">
            <Image
              //width={20} height={20}
              src={"https://www.metagamehub.io/images/Logos/MGH/webp/mgh_logo.webp"}
              alt="metagamehub logo"
              width={52}
              height={52}
              className='cursor-pointer rounded-full'
            />
          </Link>
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            {textAuxButton && <li className="w-full whitespace-nowrap md:px-4 md:py-2 hover:text-indigo-400"><LinkButton text={textAuxButton} href={href} /></li>}
            {
              !provider
                ? <li className="w-full whitespace-nowrap md:px-4 md:py-2 hover:text-indigo-400">< Button text="Connect Wallet" handleClick={() => login} /></li>
                : <li className="w-full whitespace-nowrap md:px-4 md:py-2 hover:text-indigo-400">< Button text="Disconnect Wallet" handleClick={() => logout} /></li>
            }
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Header