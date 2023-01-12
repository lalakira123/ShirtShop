import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";
import { stripe } from "../lib/stripe";

import shirt1 from './../assets/shirts/1.svg'
import shirt2 from './../assets/shirts/2.svg'
import shirt3 from './../assets/shirts/3.svg'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 48,
      },
    }
  )

  return (
    <HomeContainer ref={slideRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image 
              src={product.imageUrl} 
              blurDataURL={product.imageUrl} 
              placeholder="blur" 
              width={520} 
              height={480} 
              alt="" 
            />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : undefined,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, 
  }
}