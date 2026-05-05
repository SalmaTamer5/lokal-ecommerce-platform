import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Box, Grid, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import relaxedFitWoolCoat from '../../assets/Rectangle.png';
import beigePuffSleeve from '../../assets/Rectangle (1).png';
import aquaBlack from '../../assets/Rectangle (2).png';
import pinkTote from '../../assets/Rectangle (3).png';
import blueBag from '../../assets/Rectangle (4).png';
import amberDress from '../../assets/Rectangle (5).png';
import greyWatch from '../../assets/Rectangle (6).png';
import blackSet from '../../assets/Rectangle (7).png';
import midnightBlack from '../../assets/Rectangle (8).png';
import treeHugger from '../../assets/Rectangle (9).png';
import greenHoodie from '../../assets/Rectangle (10).png';
import mintSet from '../../assets/Rectangle (11).png';
import woolTop from '../../assets/Rectangle (12).png';
import BrownJacket from '../../assets/Rectangle (13).png';
import olivePyjama from '../../assets/Rectangle (14).png';
import forrestHoodie from '../../assets/Rectangle (15).png';
import bagsS from '../../assets/Circle.png';
import watchesS from '../../assets/Circle(2).png';
import HoodiesS from '../../assets/Circle(3).png';
import TrainersS from '../../assets/Circle(4).png';
import tshirtS from '../../assets/Circle(5).png';
import shoesS from '../../assets/Circle(6).png';
import shirtsS from '../../assets/Circle(7).png';
import poloO from '../../assets/Circle(8).png';
import dressesS from '../../assets/Circle(9).png';
import tunicsS from '../../assets/Circle(10).png';
import { Search, ExpandMore, ExpandLess, ArrowForward, Close, Home, Favorite, ShoppingCart, Receipt, Person } from '@mui/icons-material';
import logoImg from '../../assets/logo.png';
import LokalLogo from '../../assets/lokal.png';
import clothingImg from '../../assets/clothing.png';
import shoesImg from '../../assets/shoes.png';
import bagsImg from '../../assets/bags.png';
import accessoriesImg from '../../assets/accessories.png';
import saleImg from '../../assets/sale.png';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from '@mui/material';
import {
  FavoriteBorder,
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

const Shop = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState('Clothing');
  const [gender, setGender] = useState('female');
  const [navValue, setNavValue] = useState(0);

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

  const categories = [
    { name: 'Bags', src: bagsS, alt: 'Bags' },
    { name: 'Watches', src: watchesS, alt: 'Watches' },
    { name: 'Hoodies', src: HoodiesS, alt: 'Hoodies' },
    { name: 'Trainers', src: TrainersS, alt: 'Trainers' },
    { name: 'Tshirts', src: tshirtS, alt: 'Tshirts' },
    { name: 'Shoes', src: shoesS, alt: 'Shoes' },
    { name: 'Shirts', src: shirtsS, alt: 'Shirts' },
    { name: 'Polo', src: poloO, alt: 'Polo' },
    { name: 'Dresses', src: dressesS, alt: 'Dresses' },
    { name: 'Tunics', src: tunicsS, alt: 'Tunics' },
  ];

  const allItems = [
    { id: 1, name: 'RELAXED FIT WOOL KNIT POLO SHIRT', price: 'EGP 4,170', src: relaxedFitWoolCoat, alt: 'Coat' },
    { id: 2, name: 'BEIGE FUR CLOGS', price: 'EGP 705', src: beigePuffSleeve, alt: 'Puff Sleeve' },
    { id: 3, name: 'AQUARIUS BLACK HOODIE', price: 'EGP 1,310', src: aquaBlack, alt: 'Hoodie' },
    { id: 4, name: 'BOHEMIAN PAISLEY PLASTIC TOTE', price: 'EGP 1,499', src: pinkTote, alt: 'Tote' },
    { id: 5, name: 'HEMATITE METALLIC BLUE BAG', price: 'EGP 1,600', src: blueBag, alt: 'Dress' },
    { id: 6, name: 'AMBER DRESS', price: 'EGP 1,600', src: amberDress, alt: 'Puff Sleeve' },
    { id: 7, name: 'LEE COOPER WATCH - GREY', price: 'EGP 6,110', src: greyWatch, alt: 'Watch' },
    { id: 8, name: 'Hana Bee URBAN STORY SET - BLACK', price: 'EGP 2,800', src: blackSet, alt: 'Set' },
    { id: 9, name: 'Midnight Black Shirt', price: 'EGP 4,170', src: midnightBlack, alt: 'Puff Sleeve' },
    { id: 10, name: 'TREE HUGGER', price: 'EGP 705', src: treeHugger, alt: 'Hugger' },
    { id: 11, name: 'GREEN HOODIE', price: 'EGP 1,310', src: greenHoodie, alt: 'Hoodie' },
    { id: 12, name: 'MINT GREEN SET', price: 'EGP 1,499', src: mintSet, alt: 'Tote' },
    { id: 13, name: 'KNITTED WOOL TOP', price: 'EGP 800', src: woolTop, alt: 'Tote' },
    { id: 14, name: 'BROWN LEATHER JACKET', price: 'EGP 5,499', src: BrownJacket, alt: 'Tote' },
    { id: 15, name: 'OLIVE PYJAMA SET', price: 'EGP 1,500', src: olivePyjama, alt: 'Hugger' },
    { id: 16, name: 'FORREST GREEN HOODIE ', price: 'EGP 905', src: forrestHoodie, alt: 'Hugger' },
  ];

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
          <Typography variant="h6" sx={{ color: '#334B1C', fontWeight: 550, fontSize: '23px', mr: 2 }}>
            Shop
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
          sx={{ '& .MuiDrawer-paper': { width: { xs: '80%', md: '400px' }, bgcolor: '#fff', p: 2, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', borderRadius: '0 8px 8px 0', transition: 'transform 0.3s ease-in-out' } }}
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
                <img src={category.image} alt="icon" style={{ width: 40, height: 40, marginRight: 10 }} />
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
              <img src={saleImg} alt="Just for You" style={{ width: 40, height: 40, marginRight: 10 }} />
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Just for You</Typography>
              <Typography sx={{ ml: 1, color: '#fd862c' }}>★</Typography>
            </Box>
            <IconButton sx={{ backgroundColor: '#FD862C', borderRadius: '50%', width: 32, height: 32, '&:hover': { backgroundColor: '#E07B27' } }}>
              <ArrowForward sx={{ color: '#fff', fontSize: '20px' }} />
            </IconButton>
          </Box>
        </Drawer>

        {/* Categories Section */}
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Grid container spacing={2} sx={{ justifyContent: 'center', marginBottom: '40px' }}>
            {categories.map((category) => (
              <Grid item xs={12} md={3} key={category.name}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      backgroundColor: '#F8E2CF',
                      borderRadius: '50%',
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s ease' }
                    }}
                  >
                    <img src={category.src} alt={category.alt} style={{ borderRadius: '50%', width: '90%', height: '90%', objectFit: 'cover' }} />
                  </Box>
                  <Typography variant="body2" sx={{ marginTop: '8px', color: '#4a4a4a', fontWeight: 500 }}>
                    {category.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* All Items Section */}
          <Box sx={{ marginBottom: '40px' }}>
            <Typography variant="h5" sx={{ color: '#ff9800', marginBottom: '30px', fontWeight: 'bold', fontSize: '28px' }}>
              All items
            </Typography>
            <Grid container spacing={5}>
              {allItems.map((item) => (
                <Grid item xs={12} md={4} key={item.id}>
                  <Box
                    onClick={() => navigate('/product', { state: { product: item } })}
                    sx={{
                      textAlign: 'center',
                      backgroundColor: '#fff',
                      padding: '30px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      width: '198px',
                      height: '370px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': { 
                        transform: 'translateY(-5px)', 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        cursor: 'pointer'
                      }
                    }}
                  >
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                      <img src={item.src} alt={item.alt} style={{ width: '200px', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333', marginBottom: '8px', fontSize: '16px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#334B1C', fontWeight: '600', fontSize: '15px' }}>
                      {item.price}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* Desktop Footer - Visible on md and above */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box bgcolor="#F8E2CF" py={4} sx={{ width: '100%', mt: 'auto' }}>
            <Container maxWidth="lg">
              <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
                <Grid item xs={12} md={3}>
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
                <Grid item xs={6} md={2}>
                  <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                    Pages
                  </Typography>
                  {['Home', 'Shop', 'Categories', 'Cart', 'Profile'].map((page) => (
                    <Typography key={page} color="#666" fontSize={14} mb={1}>{page}</Typography>
                  ))}
                </Grid>
                <Grid item xs={6} md={2}>
                  <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                    Customer Service
                  </Typography>
                  {['Shipping & Returns', 'Terms & Conditions', 'Privacy Policy', 'FAQs', 'Contact Us'].map((item) => (
                    <Typography key={item} color="#666" fontSize={14} mb={1}>{item}</Typography>
                  ))}
                </Grid>
                <Grid item xs={6} md={2}>
                  <Typography fontWeight="bold" color="#333" mb={2} fontSize={16}>
                    Contact
                  </Typography>
                  <Typography color="#666" fontSize={14} mb={1}>📞 (+20) 12345678910</Typography>
                  <Typography color="#666" fontSize={14} mb={1}>📧 Lokal123@gmail.com</Typography>
                  <Typography color="#666" fontSize={14} mb={1}>📍 2972 Smouha Rd. Garden City St, Alexandria</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
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

export default Shop;