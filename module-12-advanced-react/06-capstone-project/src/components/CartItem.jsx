import { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CartContext } from "../context/CartProvider"
import useHover from "../hooks/useHover"

function CartItem(props) {
  const { item } = props
  const [ref, hovered] = useHover()
  const { removeFromCart } = useContext(CartContext)

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
  
  return (
    <Item>
      <i 
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} alt="description" width="130px" />
      <p>$5.99</p>
    </Item>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

const Item = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  img {
    margin-right: auto;
    margin-left: 10px;
  }
`

export default CartItem