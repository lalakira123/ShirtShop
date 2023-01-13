import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
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

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        
        <BagContainer>
          <Close>
            <X />
          </Close>

          <h1>Sacola de compras</h1>

          <ProductContainer>

            <ImageContainer>
              <img src="" alt=""/>
            </ImageContainer>

            <ProductInfoContainer>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ProductInfoContainer>
          </ProductContainer>

          <ProductContainer>

            <ImageContainer>
              <img src="" alt=""/>
            </ImageContainer>

            <ProductInfoContainer>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </ProductInfoContainer>
          </ProductContainer>
        </BagContainer>

        <PurcharseInfoContainer>
          <QuantityContainer>
            <span>Quantidade</span>
            <strong>3 itens</strong>
          </QuantityContainer>

          <ValueContainer>
            <span>Valor total</span>
            <strong>R$ 270,00</strong>
          </ValueContainer>

          <button>Finalizar compra</button>
        </PurcharseInfoContainer>
      </Content>
    </Dialog.Portal>
  )
}