import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles,
  ListItem,
  ListItemText,
  Icon,
  Collapse,
  AccordionDetails
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  User as UserIcon,
  Key as KeyIcon,
  BookOpen as BookIcon,
  DollarSign as DollarIcon,
  Search as SearchIcon,
  Layers as LayerIcon,
  UserCheck as AccountIcon,
  Star as RecognitionIcon,
  Truck as TruckIcon,
  PlusSquare,
  Book,
  Clipboard,
  CreditCard,
  Users,
  Trello,
  Heart
} from 'react-feather';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import NavItem from './NavItem';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

/*
  Also don't forget to add APPBAR, NAVBAR in your admin pages.

  <div>
    <div className="row">
      <AppBar/>      
    </div>
    <div className="row">
      div className="col">
        <NavBar/>
      </div>
      <div className="col-10">
        <br></br><br></br>
        < Your page />
      </div>                    
    </div>
  </div>
*/

//list of dashboards
const dashboardItem = [
  {
    href: '/admin-product-dashboard',
    icon: BarChartIcon,
    title: 'Product Dashboard'
  },
  {
    href: '/payment-dashboard',
    icon: BarChartIcon,
    title: 'Payment Dashboard'
  },
];

//sid's part [dont modify]
const bookItems = [
   {
    href: '/admin-add-book',
    icon: PlusSquare,
    title: 'Add Books'
  },
  {
    href: '/admin-view-book',
    icon: BookIcon,
    title: 'Manage Books'
  },
  {
    href: '/admin-add-category',
    icon: PlusSquare,
    title: 'Add Categories'
  },
  {
    href: '/admin-view-category',
    icon: LayerIcon,
    title: 'Manage Categories'
   },
];

//Delivery part
const deliveryItems = [
  {
    href: '/admin-view-delivery',
    icon: TruckIcon,
    title: 'View Delivery Details'
  },
];

//Contents part
const contentsItems = [
  {
    href: '/admin-view-about-us',
    icon: Trello,
    title: 'View About Us'
  },
  {
    href: '/admin-view-team-details',
    icon: Users,
    title: 'View Team Details'
  },
  {
    href: '/admin-view-private-policy',
    icon: Trello,
    title: 'View Privacy Policy'
  },
  {
    href: '/admin-view-terms-and-conditions',
    icon: Trello,
    title: 'View Terms&Conditions'
  },
];

//Wishlist part
const wishlistItems = [
  {
    href: '/wishlistreport',
    icon: Clipboard,
    title: 'View Wishlist report'
  },
];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  font: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '0.875rem',
    color: '#57707c',
    fontWeight: '500'
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const [dashboardOpen, setDashboardOpen] = React.useState(false);
  const [wishlistOpen, setWishlistOpen] = React.useState(false);
  const [bookOpen, setBookOpen] = React.useState(false);
  const [deliveryOpen, setDeliveryOpen] = React.useState(false);
  const [contentsOpen, setContentsOpen] = React.useState(false);
  const [paymentOpen, setPaymentOpen] = React.useState(false);

  const dashboardhandleClick = () => {
    setDashboardOpen(!dashboardOpen);
  };

  const wishlisthandleClick = () => {
    setWishlistOpen(!wishlistOpen);
  };

  const bookhandleClick = () => {
    setBookOpen(!bookOpen);
  };

  const deliveryhandleClick = () => {
    setDeliveryOpen(!deliveryOpen);
  };

  const contentshandleClick = () => {
    setContentsOpen(!contentsOpen);
  };

  const paymenthandleClick = () => {
    setPaymentOpen(!paymentOpen);
  };


  const content = (
    <Box height="400%" display="flex" flexDirection="column" style={{backgroundColor:"#e6e6e6"}}>
      <Divider />
      <Box p={2}>
        <List>
          {/* Dashboard Drop Down */}
          <div onClick={dashboardhandleClick}>
            <ListItem button>
              <Icon style={{ position: 'relative', left: '-10px',top:"-5px", height:'30px', width:'30px' }}>
                <BarChartIcon style={{ color: '#637b86' }} />
              </Icon>
              <ListItemText
                primary="Dashboards"
                className={classes.font}
                style={{ fontSize:'19px'}}
                disableTypography
              />
              {dashboardOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>
          <Collapse in={dashboardOpen} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nested}>
              <div>
                {dashboardItem.map(item => (
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
              </List>
          </Collapse>      
          {/* Book Drop Down */}
          <div onClick={bookhandleClick}>
            <ListItem button>
              <Icon style={{ position: 'relative', left: '-10px',top:"-5px", height:'30px', width:'30px' }}>
                <BookIcon style={{ color: '#637b86' }} />
              </Icon>
              <ListItemText
                primary="Books"
                className={classes.font}
                style={{ fontSize:'19px'}}
                disableTypography
                />
                {bookOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>  
          <Collapse in={bookOpen} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nested}>
              <div>
                {bookItems.map(item => (
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
              </List>
          </Collapse>
          {/* Delivery Drop Down */}
          <div onClick={deliveryhandleClick}>
            <ListItem button>
              <Icon style={{ position: 'relative', left: '-10px',top:"-5px", height:'30px', width:'30px' }}>
                <TruckIcon style={{ color: '#637b86' }} />
              </Icon>
              <ListItemText
                primary="Delivery"
                className={classes.font}
                style={{ fontSize:'19px'}}
                disableTypography
                />
                {deliveryOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>  
          <Collapse in={deliveryOpen} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nested}>
              <div>
                {deliveryItems.map(item => (
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
              </List>
          </Collapse>
          {/* Contents Drop Down */}
          <div onClick={contentshandleClick}>
            <ListItem button>
              <Icon style={{ position: 'relative', left: '-10px',top:"-5px", height:'30px', width:'30px' }}>
                <Clipboard style={{ color: '#637b86' }} />
              </Icon>
              <ListItemText
                primary="Contents"
                className={classes.font}
                style={{ fontSize:'19px'}}
                disableTypography
                />
                {contentsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>  
          <Collapse in={contentsOpen} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nested}>
              <div>
                {contentsItems.map(item => (
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
              </List>
          </Collapse>        
          {/* Wishlist Drop Down */}
          <div onClick={wishlisthandleClick}>
            <ListItem button>
              <Icon style={{ position: 'relative', left: '-10px',top:"-5px", height:'30px', width:'30px' }}>
                <Heart style={{ color: '#637b86' }} />
              </Icon>
              <ListItemText
                primary="Wishlist"
                className={classes.font}
                style={{ fontSize:'19px'}}
                disableTypography
                />
                {wishlistOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          </div>  
          <Collapse in={wishlistOpen} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nested}>
              <div>
                {wishlistItems.map(item => (
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </div>
              </List>
          </Collapse>
          <ListItem button>
            <Icon style={{ position: 'relative', left: '-10px', height:'30px', width:'30px' }}>
              <LockIcon style={{ color: '#637b86' }} />
            </Icon>
            <ListItemText
              primary="Logout"
              className={classes.font}
              style={{ fontSize:'19px'}}
              disableTypography
            />
          </ListItem>
        </List>
        {/* <SetupWizardSide /> */}
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
