import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div">
                My App
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about-me">About me</Button>
              <Button color="inherit" component={Link} to="/game">Game</Button>
              <Button color="inherit" component={Link} to="/forms">Forms</Button>
              <Button color="inherit" component={Link} to="/users">Users</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}