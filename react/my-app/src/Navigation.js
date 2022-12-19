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
              <Button color="inherit">Home</Button>
              <Button color="inherit">About me</Button>
              <Button color="inherit">Game</Button>
              <Button color="inherit">Forms</Button>
              <Button color="inherit">Users</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}