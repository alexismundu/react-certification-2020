import React from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  AppBar,
  EndBar,
  SearchStyled,
  TextField,
  Toolbar,
  Switch,
} from './Header.styled';
import { useAppContext } from '../../state/AppProvider';
import { useAuth } from '../../providers/Auth';

const Header = () => {
  const history = useHistory();
  const { state, dispatch } = useAppContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const { logout, authenticated } = useAuth();

  function deAuthenticate(e) {
    e.preventDefault();
    logout();
    history.push('/login');
  }

  const handleProfileMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
    history.push('/login');
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

  const handleDarkModeClick = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'SET_SEARCH_VALUE', payload: e.target.value });
    }
  };

  const handleMenuClick = () => {
    history.push('/');
  };

  const handleFavoriteClick = () => {
    history.push('/favorites');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="home"
            onClick={handleMenuClick}
          >
            <VideoLibraryIcon />
          </IconButton>
          {authenticated && (
            <SearchStyled>
              <TextField
                label="Search..."
                defaultValue={state.searchValue}
                onKeyPress={handleSearch}
              />
            </SearchStyled>
          )}
          <EndBar>
            <Switch onChange={handleDarkModeClick} />
            <p>Dark mode</p>

            {authenticated ? (
              <>
                <IconButton
                  aria-label="favorites"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleFavoriteClick}
                  color="inherit"
                >
                  <FavoriteIcon />
                </IconButton>
                <p>Favorites</p>
                <IconButton aria-label="logout" color="inherit" onClick={deAuthenticate}>
                  <ExitToAppIcon />
                </IconButton>
              </>
            ) : (
              <IconButton
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
          </EndBar>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
};

export default Header;
