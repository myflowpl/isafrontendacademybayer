import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from "../../common/page-wrapper"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

/* FIREBASE YOU CAN OMIT THIS PART */
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
/* END */

export const Register = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
 
 

  const handleSubmit = (e) => {
 
      e.preventDefault();

      /* FIREBASE YOU CAN OMIT THIS PART */
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      /* END */
          .then(() => {
              navigate('/')
          })
    
  }


  return (
    <PageWrapper title="Register">
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <form onSubmit={handleSubmit}>
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Register
                </Button>
            </form>
        </Box>
    </PageWrapper>
)
}