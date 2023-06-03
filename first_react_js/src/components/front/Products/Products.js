import React from 'react'
import "./Products.css";
import { formatMoney } from '../../../utility/helper';

const Products = ({productItems, handleAddProduct}) => {
  return (
    <div className='productsJ'>
        {productItems.map((productItems) => (
            <div className='cardJ' key={productItems.id}>
                <div>
                    <img 
                    className='product-image' 
                    src={productItems.image} 
                    alt={productItems.name}/>
                </div>
                <div>
                    <h3 className='product-name'>
                        {productItems.name}
                    </h3>
                </div>
                <div> 
                    <h3 className='product-price'>
                    {formatMoney(productItems.price)}
                    </h3>
                </div>
                <div>
                    <button className='product-addCart' onClick={() => handleAddProduct(productItems)}> Add to Cart</button>
                </div>

            </div>
        ))}
 
    </div>
  )
}

export default Products
