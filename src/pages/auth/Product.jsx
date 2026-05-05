import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Box,
  Grid,
  Typography,
  Rating,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  Search,
  Favorite,
  ShoppingBagOutlined,
  AccountCircle,
  Home,
  Receipt,
  Person,
} from '@mui/icons-material';
import { useCart } from '../../CartContext';
import logoImg from '../../assets/logo.png';
import LokalLogo from '../../assets/lokal.png';
import tshirtS from '../../assets/Circle(5).png';
import var2 from '../../assets/var2.jpg';
import var1 from '../../assets/var1.jpg';
import var3 from '../../assets/Circle(5).png';
import ramy from '../../assets/ramy.jpg';

const ProductPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [navValue, setNavValue] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [mainImage, setMainImage] = useState(tshirtS); // Default main image
  const [selectedDelivery, setSelectedDelivery] = useState('Standard'); // Default delivery option

  // Variant images with corresponding colors
  const variantImages = [
    { src: var1, color: 'White' },
    { src: var2, color: 'Gray' },
    { src: var3, color: 'Black' },
  ];

  // Set selectedSize from the location state if available
  useEffect(() => {
    if (state?.selectedSize) {
      setSelectedSize(state.selectedSize);
    }
  }, [state?.selectedSize]);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const product = {
      id: 100, // Unique ID for the product (adjust as needed)
      name: 'Soft Cozy T-Shirt',
      color: selectedColor,
      size: selectedSize,
      price: 1950,
      quantity,
      src: mainImage, // Use the current main image
      alt: 'Product',
      delivery: selectedDelivery, // Include selected delivery option
    };
    addToCart(product);
    navigate('/cart');
  };

  const handleVariantSelect = (variant) => {
    setMainImage(variant.src); // Update main image
    setSelectedColor(variant.color); // Update selected color
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleDeliverySelect = (option) => {
    setSelectedDelivery(option);
  };

  return (
    <>
      <style>{`
        :root {
          font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          font-weight: 400;
          color-scheme: light;
          color: rgba(5, 5, 5, 0.87);
          background-color: #242424;
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

      <Box sx={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
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
                  <Button sx={{ color: "#334B1C", padding: '8px 16px', fontWeight: 550, fontSize: '23px', minWidth: 'max-content' }} onClick={() => {}}>
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

        {/* Body */}
        <Grid container sx={{ flexGrow: 1, py: { xs: 2, md: 4 }, px: { xs: 1, md: 2 }, overflowX: 'hidden' }}>
          {/* Left Section: Image */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 1, md: 2 } }}>
            <Box
              component="img"
              src={mainImage}
              alt="Product"
              sx={{
                width: '500px',
                maxWidth: { xs: 300, md: 1000 },
                maxHeight: { xs: 250, md: 1000 },
                borderRadius: 2,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                objectFit: 'cover',
              }}
            />
          </Grid>

          {/* Right Section: Product Details */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', p: { xs: 1, md: 2 }, bgcolor: '#FFFCFA' }}>
            <Box sx={{ ml:'15px',width: '100%', maxWidth: { xs: 300, md: 800 }, py: { xs: 2, md: 5 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#334B1C', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                EGP 1,950
              </Typography>
              <Typography sx={{ color: '#000000', fontSize: { xs: '0.75rem', md: '1.125rem' } }}>
                This soft and warm piece is perfect for any weather, ensuring you stay comfortable and cozy while looking great.
              </Typography>

              {/* Variations */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography sx={{ color: '#000', fontSize: { xs: '0.75rem', md: '1.5rem' }, fontWeight: 'medium' }}>
                  Variations:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ color: '#50554A', fontSize: { xs: '0.75rem', md: '1rem' } }}>
                      Color: {selectedColor}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ color: '#50554A', fontSize: { xs: '0.75rem', md: '1rem' } }}>
                      Size: {selectedSize}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Variant Images as Buttons */}
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, flexWrap: 'wrap' }}>
                {variantImages.map((variant, index) => (
                  <Button
                    key={index}
                    onClick={() => handleVariantSelect(variant)}
                    sx={{
                      padding: 0,
                      border: selectedColor === variant.color ? '2px solid #FD862C' : '1px solid #50554A',
                      borderRadius: 2,
                      backgroundColor: 'transparent',
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
                    }}
                  >
                    <Box
                      component="img"
                      src={variant.src}
                      alt={`Variant ${index + 1}`}
                      sx={{
                        width: { xs: 60, md: 100 },
                        height: { xs: 60, md: 100 },
                        borderRadius: 2,
                        objectFit: 'cover',
                      }}
                    />
                  </Button>
                ))}
              </Box>

              {/* Size Selection */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'contained' : 'outlined'}
                      sx={{
                        minWidth: { xs: '30px', md: '60px' },
                        px: { xs: 1, md: 2 },
                        py: { xs: 0.5, md: 1 },
                        borderWidth: '2px',
                        borderRadius: 2,
                        borderColor: size === selectedSize ? '#F5E8C7' : size === 'XXL' || size === 'XXXL' ? '#1C2525' : '#000000',
                        backgroundColor: size === selectedSize ? '#F8E2CF' : size === 'XXL' || size === 'XXXL' ? '#50554A' : '#F9F9F9',
                        color: '#000000',
                        fontSize: { xs: '0.75rem', md: '1rem' },
                        '&:hover': { backgroundColor: '#f5f5f5' },
                      }}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* Size Guide */}
              <a
                href="/size-guide"
                style={{
                  color: '#334B1C',
                  fontSize: { xs: '0.75rem', md: '1rem' },
                  fontWeight: 'medium',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                }}
                onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
              >
                Size Guide
              </a>

              {/* Quantity */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography sx={{ fontSize: { xs: '0.75rem', md: '1rem' }, fontWeight: 'medium', color: '#ff9800' }}>
                  Quantity:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Button
                    onClick={handleDecrement}
                    disabled={quantity === 1}
                    sx={{
                      borderRadius: '50%',
                      border: '2px solid #50554A',
                      color: '#FD862C',
                      minWidth: { xs: '30px', md: '40px' },
                      minHeight: { xs: '30px', md: '40px' },
                      padding: '1px',
                      fontSize: { xs: '0.75rem', md: '1rem' },
                      '&:hover': { backgroundColor: '#ffffff' },
                      '&:disabled': { color: '#a9a9a9', borderColor: '#a9a9a9', cursor: 'not-allowed' },
                    }}
                  >
                    −
                  </Button>
                  <Typography
                    sx={{
                      backgroundColor: '#F8E2CF',
                      borderRadius: 4,
                      padding: '4px 8px',
                      fontWeight: 'bold',
                      minWidth: { xs: '20px', md: '30px' },
                      textAlign: 'center',
                      fontSize: { xs: '0.75rem', md: '1rem' },
                    }}
                  >
                    {quantity}
                  </Typography>
                  <Button
                    onClick={handleIncrement}
                    sx={{
                      borderRadius: '50%',
                      border: '2px solid #50554A',
                      color: '#FD862C',
                      minWidth: { xs: '30px', md: '40px' },
                      minHeight: { xs: '30px', md: '40px' },
                      padding: '1px',
                      fontSize: { xs: '0.75rem', md: '1rem' },
                      '&:hover': { backgroundColor: '#ffffff' },
                    }}
                  >
                    +
                  </Button>
                </Box>
              </Box>

              {/* Delivery */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'semibold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                  Delivery Options
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleDeliverySelect('Standard')}
                    sx={{
                      border: '2px solid #FD862C',
                      color: '#334B1C',
                      borderRadius: 2,
                      py: { xs: 1, md: 2 },
                      px: { xs: 1, md: 2 },
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      fontSize: { xs: '0.75rem', md: '1rem' },
                      backgroundColor: selectedDelivery === 'Standard' ? '#FD862C' : 'transparent',
                      '&:hover': {
                        backgroundColor: selectedDelivery === 'Standard' ? '#FD862C' : 'rgba(0, 0, 0, 0.05)',
                      },
                    }}
                  >
                    <Typography>Standard</Typography>
                    <Typography>(5-7 days)</Typography>
                    <Typography sx={{ fontWeight: 'medium' }}>Free</Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleDeliverySelect('Express')}
                    sx={{
                      border: '2px solid #FD862C',
                      color: '#334B1C',
                      borderRadius: 2,
                      py: { xs: 1, md: 2 },
                      px: { xs: 1, md: 2 },
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      fontSize: { xs: '0.75rem', md: '1rem' },
                      backgroundColor: selectedDelivery === 'Express' ? '#FD862C' : 'transparent',
                      '&:hover': {
                        backgroundColor: selectedDelivery === 'Express' ? '#FD862C' : 'rgba(0, 0, 0, 0.05)',
                      },
                    }}
                  >
                    <Typography>Express</Typography>
                    <Typography>(1-2 days)</Typography>
                    <Typography sx={{fontWeight: 'medium' }}>EGP 30.00</Typography>
                  </Button>
                </Box>
              </Box>

              {/* Ratings */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'semibold', fontSize: { xs: '1rem', md: '1.5rem' } }}>
                    Rating & Reviews
                  </Typography>
                  <a
                    href="/reviews"
                    style={{
                      color: '#334B1C',
                      fontWeight: 'medium',
                      textDecoration: 'none',
                      fontSize: { xs: '0.625rem', md: '0.875rem' },
                      textAlign: { xs: 'center', md: 'left' },
                    }}
                    onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    View all reviews
                  </a>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: { xs: 'center', md: 'flex-start' } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      component="img"
                      src={ramy}
                      alt="Ramy"
                      sx={{
                        width: { xs: 40, md: 100 },
                        height: { xs: 40, md: 100 },
                        borderRadius: '50%',
                      }}
                    />
                    <Typography sx={{ fontSize: { xs: '1rem', md: '2rem' }, fontWeight: 'medium', color: '#000' }}>
                      Ramy
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Rating value={4.5} readOnly precision={0.5} size="small" />
                    <Typography sx={{ fontWeight: 'medium', fontSize: { xs: '0.625rem', md: '1rem' } }}>
                      4.5 (25 Reviews)
                    </Typography>
                  </Box>
                </Box>
                <Typography sx={{ color: '#666', fontSize: { xs: '0.625rem', md: '1rem' } }}>
                  "The clothing piece is durable and soft with high quality construction. Fits perfectly and very comfortable to wear all day."
                </Typography>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, alignItems: 'center', pb: { xs: 8, md: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    sx={{
                      color: '#334B1C',
                      border: '2px solid #334B1C',
                      borderRadius: '50%',
                      padding: '8px',
                      '&:hover': { backgroundColor: '#f5f5f5' },
                    }}
                  >
                    <Favorite sx={{ fontSize: { xs: '20px', md: '24px' } }} />
                  </IconButton>
                </Box>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    flex: 1,
                    py: { xs: 1, md: 1.5 },
                    color: '#ffff',
                    backgroundColor: '#334B1C',
                    fontSize: { xs: '0.75rem', md: '1rem' },
                    minWidth: { xs: '80px', md: 'auto' },
                    '&:hover': { backgroundColor: '#1b5e20' },
                  }}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  sx={{
                    flex: 1,
                    py: { xs: 1, md: 1.5 },
                    backgroundColor: '#334B1C',
                    fontSize: { xs: '0.75rem', md: '1rem' },
                    minWidth: { xs: '80px', md: 'auto' },
                    '&:hover': { backgroundColor: '#1b5e20' },
                  }}
                >
                  Buy Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Footer - Conditional Layout */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box bgcolor="#F8E2CF" py={4} sx={{ width: '100%', mt: 'auto' }}>
            <Container maxWidth="lg">
              <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
                <Grid item xs={12} sm={3}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <img src={LokalLogo} alt="Lokal Footer Logo" style={{ height: 60 }} />
                  </Box>
                  <Typography color="#666" mb={2} fontSize={15}>
                    Download the app:
                  </Typography>
                  <Box display="flex" gap={1}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '40px', width: 'auto' }} />
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: '40px', width: 'auto' }} />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                    Pages
                  </Typography>
                  {['Home', 'Shop', 'Categories', 'Cart', 'Profile'].map((page) => (
                    <Typography key={page} color="#666" fontSize={14} mb={1}>{page}</Typography>
                  ))}
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                    Customer Service
                  </Typography>
                  {['Shipping & Returns', 'Terms & Conditions', 'Privacy Policy', 'FAQs', 'Contact Us'].map((item) => (
                    <Typography key={item} color="#666" fontSize={14} mb={1}>{item}</Typography>
                  ))}
                </Grid>
                <Grid item xs={6} sm={2}>
                  <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                    Contact
                  </Typography>
                  <Typography color="#666" fontSize={14} mb={1}>📞 (+20) 12345678910</Typography>
                  <Typography color="#666" fontSize={14} mb={1}>📧 Lokal123@gmail.com</Typography>
                  <Typography color="#666" fontSize={14} mb={1}>📍 2972 Smouha Rd. Garden City St, Alexandria</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                    Follow us
                  </Typography>
                  <Box display="flex" gap={2} mt={1}>
                    {[
                      { src: "https://cdn-icons-png.flaticon.com/512/124/124010.png", alt: "Facebook" },
                      { src: "https://cdn-icons-png.flaticon.com/512/733/733579.png", alt: "Twitter" },
                      { src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", alt: "Instagram" },
                      { src: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png", alt: "LinkedIn" },
                    ].map(({ src, alt }) => (
                      <IconButton key={alt} sx={{ p: 1, backgroundColor: 'rgba(0,0,0,0.05)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.1)' } }}>
                        <img src={src} alt={alt} width={24} height={24} />
                      </IconButton>
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Box mt={4} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <Typography fontSize={14} color="#666">©2025 LoKal. All rights reserved</Typography>
                <Box mt={1} display="flex" gap={1}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" style={{ height: '24px', width: 'auto' }} />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" style={{ height: '24px', width: 'auto' }} />
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
            icon={<ShoppingBagOutlined />}
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

export default ProductPage;