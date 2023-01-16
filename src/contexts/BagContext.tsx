import { createContext, ReactNode, useState } from "react"

interface BagItem {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface BagContextType {
  bag: BagItem[]
  createItemInBag: (bagItem: BagItem) => void
  removeItemFromBag: (bagItemId: string) => void
}

export const BagContext = createContext({} as BagContextType)

interface BagContextProviderProps {
  children: ReactNode
}

export function BagContextProvider({ children }: BagContextProviderProps) {
  const [bag, setBag] = useState<BagItem[]>([])

  function createItemInBag(bagItem: BagItem) {
    if(!bag.find((item) => item.id === bagItem.id)) {
      setBag((state) => [...state, bagItem])
    }
  }

  function removeItemFromBag(bagItemId: string) {
    const newBag = bag.filter((item) => {
      return item.id !== bagItemId
    })

    setBag(newBag)
  }

  return (
    <BagContext.Provider value={{
      bag, 
      createItemInBag, 
      removeItemFromBag
    }}>
      {children}
    </BagContext.Provider>
  )
}