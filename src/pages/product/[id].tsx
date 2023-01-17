import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import Stripe from "stripe"
import { BagContext } from "../../contexts/BagContext"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { priceFormatter } from "../../utils/formatter"

interface ProductProps {
	product: {
		id: string
		name: string
		imageUrl: string
		price: string
		description: string
		defaultPriceId: string
	}
}

export default function Product({ product }: ProductProps) {
	const { createItemInBag } = useContext(BagContext)

	const { isFallback } = useRouter()

	if ( isFallback ) {
		return <p>Loading...</p>
	}

	return (
		<>
			<Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

			<ProductContainer>
				<ImageContainer>
					<Image 
						src={product.imageUrl}
						blurDataURL={product.imageUrl}
						placeholder="blur" 
						width={520} 
						height={480} 
						alt=""
					/>
				</ImageContainer>

				<ProductDetails>
					<h1>{product.name}</h1>
					<span>{product.price}</span>

					<p>{product.description}</p>

					<button onClick={() => createItemInBag(product)}>
						Colocar na sacola
					</button>
				</ProductDetails>
			</ProductContainer>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: { id: "prod_N9nEvqF2kaze62" } }
		],
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
	const productId = params!.id 

	const product = await stripe.products.retrieve(productId, {
		expand: ['default_price'],
	})
	
	const price = product.default_price as Stripe.Price

	return {
		props: {
			product: {
				id: product.id,
				name: product.name,
				imageUrl: product.images[0],
				price: price.unit_amount ? priceFormatter.format(price.unit_amount / 100) : undefined,
				description: product.description,
				defaultPriceId: price.id,
			}
		},
		revalidate: 60 * 60 * 1,
	}
}