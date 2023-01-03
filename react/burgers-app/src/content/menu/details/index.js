import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../../common/page-wrapper'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const Details = () => {
    const [burger, setBurger] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rest-api-b6410.firebaseio.com/burgers/${id}.json`)
            .then(r => r.json())
            .then(data => {
                setBurger(data)
            })
    }, [id]);

    if (!burger) {
        return null;
    }

    return <PageWrapper title={burger.name}>
        <Avatar 
            src={burger.url || 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'} 
            sx={{ width: '200px', height: '200px', margin: '20px 0' }} 
        />
        <Typography>{burger.ingredients}</Typography>
        <Typography>{burger.price}</Typography>
    </PageWrapper>
}