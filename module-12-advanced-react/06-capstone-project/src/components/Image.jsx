import React, { useContext } from "react"
import PropTypes from "prop-types"

import { CartContext } from "../context/CartProvider"
import useHover from "../hooks/useHover"

function Image({ className, image }) {
  const [ref, hovered] = useHover()
  const { cart, toggleFavorite, addToCart, removeFromCart } = useContext(CartContext)

  function heartIcon() {
    if (image.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(image.id)}></i>
    } else if (hovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(image.id)}></i>
    }
  }

  function cartIcon() {
    const alreadyInCart = cart.some(item => item.id === image.id)

    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(image.id)}></i>
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(image)}></i>
    }
  }
  
  return (
    <React.Fragment>
      <div 
        className={`${className} image-container`} 
        ref={ref}
      >
        <img src={image.url} className="image-grid" />
        {heartIcon()}
        {cartIcon()}
      </div>
    </React.Fragment>
    
  )
}

Image.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  }),
}

export default Image