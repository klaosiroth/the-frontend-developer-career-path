import { createContext, useEffect, useState } from "react"


const CartContext = createContext()

function CartProvider({ children }) {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setPhotos(json)
      } catch (error) {
        
      }
    }

    fetchData()
  }, [])

  return (
    <CartContext.Provider value={photos}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }