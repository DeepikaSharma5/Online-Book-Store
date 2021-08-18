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
  PlusSquare,
  Book
} from 'react-feather';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import NavItem from './NavItem';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },

];
const itemsTwo = [
  {
    href: '/app/support',
    icon: DollarIcon,
    title: 'Payment'
  },
];

const bookItems = [
   {
    href: '/',
    icon: PlusSquare,
    title: 'Add Book'
  },
  {
    href: '/',
    icon: BookIcon,
    title: 'Usage'
  },
  {
    href: '/',
    icon: LayerIcon,
    title: 'Payment History'
  },
  {
    href: '/',
    icon: AccountIcon,
    title: 'My Account'
   },
    {
      href: '/',
      icon: KeyIcon,
      title: 'Change Password'
  },
]

const userItems = [
  {
   href: '/',
   icon: PlusSquare,
   title: 'Add User'
 },
 
 {
   href: '/',
   icon: AccountIcon,
   title: 'My Account'
  },
   {
     href: '/',
     icon: KeyIcon,
     title: 'Change Password'
 },
]

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
  const location = useLocation();
  const [dropDownOpen, setDropDownOpen] = useState('');
  const [accountOpen, setAccountOpen] = React.useState(false);
  const [userOpen, setUserOpen] = React.useState(false);

  const accounthandleClick = () => {
    setAccountOpen(!accountOpen);
  };

  const userhandleClick = () => {
    setUserOpen(!userOpen);
  };

  const page = window.location.href.split('/').slice(-2)[0];

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Divider />
      <Box p={2}>
        <List>
          {items.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <div
            
            onClick={accounthandleClick}
          >
            <ListItem button>
            <Icon style={{ position: 'relative', left: '-10px',top:"-5px" }}>
              <UserIcon style={{ color: '#637b86' }} />
            </Icon>
            <ListItemText
              primary="Users"
              className={classes.font}
              disableTypography
              />
              {accountOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          </div>

          <div
            
            onClick={userhandleClick}
          >
            <ListItem button>
            <Icon style={{ position: 'relative', left: '-10px',top:"-5px" }}>
              <Book style={{ color: '#637b86' }} />
            </Icon>
            <ListItemText
              primary="Book"
              className={classes.font}
              disableTypography
              />
              {userOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          </div>

          <Collapse in={userOpen} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nested}>
              <div >
              {userItems.map(item => (
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

          <Collapse in={accountOpen} timeout="auto" unmountOnExit>
              <List component="div" className={classes.nested}>
              <div >
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

          
          {itemsTwo.map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}

<ListItem button   >
                  <Icon style={{ position: 'relative', left: '-10px' }}>
                    <LockIcon style={{ color: '#637b86' }} />
                  </Icon>
                  <ListItemText
                    primary="Logout"
                    className={classes.font}
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
