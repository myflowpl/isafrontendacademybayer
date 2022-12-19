import styled from 'styled-components';
import { useState } from 'react';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

export const MyBetterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'male',
        comment: ''
    });

    const handleChange = (e) => { 
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value 
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2))
    }

    const { name, age, gender, comment } = formData;

    return <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={age} onChange={handleChange} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={gender} onChange={handleChange}>
            <option>male</option>
            <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment" value={comment} onChange={handleChange} />
        <input type="submit" value="Submit" />
    </Form>
}