import './Contact.css';

export function Contact(props) {
    const { data } = props;

    return <div className="contact-container">
        <h4>PHONE</h4>
        <p>{data.phone}</p>
        <h4>ADDRESS</h4>
        <p>{data.address.street} {data.address.number}, {data.address.city}</p>
        <h4>EMAIL</h4>
        <p>{data.email}</p>
    </div>
}