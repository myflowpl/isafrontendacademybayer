import './Contact.css';

export function Contact(props) {
    return <div className="contact-container">
        <h4>PHONE</h4>
        <p>{props.data.phone}</p>
        <h4>ADDRESS</h4>
        <p>{props.data.address.street} {props.data.address.number}, {props.data.address.city}</p>
        <h4>EMAIL</h4>
        <p>{props.data.email}</p>
    </div>
}