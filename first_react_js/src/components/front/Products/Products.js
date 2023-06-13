import React, { useState } from 'react'
import "./Products.css";
import { formatMoney } from '../../../utility/helper';

const Products = ({productItems, handleAddProduct}) => {

  const [filterItem, setfilterItem] = useState("");
  const searchText = (event) => {setfilterItem(event.target.value)}
  const productItemSearch = productItems.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filterItem.toString().toLowerCase()))
  })

  return (
    <>
    <div className='searchBar'>
      <div className='searchContainer'>
        <input className='inputSearch' type="text" value={filterItem} placeholder=' Search here ... ' onChange={searchText.bind(this)} />
      </div>
    </div>
    <div className='productsJ'>
        {productItemSearch.map((productItems) => (
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
    </>
  )
}

export default Products
