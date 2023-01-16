import { GetStaticProps } from "next";
import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";
import { stripe } from "../lib/stripe";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from "stripe";
import { priceFormatter } from "../utils/formatter";
import Link from "next/link";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { BagContext } from "../contexts/BagContext";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    defaultPriceId: string
    description: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { createItemInBag } = useContext(BagContext)

  const [slideRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 48,
      },
    }
  )

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={slideRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image 
                  src={product.imageUrl} 
                  blurDataURL={product.imageUrl} 
                  placeholder="blur" 
                  width={520} 
                  height={480} 
                  alt="" 
                />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <button onClick={(event) => {
                    event.preventDefault()
                    createItemInBag(product)
                  }}>
                    <Handbag />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
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
      price: price.unit_amount ? priceFormatter.format(price.unit_amount / 100) : undefined,
      defaultPriceId: price.id,
      description: product.description
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, 
  }
}