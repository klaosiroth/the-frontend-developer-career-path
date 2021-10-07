import { useContext } from "react"
import Image from "../components/Image";
import { CartContext } from "../context/CartProvider"
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(CartContext)

  const imageElements = allPhotos.map((photo, index) => (
    <Image key={photo.id} image={photo} className={getClass(index)} />
  ))

  return (
    <main className="photos">
      {imageElements}
    </main>
  )
}

export default Photos