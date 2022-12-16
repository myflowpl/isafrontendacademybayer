import './Contact.css';

export function Contact(props) {
    const { data: { phone, address, email } } = props;

    return <div className="contact-container">
        <h4>PHONE</h4>
        <p>{phone}</p>
        <h4>ADDRESS</h4>
        <p>{address.street} {address.number}, {address.city}</p>
        <h4>EMAIL</h4>
        <p>{email}</p>
    </div>
}