import React, { useContext } from 'react'
import all_product from './../Components/Assetss/all_product';
import { ShopContext } from './../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from './../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {ProductId} = useParams();
  const product =all_product.find((e)=> e.id ===  Number(ProductId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDetails product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product;
