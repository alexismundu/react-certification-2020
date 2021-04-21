import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import {
  AppBar,
  EndBar,
  SearchStyled,
  TextField,
  Toolbar,
  Switch,
} from './Header.styled';
import { useAppContext } from '../../state/AppProvider';

const Header = () => {
  const { state, dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
      <MenuItem onClick={handleMenuClose}>Iniciar sesión</MenuItem>
    </Menu>
  );

  const handleDarkMode = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'SET_SEARCH_VALUE', payload: e.target.value });
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <SearchStyled>
            <TextField
              label="Search..."
              defaultValue={state.searchValue}
              onKeyPress={handleSearch}
            />
          </SearchStyled>
          <EndBar>
            <Switch onChange={handleDarkMode} />
            <p>Dark mode</p>
            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </EndBar>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
};

export default Header;
