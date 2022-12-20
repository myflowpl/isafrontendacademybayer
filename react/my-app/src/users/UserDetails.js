import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography'

export const UserDetails = () => {
    const params = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(r => r.json())
            .then(data => {
                setUser(data)
            })
    }, [params.id])

    if (!user) {
        return null;
    }

    return <Typography variant="h5">Hello {user.name} !</Typography>
}