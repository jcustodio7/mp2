// import React from 'react'
// import { Link } from 'react-router-dom';
// import "./Header.css"

// const header = ({cartItems}) => {
//   return (
//     <header className='header'>
//       <div>
//         <h1>
//           <Link to="/" className='Logo'>Jewelry Store</Link>
//         </h1>
//       </div>
//       <div className='header-links'>
//         <ul>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             <Link to="/product">Products</Link>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//         <ul>
//           <li>
//             {/* add icons for the cart */}
//             <Link to="/cart" className='cart'>
//               Cart
//               <span className='cart-length'>
//                 {cartItems.length === 0 ? " " : cartItems.length}
//               </span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   )
// }

// export default header


import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

const drawerWidth = 240;
const navItems = ['home', 'product', 'about','login'];

function Header(props, cartItems) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      Jewelry
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={<Link style={{color: 'black'}} to={`/${item}`}>{item}</Link>} />
            </ListItemButton>
          </ListItem>
        ))}
        <Link to="/cart" className='cart'>
        <ShoppingCartSharpIcon/>
              <span className='cart-length'>
                {cartItems.length === 0 ? " " : cartItems.length}
              </span>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='navbarColor'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Jewelry
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'blue' }}>
                <Link to={`/${item}`} style={{textDecoration: 'none', color:'white'}}>{item}</Link>
              </Button>
            ))}
            <Link to="/cart" className='cart'>
            <ShoppingCartSharpIcon/>
              <span className='cart-length'>
                {cartItems.length === 0 ? " " : cartItems.length}
              </span>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;