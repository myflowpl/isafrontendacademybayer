import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 50px;
`;

const Title = styled.h4`
    color: orange;
`;

const Text = styled.p`
    font-weight: 700;
`;

const Button = styled.button`
    background-color: orange;
`;


export const ContactStyled = ({ data: { phone, address, email } }) => {
    const handleClick = () => {
        alert(`Welcome! Feel free to visit me at ${address.street} ${address.number}, ${address.city}!`);
    }

    return <Container>
        <Title>PHONE</Title>
        <Text>{phone}</Text>
        <Title>ADDRESS</Title>
        <Text>{address.street} {address.number}, {address.city}</Text>
        <Title>EMAIL</Title>
        <Text>{email}</Text>
        <Button onClick={handleClick}>Send</Button>
    </Container>
}