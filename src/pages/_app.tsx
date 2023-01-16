import type { AppProps } from 'next/app'
import { CartModal } from '../components/CartModal'
import { useRouter } from 'next/router'
import { BagContextProvider } from '../contexts/BagContext'

import Image from 'next/image'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import logoImg from './../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {  
  const { asPath } = useRouter()

  return (
    <BagContextProvider>
      <Container>
        <Header justify={asPath.includes('/success') ? 'center' : 'spaceBetween'}> 
          <Image src={logoImg.src} width={129.74} height={52} alt="" />

          {!asPath.includes('/success') && 
            <CartModal />
          }
        </Header>

        <Component {...pageProps} />
      </Container>
    </BagContextProvider>
  )
}
