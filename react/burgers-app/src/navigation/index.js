import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar'

export const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Avatar alt="logo" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                Burgers App
              </Typography>
              <Button color="inherit">Menu</Button>
              <Button color="inherit">Admin</Button>
              <Box sx={{ flexGrow: 1 }} />
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}