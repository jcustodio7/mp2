import React, { useState } from 'react'
import "./Products.css";
import { formatMoney } from '../../../utility/helper';
import SearchBar from '../../SearcBar/SearchBar';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Products = ({productItems, handleAddProduct}) => {

    const [searchProduct, setSearchProduct] = useState("");
    const [filteredProducts, setfilteredProducts] = useState(productItems);

     // INPUTSEARCH VALUE
     const handleOnChange=(event)=>{
         setSearchProduct(event.target.value);
       }

     //  SEARCH ICON    
       
     const handleSearch=(event)=>{
      event.preventDefault();
      const filtered = productItems.filter((items) => items.name.toLowerCase().includes(searchProduct.toLowerCase()));
      setfilteredProducts(filtered);
 }
     //  CLOSE ICON
       const handleClose=(event)=>{
       event.preventDefault();
       setSearchProduct("");
       setfilteredProducts(productItems);
       
     }
   return (
     <>
     <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500, marginTop:5, marginLeft:50 }}>
       <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"  onChange={handleOnChange}/>
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search"  onClick={handleSearch}>    
          <SearchIcon/>
      </IconButton>
       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
       <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={handleClose}>
        <CloseIcon />
       </IconButton>
     </Paper> 
    
    
    
    <div className='productsJ'>
        {filteredProducts.map((items) => (
            <div className='cardJ' key={items.id}>
                <div>
                    <img 
                    className='product-image' 
                    src={items.image} 
                    alt={items.name}/>
                </div>
                <div>
                    <h3 className='product-name'>
                        {items.name}
                    </h3>
                </div>
                <div> 
                    <h3 className='product-price'>
                    {formatMoney(items.price)}
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
