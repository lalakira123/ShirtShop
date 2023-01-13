import { styled } from "..";

export const Container = styled('div', {
  display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",
	minHeight: "100vh",
})

export const Header = styled('header', {
	padding: "2rem 0",
	width: "100%",
	maxWidth: 1180,
	margin: '0 auto',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
})

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