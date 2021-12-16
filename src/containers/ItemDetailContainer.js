import ItemDetail from '../components/ItemDetail';
import { useState, useEffect } from "react";
//import { getItem } from "../services/getItems";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect( () => {

    setLoading(true);
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then( (doc) => {
        setProduct( { 
          id : doc.id,
          ...doc.data()       
        } )
      })
      .finally( () => {
        setLoading(false);
      })
      
      /*(async () => {
          const product = await getItem(id);
          setProduct(product);
      })()*/

  }, [id])

  
  console.log(product);

  return (
    <>
    {loading ? <div>Loading...</div> : <ItemDetail product={product} />}
    </>
  )

}

export default ItemDetailContainer