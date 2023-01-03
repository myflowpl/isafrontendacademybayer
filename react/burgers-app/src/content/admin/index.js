import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageWrapper } from "../../common/page-wrapper"
import { AddModalButton } from './add-modal';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const ButtonContainer = styled.div`
    margin-top: 20px;
    align-self: flex-end;
`;

export const Admin = () => {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
            .then(r => r.json())
            .then(data => {
                const formattedData = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                setBurgers(formattedData);
            })
    }, []);

    return <PageWrapper title="Admin">
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Ingredients</TableCell>
                    <TableCell align="right">Price ($)</TableCell>
                    <TableCell sx={{ width: '65px' }} />
                    <TableCell sx={{ width: '85px' }} />
                </TableRow>
            </TableHead>
            <TableBody>
                {burgers.map(burger => (
                    <TableRow key={burger.id}>
                        <TableCell>
                            <Link to={`/menu/${burger.id}`}>{burger.name}</Link>
                        </TableCell>
                        <TableCell align="right">{burger.ingredients}</TableCell>
                        <TableCell align="right">{burger.price}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary">Edit</Button>
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" color="error">Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        <ButtonContainer>
            <AddModalButton />
        </ButtonContainer>
    </PageWrapper>
}