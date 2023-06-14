import {  Divider, IconButton,InputBase,Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import "./SearchBar.css";




function SearchBar() {
  
  const productItems=[
   {
      id: "1",
      name: "Setting round Engagement Ring",
      price: "2500",
      image: "./pics/Ring7.jpg",
  },
  {
      id: "2",
      name: "Setting Round Engagement Ring with Diamond Band",
      price: "3500",
      image: "./pics/Ring6.jpg",
  },
  {
      id: "3",
      name: "Three Stoned Engagement Ring ",
      price: "1500",
      image: "./pics/Ring8.jpg",
  },
  {
      id: "4",
      name: "Floral Halo Engagement Ring",
      price: "5500",
      image: "./pics/Ring9.jpg",
  },
  {
      id: "5",
      name: "Setting Round with Graduated Diamond Band",
      price: "5500",
      image: "./pics/Ring10.jpg",
  },
  {
      id: "6",
      name: "Setting Cushion with Diamond Basket",
      price: "5500",
      image: "./pics/Ring1.jpg",
  },
  {
      id: "7",
      name: "Setting Cushion with Two Row Pave Band",
      price: "5500",
      image: "./pics/Ring2.jpg",
  },
  {
      id: "8",
      name: "Cushion Halo Engagement Ring",
      price: "5500",
      image: "./pics/Ring4.jpg",
  },
  {
      id: "9",
      name: "Oval Halo with Diamond Band",
      price: "5500",
      image: "./pics/Ring5.jpg",
  },
  {
      id: "10",
      name: "Cushion Halo with Diamond Band",
      price: "5500",
      image: "./pics/Ring11.jpg",
  },
  {
      id: "11",
      name: "Engagement Ring with Pear Sides",
      price: "5500",
      image: "./pics/Ring12.jpg",
  },
  {
      id: "12",
      name: "Engagement Ring with Triple Sides",
      price: "5500",
      image: "./pics/Ring13.jpg",
  },];
    
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
        if(searchProduct ===""){

        }
     
   } 
      
   //  CLOSE ICON
    const handleClose=(event)=>{
         event.preventDefault();
            setSearchProduct("");
            
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
      
         {/* <div>
        
       {filteredProducts.map((items)=>{
          return (<div  key={items.id}><img className="products" src={items.image} alt={items.name}/><div><h3>{items.name}</h3></div></div>) 
        })} 
       </div>   */}
       <div className='productsJ'>
        {filteredProducts.map((items) => (
            <div className='cardJ' key={productItems.id}>
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
                    <button className='product-addCart' onClick={() => handleAddProduct(items)}> Add to Cart</button>
                </div>
            </div>
        ))}
    </div> 
         
     </>
  )
  
}

export default SearchBar

    
   
   
    


    
    
    


    
  
   
 

   


    
    
     
     
  
      
       
        
        

       

       

    

   

  