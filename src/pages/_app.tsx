import type { AppProps } from 'next/app'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { globalStyles } from '../styles/global'
import { CartButton, CartButtonFull, Container, Header } from '../styles/pages/app'

import logoImg from './../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <Container>
      <Header> 
        <Image src={logoImg.src} width={129.74} height={52} alt="" />

        <CartButtonFull>
          <Handbag />
          <span>1</span>
        </CartButtonFull>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
