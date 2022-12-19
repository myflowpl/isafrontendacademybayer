import styled from 'styled-components';
import { useFormik } from 'formik';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
`;

export const MyBoostedForm = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          age: '',
          gender: 'male',
          comment: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      const { name, age, gender, comment } = formik.values;

    return <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={formik.handleChange} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={age} onChange={formik.handleChange} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" value={gender} onChange={formik.handleChange}>
            <option>male</option>
            <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" value={comment} onChange={formik.handleChange} />
        <input type="submit" value="Submit" />
    </Form>
}