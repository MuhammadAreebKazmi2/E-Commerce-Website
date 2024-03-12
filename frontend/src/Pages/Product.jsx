import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  
  // Conditional rendering to avoid errors when things still undefined 
  const product = all_product ? all_product.find((e) => e.id === Number(productId)) : null;
  //const product = all_product.find((e) => e.id === productId) ;
  return (
    <div>
      {product ? (
        <Breadcrum product={product} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Product