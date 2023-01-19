import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const EditRow = ({ burger, cancelEditMode, refresh }) => {
    const [formData, setFormData] = useState(burger);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
        // const url = `https://rest-api-b6410.firebaseio.com/burgers/${burger.id}.json`;
        const url = `http://localhost:3333/burgers/${burger.id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(() => {
            cancelEditMode();
            refresh();
        })
    }

    const { name, ingredients, price } = formData;

    return <TableRow>
        <TableCell>
            <TextField fullWidth size="small" label="Name" name="name"
                value={name} onChange={handleChange} />
        </TableCell>
        <TableCell>
            <TextField fullWidth size="small" label="Ingredients" name="ingredients"
                value={ingredients} onChange={handleChange} />
        </TableCell>
        <TableCell>
            <TextField fullWidth size="small" label="Price" name="price" type="number"
                value={price} onChange={handleChange} />
        </TableCell>
        <TableCell>
            <Button variant="contained" color="success" onClick={handleSave}>Save</Button>
        </TableCell>
        <TableCell>
            <Button variant="contained" color="inherit" onClick={cancelEditMode}>Cancel</Button>
        </TableCell>
    </TableRow>
}
