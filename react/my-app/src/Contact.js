import styles from'./Contact.module.css';

export function Contact({ data: { phone, address, email } }) {
    return <div className={styles.container}>
        <h4>PHONE</h4>
        <p>{phone}</p>
        <h4>ADDRESS</h4>
        <p>{address.street} {address.number}, {address.city}</p>
        <h4>EMAIL</h4>
        <p>{email}</p>
    </div>
}