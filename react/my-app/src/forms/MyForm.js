import styled from 'styled-components';
import { useState } from 'react';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

export const MyForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [comment, setComment] = useState('');

    const handleNameChange = (e) => { setName(e.target.value) }
    const handleAgeChange = (e) => { setAge(e.target.value) }
    const handleGenderChange = (e) => { setGender(e.target.value) }
    const handleCommentChange = (e) => { setComment(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify({ name, age, gender, comment }, null, 2))
    }

    return <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
            <option>male</option>
            <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" value={comment} onChange={handleCommentChange} />
        <input type="submit" value="Submit" />
    </Form>
}