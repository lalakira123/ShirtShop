import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';

export const CartButton = styled('button', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	width: "3rem",
	height: "3rem",

	border: 'none',
	borderRadius: 6,
	backgroundColor: '$gray800',
	color: '$gray300',
	fontSize: 24,
	cursor: 'pointer',
})

export const CartButtonFull = styled(CartButton, {
	position: 'relative',
	color: '$gray100',

	span: {
		position: 'absolute',
		top: -6,
		right: -6,

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		background: '$green500',
		width: 24,
		height: 24,
		borderRadius: 60,
		border: '3px solid $gray900',
		fontSize: '0.875rem',
		fontWeight: 'bold',
	}
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  maxWidth: 480,
  width: '100%',
  height: '100vh',
  inset: '0 0 0 calc(100vw - 530px)',
  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 20%)',
})

export const Content = styled(Dialog.Content, {
  maxWidth: 480,
  width: '100%',
  height: '100vh',
  backgroundColor: '$gray800',
  
  position: 'fixed',
  right: 0,
  top: 0,
  padding: '3rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BagContainer = styled('div', {
  h1: {
    fontSize: '$lg',
    margin: '1.5rem 0 2rem'
  }
})

export const Close = styled(Dialog.Close, {
  border: 'none',
  background: 'none',
  width: '100%',

  display: 'flex',
  justifyContent: 'flex-end',

  color: '$gray300',
  fontSize: '$xl',

  cursor: 'pointer',
})

export const ProductContainer = styled('section', {
  width: '100%',
  display: 'flex',
  gap: '1rem',

  '& + &': {
    marginTop: '1.5rem',
  }
})

export const ImageContainer = styled('div', {
  width: 95,
  height: 95,
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
})

export const ProductInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0.5rem',

  span: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    color: '$gray100',
    fontSize: '$md',
  },

  button: {
    background: 'none',
    border: 'none',
    color: '$green500',
    fontWeight: 'bold',
    width: 0,
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const PurcharseInfoContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  button: {
    height: 69,
    border: 'none',
    borderRadius: 8,
    backgroundColor: '$green500',
    marginTop: 57,

    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
    cursor: 'pointer',

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    }
  }
})

export const QuantityContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  strong: {
    color: '$gray300',
    fontWeight: 'normal',
    fontSize: '$md',
  }
})

export const ValueContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 3,

  span: {
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$md',
  },

  strong: {
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$xl',
  }
})