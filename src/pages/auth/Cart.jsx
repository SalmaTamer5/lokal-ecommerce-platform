import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ExpandMore, ExpandLess, ArrowForward, Close, Home, Favorite, ShoppingCart, Receipt, Person, Add, Remove, Edit } from '@mui/icons-material';
import { useCart } from '../../CartContext';
import LokalLogo from '../../assets/lokal.png';
import logoImg from '../../assets/logo.png';
import clothingImg from '../../assets/clothing.png';
import shoesImg from '../../assets/shoes.png';
import bagsImg from '../../assets/bags.png';
import accessoriesImg from '../../assets/accessories.png';
import saleImg from '../../assets/sale.png';
import Girl from '../../assets/girl.png';
import gym from '../../assets/white.png';
import bag from '../../assets/bags.png';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Grid,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import {
  ShoppingBagOutlined,
  AccountCircle,
} from '@mui/icons-material';

const categoriesData = [
  {
    name: 'Clothing',
    image: clothingImg,
    items: [
      'Dresses', 'Pants', 'Skirts', 'Shorts', 'Jackets',
      'Hoodies', 'Shirts', 'Polo', 'T-Shirts', 'Tunics'
    ],
  },
  { name: 'Shoes', image: shoesImg, items: [] },
  { name: 'Bags', image: bagsImg, items: [] },
  { name: 'Accessories', image: accessoriesImg, items: [] },
];

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState('Clothing');
  const [gender, setGender] = useState('female');
  const [navValue, setNavValue] = useState(2);
  const [wishlistItems, setWishlistItems] = useState([
    { id: 3, name: 'Lorem ipsum dolor sit amet consectetur.', color: 'Blue', size: 'M', price: 1546, src: Girl, alt: 'pic3' },
    { id: 4, name: 'COMEFIT WHITE T-SHIRT', color: 'White', size: 'L', price: 2300, src: gym, alt: 'pic4' },
    { id: 5, name: 'LEOPARD PRINTED BAG', color: '', size: '', price: 1780, src: bag, alt: 'pic7' },
  ]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAccordionToggle = (categoryName) => {
    setExpandedCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  const handleGenderChange = (_, newGender) => {
    if (newGender !== null) {
      setGender(newGender);
    }
  };

  const handleAddToCart = (wishlistItem) => {
    const newCartItem = { ...wishlistItem, quantity: 1 };
    addToCart(newCartItem); // Add to cart using CartContext
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== wishlistItem.id)); // Remove from wishlist
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <style>{`
        :root {
          font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          font-weight: normal;
          color-scheme: light;
          color: rgba(5, 5, 5, 0.87);
          background-color: #fff;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: normal;
        }

        body {
          margin: 0;
          min-width: 320px;
          min-height: 100vh;
          overflow-x: hidden;
          box-sizing: border-box;
        }
      `}</style>

      <Box sx={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', pb: { xs: 7, md: 0 }, minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        {/* Header: Referral Banner - Hidden on Mobile */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box bgcolor="#334B1C" color="#F8E2CF" py={1} textAlign="center" sx={{ borderBottom: '1px solid #e0e0e0' }}>
            Refer a friend & get <b style={{ color: '#FD862C' }}>200 EGP</b> in credits each ✨
          </Box>
        </Box>

        {/* Header: Navbar - Hidden on Mobile */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '2px solid #e0e0e0', backgroundColor: 'white' }}>
            <Toolbar sx={{ py: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                <img src={logoImg} alt="Lokal Logo" style={{ height: 70 }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Button sx={{ color: "#334B1C", padding: '8px 16px', fontWeight: 550, fontSize: '23px', minWidth: 'max-content' }} onClick={() => navigate('/')}>
                    Home
                  </Button>
                  <Button sx={{ color: "#334B1C", padding: '8px 16px', fontWeight: 550, fontSize: '23px', minWidth: 'max-content' }} onClick={() => navigate('/shop')}>
                    Shop
                  </Button>
                  <Button sx={{ color: "#334B1C", padding: '8px 16px', fontWeight: 550, fontSize: '23px', minWidth: 'max-content' }} onClick={handleDrawerToggle}>
                    Categories
                  </Button>
                </Box>
                <Box sx={{ flexGrow: 1, maxWidth: 800, position: 'relative', mx: 3 }}>
                  <input
                    placeholder="Search"
                    style={{
                      padding: '12px 60px 12px 30px',
                      borderRadius: '12px',
                      fontSize: '18px',
                      width: '100%',
                      border: '4px solid #334B1C',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <Box sx={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                    <Search sx={{ color: '#334B1C', fontSize: '30px' }} />
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton sx={{ color: '#334B1C', padding: '8px' }}>
                  <Favorite sx={{ fontSize: '37px' }} />
                </IconButton>
                <IconButton sx={{ color: '#334B1C', padding: '8px' }} onClick={() => navigate('/cart')}>
                  <ShoppingBagOutlined sx={{ fontSize: '37px' }} />
                </IconButton>
                <IconButton sx={{ color: '#334B1C', padding: '8px' }} onClick={() => navigate('/profile')}>
                  <AccountCircle sx={{ fontSize: '37px' }} />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Mobile Header - Visible on xs */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', py: 1, px: 2, backgroundColor: 'white', borderBottom: '2px solid #e0e0e0' }}>
          <Box sx={{ flexGrow: 1, position: 'relative', maxWidth: '100%' }}>
            <input
              placeholder="Search"
              style={{
                padding: '9px 50px 9px 24px',
                borderRadius: '11px',
                fontSize: '16px',
                width: '100%',
                border: '3px solid #334B1C',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <Box sx={{ position: 'absolute', right: '17px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              <Search sx={{ color: '#334B1C', fontSize: '27px' }} />
            </Box>
          </Box>
        </Box>

        {/* Categories Drawer */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ '& .MuiDrawer-paper': { width: { xs: '80%', sm: '400px' }, bgcolor: '#fff', p: 2, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', borderRadius: '0 8px 8px 0', transition: 'transform 0.3s ease-in-out' } }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#334B1C' }}> Empowering Local Brands</Typography>
            <IconButton onClick={handleDrawerToggle}>
              <Close sx={{ color: '#FD862C' }} />
            </IconButton>
          </Box>
          <ToggleButtonGroup value={gender} exclusive onChange={handleGenderChange} sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
            <ToggleButton value="all" sx={{ px: 4, border: '2px solid #FD862C', borderRadius: 2, '&:not(:last-child)': { marginRight: 0.5 } }}>All</ToggleButton>
            <ToggleButton value="female" sx={{ backgroundColor: '#f9e4d5 !important', px: 4, border: '2px solid #FD862C', borderRadius: 0, '&:not(:last-child)': { marginRight: 0.5 } }}>Women</ToggleButton>
            <ToggleButton value="male" sx={{ px: 4, border: '2px solid #FD862C', borderRadius: 2 }}>Men</ToggleButton>
          </ToggleButtonGroup>
          {categoriesData.map((category) => (
            <Accordion
              key={category.name}
              expanded={expandedCategory === category.name}
              onChange={() => handleAccordionToggle(category.name)}
              sx={{ mb: 2, borderRadius: 4, boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}
            >
              <AccordionSummary
                expandIcon={expandedCategory === category.name ? <ExpandLess sx={{ color: '#FD862C' }} /> : <ExpandMore sx={{ color: '#FD862C' }} />}
                sx={{ display: 'flex', alignItems: 'center', px: 2 }}
              >
                <img src={category.image} alt="icon" style={{ width: 40, height: 40, marginRight: 10 }} />
                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>{category.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1}/>
                  {category.items.map((item) => (
                    <Grid item xs={12} key={item}>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{ fontWeight: 500, color: '#334B1C', borderColor: '#FD862C', textTransform: 'none', py: 0.5, borderRadius: 2, '&:hover': { backgroundColor: '#FFF3E6', borderColor: '#FD862C' } }}
                      >
                        {item}
                      </Button>
                    </Grid>
                  ))}
                </AccordionDetails>
            </Accordion>
          ))}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1, backgroundColor: '#fff', borderRadius: 4, border: '1px solid #50554A' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={saleImg} alt="Just for You" style={{ width: 40, height: 40, marginRight: 10 }} />
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Just for You</Typography>
              <Typography sx={{ ml: 1, color: '#fd862c' }}>★</Typography>
            </Box>
            <IconButton sx={{ backgroundColor: '#FD862C', borderRadius: '50%', width: 32, height: 32, '&:hover': { backgroundColor: '#E07B27' } }}>
              <ArrowForward sx={{ color: '#fff', fontSize: '20px' }} />
            </IconButton>
          </Box>
        </Drawer>

        {/* Main Cart Section */}
        <Box sx={{ flex: 1, py: 2 }}>
          <Container>
            {/* Shipping Address */}
            <Typography variant="h6" sx={{ color: '#334B1C', fontWeight: 550, fontSize: '3rem', mr: "5px" }}>
              Cart
            </Typography>
            <Box sx={{ mb: 3, backgroundColor: '#F8E2CF', borderRadius: 2, p: 2, boxShadow: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ color: '#334B1C', fontWeight: 550, fontSize: '1.3rem' }}>
                  Shipping Address
                </Typography>
                <IconButton sx={{ bgcolor: '#334B1C', '&:hover': { bgcolor: '#2A3E16' } }}>
                  <Edit sx={{ color: '#fff', fontSize: '16px' }} />
                </IconButton>
              </Box>
              <Typography sx={{ color: '#666', fontSize: '1rem', mt: 0.5 }}>
                9 Shaker Khayat Gleem
              </Typography>
            </Box>

            {/* Cart Items */}
            {cartItems.length === 0 ? (
              <Typography variant="h6" sx={{ color: '#666', textAlign: 'center', my: 4 }}>
                Your cart is empty.
              </Typography>
            ) : (
              cartItems.map((item) => (
                <Card key={`${item.id}-${item.color}-${item.size}`} sx={{ display: 'flex', mb: 2, borderRadius: 2, boxShadow: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100, objectFit: 'cover' }}
                    image={item.src}
                    alt={item.alt}
                  />
                  <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 550 }}>{item.name}</Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>{item.color}, Size {item.size}</Typography>
                      <Typography variant="body2" sx={{ color: '#334B1C', fontWeight: 550 }}>EGP {item.price}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => decreaseQuantity(item.id, item.color, item.size)}
                        sx={{
                          border: '1px solid #666',
                          borderRadius: '50%',
                          width: 24,
                          height: 24,
                          '&:hover': { backgroundColor: '#e0e0e0' },
                        }}
                      >
                        <Remove sx={{ color: '#666', fontSize: 16 }} />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => increaseQuantity(item.id, item.color, item.size)}
                        sx={{
                          border: '1px solid #666',
                          borderRadius: '50%',
                          width: 24,
                          height: 24,
                          '&:hover': { backgroundColor: '#e0e0e0' },
                        }}
                      >
                        <Add sx={{ color: '#666', fontSize: 16 }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => removeFromCart(item.id, item.color, item.size)}
                        sx={{
                          border: '1px solid #666',
                          borderRadius: '50%',
                          width: 24,
                          height: 24,
                          '&:hover': { backgroundColor: '#e0e0e0' },
                        }}
                      >
                        <Close sx={{ color: '#666', fontSize: 16 }} />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              ))
            )}

            {/* Wishlist Section */}
            <Typography variant="h6" sx={{ color: '#334B1C', fontWeight: 550, mt: 4, mb: 2 }}>
              From your Wishlist
            </Typography>
            {wishlistItems.length === 0 ? (
              <Typography variant="h6" sx={{ color: '#666', textAlign: 'center', my: 4 }}>
                Your wishlist is empty.
              </Typography>
            ) : (
              wishlistItems.map((item) => (
                <Card key={item.id} sx={{ display: 'flex', mb: 2, borderRadius: 2, boxShadow: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100, objectFit: 'cover' }}
                    image={item.src}
                    alt={item.alt}
                  />
                  <CardContent sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 550 }}>{item.name}</Typography>
                      {item.color && item.size && (
                        <Typography variant="body2" sx={{ color: '#666' }}>{item.color}, Size {item.size}</Typography>
                      )}
                      <Typography variant="body2" sx={{ color: '#334B1C', fontWeight: 550 }}>EGP {item.price}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleAddToCart(item)}
                        sx={{
                          border: '1px solid #334B1C',
                          borderRadius: '50%',
                          width: 24,
                          height: 24,
                          '&:hover': { backgroundColor: '#e0e0e0' },
                        }}
                      >
                        <ShoppingCart sx={{ color: '#334B1C', fontSize: 16 }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        sx={{
                          border: '1px solid #666',
                          borderRadius: '50%',
                          width: 24,
                          height: 24,
                          '&:hover': { backgroundColor: '#e0e0e0' },
                        }}
                      >
                        <Close sx={{ color: '#666', fontSize: 16 }} />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              ))
            )}

            {/* Total and Checkout Button */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 550, color: '#334B1C' }}>Total: EGP {total.toFixed(2)}</Typography>
              <Button variant="contained" sx={{ bgcolor: '#334B1C', color: '#F8E2CF', borderRadius: 2, px: 4, py: 1 }}>
                Checkout
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Desktop Footer - Visible on md and above */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box bgcolor="#F8E2CF" py={2} sx={{ width: '100%', mt: 'auto' }}>
            <Container maxWidth="lg">
              <Grid container spacing={2} justifyContent="space-between" alignItems="flex-start">
                <Grid item xs={12} md={3}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <img src={LokalLogo} alt="Lokal Footer Logo" style={{ height: 50 }} />
                  </Box>
                  <Typography color="#666" mb={1} fontSize={12}>
                    Download the app:
                  </Typography>
                  <Box display="flex" gap={1}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '30px', width: 'auto' }} />
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: '30px', width: 'auto' }} />
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Typography fontWeight="bold" color="#333" mb={1} fontSize={14}>
                    Pages
                  </Typography>
                  {['Home', 'Shop', 'Categories', 'Cart', 'Profile'].map((page) => (
                    <Typography key={page} color="#666" fontSize={12} mb={0.5}>{page}</Typography>
                  ))}
                </Grid>
                <Grid item xs={6} md={2}>
                  <Typography fontWeight="bold" color="#333" mb={1} fontSize={14}>
                    Customer Service
                  </Typography>
                  {['Shipping & Returns', 'Terms & Conditions', 'Privacy Policy', 'FAQs', 'Contact Us'].map((item) => (
                    <Typography key={item} color="#666" fontSize={12} mb={0.5}>{item}</Typography>
                  ))}
                </Grid>
                <Grid item xs={6} md={2}>
                  <Typography fontWeight="bold" color="#333" mb={1} fontSize={14}>
                    Contact
                  </Typography>
                  <Typography color="#666" fontSize={12} mb={0.5}>📞 (+20) 12345678910</Typography>
                  <Typography color="#666" fontSize={12} mb={0.5}>📧 Lokal123@gmail.com</Typography>
                  <Typography color="#666" fontSize={12} mb={0.5}>📍 2972 Smouha Rd. Garden City St, Alexandria</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography fontWeight="bold" color="#333" mb={1} fontSize={14}>
                    Follow us
                  </Typography>
                  <Box display="flex" gap={1} mt={1}>
                    {[
                      { src: "https://cdn-icons-png.flaticon.com/512/124/124010.png", alt: "Facebook" },
                      { src: "https://cdn-icons-png.flaticon.com/512/733/733579.png", alt: "Twitter" },
                      { src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", alt: "Instagram" },
                      { src: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png", alt: "LinkedIn" },
                    ].map(({ src, alt }) => (
                      <IconButton key={alt} sx={{ p: 0.5, backgroundColor: 'rgba(0,0,0,0.05)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' } }}>
                        <img src={src} alt={alt} width={20} height={20} />
                      </IconButton>
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <Typography fontSize={12} color="#666">©2025 LoKal. All rights reserved</Typography>
                <Box mt={1} display="flex" gap={1}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" style={{ height: '18px', width: 'auto' }} />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" style={{ height: '18px', width: 'auto' }} />
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>

        {/* Mobile Bottom Navigation - Visible on xs */}
        <BottomNavigation
          value={navValue}
          onChange={(event, newValue) => setNavValue(newValue)}
          sx={{
            display: { xs: 'flex', md: 'none' },
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: '#fff',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
            height: '70px',
            zIndex: 1000,
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<Home />}
            onClick={() => navigate('/')}
            sx={{ color: navValue === 0 ? '#334B1C' : '#666', '& .MuiBottomNavigationAction-label': { fontSize: '12px' } }}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<Favorite />}
            onClick={() => navigate('/favorites')}
            sx={{ color: navValue === 1 ? '#334B1C' : '#666', '& .MuiBottomNavigationAction-label': { fontSize: '12px' } }}
          />
          <BottomNavigationAction
            label="Cart"
            icon={<ShoppingCart />}
            onClick={() => navigate('/cart')}
            sx={{ color: navValue === 2 ? '#334B1C' : '#666', '& .MuiBottomNavigationAction-label': { fontSize: '12px' } }}
          />
          <BottomNavigationAction
            label="Orders"
            icon={<Receipt />}
            onClick={() => navigate('/orders')}
            sx={{ color: navValue === 3 ? '#334B1C' : '#666', '& .MuiBottomNavigationAction-label': { fontSize: '12px' } }}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<Person />}
            onClick={() => navigate('/profile')}
            sx={{ color: navValue === 4 ? '#334B1C' : '#666', '& .MuiBottomNavigationAction-label': { fontSize: '12px' } }}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default Cart;