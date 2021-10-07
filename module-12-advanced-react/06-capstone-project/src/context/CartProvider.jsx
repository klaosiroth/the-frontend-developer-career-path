import { createContext, useContext, useEffect, useState } from "react"


const CartContext = createContext()

// export function useCartContext() {
//   return useContext(CartContext)
// }

const initialCart = {
  items: [],
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [allPhotos, setAllPhotos] = useState([])

  function addToCart(product) {
    // setCart(prevCart => ({
    //   ...prevCart,
    //   items: [...prevCart.items, product],
    // }))
    setCart(prevCart => [...prevCart, product])
  }

  function removeFromCart(id) {
    setCart(prevCart => {
      const filteredItems = prevCart.filter(item => item.id !== id)
      return filteredItems
    })
  }
  
  function emptyCart() {
    setCart([])
  }

  useEffect(() => {
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        // console.log(json)
        setAllPhotos(json)
      } catch (error) {
        
      }
    }

    fetchData()
  }, [])

  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map(photo => {
      if (photo.id === id) {
        // console.log(id);
        // console.log(!photo.isFavorite);
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }
      return photo
    })
    
    setAllPhotos(updatedPhotos)
  }

  const cartStore = {
    cart,
    allPhotos,
    cartAction: {
      addToCart,
      removeFromCart,
      toggleFavorite,
    },
  }

  return (
    <CartContext.Provider value={{cart, allPhotos, addToCart, removeFromCart, emptyCart, toggleFavorite}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }
// export default CartProvider