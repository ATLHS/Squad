import React from 'react';
import MobileNavbar from './navbars/MobileNavbar';
import DesktopNavbar from './navbars/DesktopNavbar';
import {isMobile} from 'react-device-detect';

const Navbar = () => isMobile ? <MobileNavbar /> : <DesktopNavbar />;

export default Navbar;