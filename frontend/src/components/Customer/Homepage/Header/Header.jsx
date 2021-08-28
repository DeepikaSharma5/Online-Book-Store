import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { ButtonGroup } from "@material-ui/core";
import { APP_ROUTES } from "../../../../utilities/constants/routes.constants";
import { useSelector } from "react-redux";
import { User,Heart, Search, Truck, Clipboard, CreditCard, PlusSquare } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    button: {
        color: 'inherit',
    },
  },
  button: {
    color: "inherit",
  },
}));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
  };

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };


    const navigateToAddCardDetails = (event) => window.location.href = APP_ROUTES.USER_ADD_CARD_DETAILS;
    const navigateToCardDetails = (event) => window.location.href = APP_ROUTES.USER_CARD_DETAILS;
    const navigateToCart = (event) => window.location.href = APP_ROUTES.CART;


  const preventDefault = (event) => event.preventDefault();
  const navigateToHome = (event) => window.location.href = APP_ROUTES.USER_HOMEPAGE;
  const NavigateToBooks = (event) => window.location.href = APP_ROUTES.BOOKS;
  const NavigateToAboutUs = (event) => window.location.href = APP_ROUTES.USER_ABOUT_US;
  const NavigateToContactUs = (event) => window.location.href = APP_ROUTES.USER_CONTACT_US;
  const navigateToSearchResults = (event) => window.location.href = APP_ROUTES.USER_SEARCH_BOOKS;
  const navigateToMyDeliveryAddress = (event) => window.location.href = APP_ROUTES.USER_VIEW_ADDRESS;
  const navigateToMyDeliveries = (event) => window.location.href = APP_ROUTES.USER_MY_DELIVERIES;
  const navigateToMyAccount = (event) => window.location.href = APP_ROUTES.USER_PERSONAL_DETAILS;
  const navigateToMyWishlist = (event) => window.location.href = APP_ROUTES.USER_WISHLIST;
  const navigateToSearchForWishlist = (event) => window.location.href = APP_ROUTES.WISHLIST_SEARCH;

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
                    {/*Search Bar*/}
                    <div className={classes.search} style={{"width":"300px", "height":"40px"}}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase onClick={navigateToSearchResults}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
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
                            <Badge badgeContent={getCartCount()} color="secondary">
                                <ShoppingCartIcon onClick={navigateToCart} />
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
