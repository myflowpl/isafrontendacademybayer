import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export const Row = ({ burger, refresh }) => {
    const handleDelete = () => {
        fetch(`https://rest-api-b6410.firebaseio.com/burgers/${burger.id}.json`, {
            method: 'DELETE'
        }).then(() => {
            refresh();
        })
    }

    return <TableRow>
        <TableCell>
            <Link to={`/menu/${burger.id}`}>{burger.name}</Link>
        </TableCell>
        <TableCell align="right">{burger.ingredients}</TableCell>
        <TableCell align="right">{burger.price}</TableCell>
        <TableCell>
            <Button variant="contained" color="primary">Edit</Button>
        </TableCell>
        <TableCell>
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </TableCell>
    </TableRow>
}