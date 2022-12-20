import { useLanguageContext } from '../contexts/language/LanugageContext';

function MyName(props) {
    const { lang } = useLanguageContext();

    if (props.surname) {
        if (lang === 'pl') {
            return <h1>Cześć moje imię to {props.name}, 
               a nazwisko to {props.surname}!</h1>
        }

        return <h1>Hello my name is {props.name}, 
            and my surname is {props.surname}!</h1>
    }


    if (lang === 'pl') {
        return <h1>Cześć moje imię to {props.name}!</h1>
    }

    return <h1>Hello my name is {props.name}!</h1>
}

export default MyName;