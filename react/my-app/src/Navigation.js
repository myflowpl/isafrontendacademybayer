import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLanguageContext } from './contexts/language/LanugageContext';

const getActiveStyles = ({ isActive }) => isActive ? { textDecoration: "underline" } : undefined

export const Navigation = () => {
    const { setLang } = useLanguageContext();

    const handlePLClick = () => {
        setLang('pl');
    }

    const handleENClick = () => {
        setLang('en');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div">
                My App
              </Typography>
              <Button color="inherit" component={NavLink} style={getActiveStyles} to="/">Home</Button>
              <Button color="inherit" component={NavLink} style={getActiveStyles} to="/about-me">About me</Button>
              <Button color="inherit" component={NavLink} style={getActiveStyles} to="/game">Game</Button>
              <Button color="inherit" component={NavLink} style={getActiveStyles} to="/forms">Forms</Button>
              <Button color="inherit" component={NavLink} style={getActiveStyles} to="/users">Users</Button>
              <Button color="inherit" component={NavLink} style={getActiveStyles} to="/sign">Sign</Button>
              <div style={{ flexGrow: 1}} />
              <Button color="inherit" onClick={handleENClick}>EN</Button>
              <Button color="inherit" onClick={handlePLClick}>PL</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}