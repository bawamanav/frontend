import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { BreadCrum } from '../components/BreadCrums/BreadCrum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../components/RelatedProducts/RelatedProducts';

export const Product = (props) => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>
    e.id === Number (productId)
  );

  return (
    <div className=''>
      <BreadCrum product ={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}
