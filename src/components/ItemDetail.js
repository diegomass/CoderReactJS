import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



function ItemDetail({product})  {
  const {addToCart} = useContext(CartContext)
  const [ isAdded, setIsAdded ] = useState(false);
  
  
  const handleAddToCart = (cantidad) => {
    console.log('aca recibi la cantidad: ', cantidad)
    setIsAdded(cantidad);
  }  

  const handleBuy = () => {
    addToCart({...product.data, cantidad: isAdded})
  }

  return(
    <div className="item-detail">
      <div className="container">
          <div className="row">
            <div class="card col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.data.name}</h5>
                  <br/>
                  <img src={product.data.images.small} className="img-fluid" alt={product.data.name} />
                  <br/>
                  <div className="card-description">
                    <br/>
                    <ul>
                      <li>{product.data.supertype}</li>
                      <li>Subtype: {product.data.subtypes}</li>
                      <li>Type: {product.data.types}</li>
                      <li>Level: {product.data.level}</li>
                    </ul>
                  </div>
                  <div className="card-price">
                    <span>Price: $</span> {product.data.tcgplayer.prices.holofoil?.market}
                  </div>
                  <br/>
                  
                  <br/>
                  { !isAdded ?
                  <ItemCount
                    handleAdd = {(cantidad) => handleAddToCart(cantidad)} 
                  /> :
                  <Link to="/cart">
                    <button
                      className="btn btn-success"
                      onClick={handleBuy}
                    >
                    Comprar
                    </button>
                  </Link> 
                  }
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ItemDetail;





