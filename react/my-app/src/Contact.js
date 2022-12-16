import styles from './Contact.module.css';

export function Contact({ data: { phone, address, email } }) {
    const handleClick = () => {
        alert(`Welcome! Feel free to visit me at ${address.street} ${address.number}, ${address.city}!`);
    }

    return <div className={styles.container}>
        <h4>PHONE</h4>
        <p>{phone}</p>
        <h4>ADDRESS</h4>
        <p>{address.street} {address.number}, {address.city}</p>
        <h4>EMAIL</h4>
        <p>{email}</p>
        <button onClick={handleClick}>Send</button>
    </div>
}