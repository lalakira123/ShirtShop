import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { X } from 'phosphor-react';
import { useContext, useState } from 'react';
import { BagContext } from '../contexts/BagContext';
import { Handbag } from 'phosphor-react';
import { CartButton, CartButtonFull } from '../styles/components/CartModal'
import { 
  BagContainer, 
  Close,
  Content, 
  ImageContainer, 
  Overlay, 
  ProductContainer, 
  ProductInfoContainer, 
  PurcharseInfoContainer, 
  QuantityContainer, 
  ValueContainer
} from '../styles/components/CartModal';
import { useTotalPrice } from '../hooks/useTotalPrice';
import { priceFormatter } from '../utils/formatter';
import axios from 'axios';

export function CartModal() {
  const { bag, removeItemFromBag } = useContext(BagContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const totalPrice = useTotalPrice()

  async function handleBuyProduct() {
		try {
			setIsCreatingCheckoutSession(true)

      const priceIdList = bag.map((item) => {
        return item.defaultPriceId
      })

			const response = await axios.post('/api/checkout', {
				priceIdList
			})

			const { checkoutUrl } = response.data

			window.location.href = checkoutUrl
		} catch (error) {
			setIsCreatingCheckoutSession(false)
			alert('Falha ao redirecionar ao checkout!')
		}
	}

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {bag.length > 0 ? 
          <CartButtonFull>
            <Handbag />
            <span>{bag.length}</span>
          </CartButtonFull>
          :
          <CartButton>
            <Handbag />
          </CartButton>
        }
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          
          <BagContainer>
            <Close>
              <X />
            </Close>

            <h1>Sacola de compras</h1>

            {bag.map((item) => {
              return (
                <ProductContainer key={item.id}>
                  <ImageContainer>
                    <Image 
                      src={item.imageUrl}
                      blurDataURL={item.imageUrl}
                      placeholder={'blur'}
                      width={95}
                      height={95}
                      alt=''
                    />
                  </ImageContainer>

                  <ProductInfoContainer>
                    <span>{item.name}</span>
                    <strong>{item.price}</strong>
                    <button onClick={() => removeItemFromBag(item.id)}>
                      Remover
                    </button>
                  </ProductInfoContainer>
                </ProductContainer>
              )})
            }

          </BagContainer>

          <PurcharseInfoContainer>
            <QuantityContainer>
              <span>Quantidade</span>
              <strong>{bag.length} itens</strong>
            </QuantityContainer>

            <ValueContainer>
              <span>Valor total</span>
              <strong>{priceFormatter.format(totalPrice)}</strong>
            </ValueContainer>

            <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
              Finalizar compra
            </button>
          </PurcharseInfoContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}