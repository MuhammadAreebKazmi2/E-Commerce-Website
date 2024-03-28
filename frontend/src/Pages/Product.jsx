// <<<<<<< HEAD
import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
//import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  
  // Conditional rendering to avoid errors when things still undefined 
 // const product = all_product ? all_product.find((e) => e.id === Number(productId)) : null;
// <<<<<<< HEAD
//   //const product = all_product.find((e) => e.id === productId) ;
// =======
// import React from 'react'

// const Product = () => {
// >>>>>>> parent of 4cc81d3 (Linking products to their pages)
// =======
   
// >>>>>>> parent of adbbb3a (Exception handling)
//   return (
//     <div>Product</div>
//   )
}

export default Product