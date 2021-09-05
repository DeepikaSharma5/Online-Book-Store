import React, { useEffect, useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ButtonGroup } from '@material-ui/core';
import { APP_ROUTES } from '../../../../utilities/constants/routes.constants';
import { User,Heart, Search, Truck, Clipboard, CreditCard, PlusSquare } from 'react-feather';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  space: {
    flexGrow: 0.1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = useState('');
    const isMenuOpen = Boolean(anchorEl);

    const [allData,setAllData] = useState([]);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    useEffect( () => {     
      axios.get('http://localhost:6060/book/view')
      .then(response => {
          console.log("response", response);
          setAllData(response.data.data);
      }).catch(error => {
          alert(error.message);
          console.log("Error", error);
      });                 
  }, []);

    const navigateToAddCardDetails = (event) => window.location.href = APP_ROUTES.USER_ADD_CARD_DETAILS;
    const navigateToCardDetails = (event) => window.location.href = APP_ROUTES.USER_CARD_DETAILS;

  const preventDefault = (event) => event.preventDefault();
  const navigateToHome = (event) => window.location.href = APP_ROUTES.USER_HOMEPAGE;
  const NavigateToBooks = (event) => window.location.href = APP_ROUTES.BOOKS;
  const NavigateToAboutUs = (event) => window.location.href = APP_ROUTES.USER_ABOUT_US;
  const NavigateToContactUs = (event) => window.location.href = APP_ROUTES.USER_CONTACT_US;
  const navigateToMyDeliveryAddress = (event) => window.location.href = APP_ROUTES.USER_VIEW_ADDRESS;
  const navigateToMyDeliveries = (event) => window.location.href = APP_ROUTES.USER_MY_DELIVERIES;
  const navigateToMyAccount = (event) => window.location.href = APP_ROUTES.USER_PERSONAL_DETAILS;
  const navigateToMyWishlist = (event) => window.location.href = APP_ROUTES.USER_WISHLIST;
  const navigateToSearchForWishlist = (event) => window.location.href = APP_ROUTES.WISHLIST_SEARCH;

  function searchValue(e) {
    e.preventDefault();
      let searchbar_result = [];
      searchbar_result = allData.filter((data) => {
          let data_title = data.title.toLowerCase();
          return data_title.search(value) != -1;
      });          
      reactLocalStorage.setObject("SearchBooks", searchbar_result); 
      reactLocalStorage.setObject("SearchValue", value);  
      window.location.href = APP_ROUTES.USER_SEARCH_BOOKS;
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={navigateToMyAccount}> 
        <User/>&ensp;My account
      </MenuItem>
      <MenuItem onClick={navigateToMyWishlist}>
        <Heart/>&ensp;My Wishlist
      </MenuItem>
      <MenuItem onClick={navigateToSearchForWishlist}>
        <Search/>&ensp;Search for wishlist
      </MenuItem>
      <MenuItem onClick={navigateToMyDeliveryAddress}>
        <Clipboard/>&ensp;My Delivery Address
      </MenuItem>
      <MenuItem onClick={navigateToMyDeliveries}>
        <Truck/>&ensp;My Deliveries
      </MenuItem>

      <MenuItem onClick={navigateToAddCardDetails}>
        <PlusSquare/>&ensp;Add Card Details</MenuItem>
      <MenuItem onClick={navigateToCardDetails}>
        <CreditCard/>&ensp;Card Details</MenuItem>

    </Menu>
  );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" width='device-width'>
                <Toolbar>
                    {/*Booklab logo*/}
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <LibraryBooksIcon onClick={navigateToHome} />
                    </IconButton>
                    {/*Booklab title*/}
                    <Typography className={classes.title} variant="h5" noWrap>
                        BookLab
                    </Typography>
                    <div className={classes.space} />
                    {/*Search Bar*/}
                    <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" style={{paddingLeft:"10px" , width:"400px"}} 
                        type="search" 
                        placeholder="Type something to search" 
                        aria-label="Search"
                        onChange={(e) => { setValue(e.target.value) }} />
                      <button class="btn btn-dark my-2 my-sm-0" type="submit" onClick={searchValue} disabled={!value}> <SearchIcon/> </button>
                    </form>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <ButtonGroup variant="text" aria-label="text primary button group">
                            <Button onClick={NavigateToBooks}>
                                <Typography className={classes.title} style={{ color: 'white' }} variant="h6" noWrap>
                                    Books
                                </Typography>
                            </Button>
                            <Button onClick={NavigateToAboutUs}>
                                <Typography className={classes.title} style={{ color: 'white'}} variant="h6" noWrap>
                                    About Us
                                </Typography></Button>
                            <Button onClick={NavigateToContactUs} >
                                <Typography className={classes.title} style={{ color: 'white' }} variant="h6" noWrap>
                                    Contact Us
                                </Typography></Button>
                        </ButtonGroup>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                            <Typography className={classes.title} variant="h5" >
                                {/*Add user name here*/}
                                username
                        </Typography>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}            
        </div>        
    );
}
