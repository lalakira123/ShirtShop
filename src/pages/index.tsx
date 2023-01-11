import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from './../assets/shirts/1.svg'
import shirt2 from './../assets/shirts/2.svg'
import shirt3 from './../assets/shirts/3.svg'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Home() {
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
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
