import Image from "next/image"
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
	const { query } = useRouter()

	return (
		<ProductContainer>
			<ImageContainer>
				
			</ImageContainer>

			<ProductDetails>
				<h1>Camiseta X</h1>
				<span>R$ 79,90</span>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed aut asperiores dignissimos itaque ad dolore nostrum quos assumenda tempora nam blanditiis distinctio optio, enim veritatis autem eveniet architecto a.</p>

				<button>
					Comprar agora
				</button>
			</ProductDetails>
		</ProductContainer>
	)
}