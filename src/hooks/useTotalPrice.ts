import { useContext } from "react";
import { BagContext } from "../contexts/BagContext";

export function useTotalPrice() {
  const { bag } = useContext(BagContext)

  const totalPrice = bag.reduce((acc, item) => {
    const price = item.price.split('R$')[1].replace(',', '.')
    acc += Number(price)

    return acc
  }, 0)

  return totalPrice
}