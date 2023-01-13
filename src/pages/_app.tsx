import type { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { globalStyles } from '../styles/global'
import { CartButton, CartButtonFull, Container, Header } from '../styles/pages/app'
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from './../assets/logo.svg'
import { CartModal } from '../components/CartModal'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <Container>
      <Header> 
        <Image src={logoImg.src} width={129.74} height={52} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CartButton>
              <Handbag />
            </CartButton>
          </Dialog.Trigger>

          <CartModal />
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
