import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography'

export const UserDetails = () => {
    const params = useParams();

    return <Typography variant="h5">Hello user with id: {params.id}</Typography>
}