import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ExpandMore, ExpandLess, ArrowForward, Close, Home, Favorite, ShoppingCart, Receipt, Person } from '@mui/icons-material';
import LokalLogo from '../../assets/lokal.png';
import logoImg from '../../assets/logo.png';
import clothingImg from '../../assets/clothing.png';
import shoesImg from '../../assets/shoes.png';
import bagsImg from '../../assets/bags.png';
import accessoriesImg from '../../assets/accessories.png';
import saleImg from '../../assets/sale.png';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Grid,
  Avatar,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
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

const Profile = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState('Clothing');
  const [gender, setGender] = useState('female');
  const [navValue, setNavValue] = useState(4);

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

  // Fallback image in case of loading failure
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/100?text=Image+Not+Found';
  };

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
                <img src={logoImg} alt="Lokal Logo" style={{ height: 70 }} onError={handleImageError} />
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
          <Typography variant="h6" sx={{ color: '#334B1C', fontWeight: 550, fontSize: '23px', mr: 2 }}>
            Profile
          </Typography>
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
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#334B1C' }}>All Categories</Typography>
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
                <img src={category.image} alt="icon" style={{ width: 40, height: 40, marginRight: 10 }} onError={handleImageError} />
                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>{category.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1}>
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
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1, backgroundColor: '#fff', borderRadius: 4, border: '1px solid #50554A' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={saleImg} alt="Just for You" style={{ width: 40, height: 40, marginRight: 10 }} onError={handleImageError} />
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Just for You</Typography>
              <Typography sx={{ ml: 1, color: '#fd862c' }}>★</Typography>
            </Box>
            <IconButton sx={{ backgroundColor: '#FD862C', borderRadius: '50%', width: 32, height: 32, '&:hover': { backgroundColor: '#E07B27' } }}>
              <ArrowForward sx={{ color: '#fff', fontSize: '20px' }} />
            </IconButton>
          </Box>
        </Drawer>

        {/* Main Section */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'calc(50vh - 150px)', marginBottom: '40px', pt: { xs: 2, md: 0 } }}>
          <Container>
            <Grid container spacing={4} alignItems="center" mt={0}>
              <Grid item xs={12} md={8}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                  <Avatar sx={{ width: 80, height: 80, bgcolor: 'white', color: 'black', boxShadow: 3 }} />
                  <Button variant="contained" sx={{ ml: 3, bgcolor: '#FD862C' }}>
                    My Activity
                  </Button>
                </Box>
                <Typography variant="h4" mt={2}>Hello !</Typography>
                <Typography color="#FD862C" variant="h6" mt={1}>Announcement</Typography>
                <Typography mt={1}>
                  We're thrilled to announce the launch of our new collection featuring local brand clothes!<br />
                  Discover unique styles crafted by talented local designers with high creativity.<br />
                  Stay stylish!
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <Box textAlign="center">
                  <Typography variant="h5" fontWeight="bold" mb={1} sx={{ marginLeft: { xs: 0, md: '80px' } }}>My Orders</Typography>
                  {['To Pay', 'To Receive', 'To Track'].map((text) => (
                    <Button
                      key={text}
                      fullWidth
                      sx={{ my: 2, bgcolor: '#F8E2CF', color: '#334B1C', px: 2, borderRadius: '20px', textTransform: 'none', marginLeft: { xs: 0, md: '70px' }, maxWidth: '200px' }}
                    >
                      {text}
                    </Button>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Desktop Footer - Visible on md and above */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box bgcolor="#F8E2CF" py={2} sx={{ width: '100%', mt: 'auto' }}>
            <Container maxWidth="lg">
              <Grid container spacing={2} justifyContent="space-between" alignItems="flex-start">
                <Grid item xs={12} md={3}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <img src={LokalLogo} alt="Lokal Footer Logo" style={{ height: 50 }} onError={handleImageError} />
                  </Box>
                  <Typography color="#666" mb={1} fontSize={12}>
                    Download the app:
                  </Typography>
                  <Box display="flex" gap={1}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '30px', width: 'auto' }} onError={handleImageError} />
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style={{ height: '30px', width: 'auto' }} onError={handleImageError} />
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
                        <img src={src} alt={alt} width={20} height={20} onError={handleImageError} />
                      </IconButton>
                    ))}
                  </Box>
                </Grid>
              </Grid>
              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                <Typography fontSize={12} color="#666">©2025 LoKal. All rights reserved</Typography>
                <Box mt={1} display="flex" gap={1}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" style={{ height: '18px', width: 'auto' }} onError={handleImageError} />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" style={{ height: '18px', width: 'auto' }} onError={handleImageError} />
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

export default Profile;