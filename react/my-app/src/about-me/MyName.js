import { useContext } from 'react';
import { LanguageContext } from '../App';

function MyName(props) {
    const language = useContext(LanguageContext);

    if (props.surname) {
        if (language === 'pl') {
            return <h1>Cześć moje imię to {props.name}, 
               a nazwisko to {props.surname}!</h1>
        }

        return <h1>Hello my name is {props.name}, 
            and my surname is {props.surname}!</h1>
    }


    if (language === 'pl') {
        return <h1>Cześć moje imię to {props.name}!</h1>
    }

    return <h1>Hello my name is {props.name}!</h1>
}

export default MyName;