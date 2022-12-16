function MyName(props) {
    if (props.surname) {
        return <h1>Hello my name is {props.name}, 
            and my surname is {props.surname}!</h1>
    }

    return <h1>Hello my name is {props.name}!</h1>
}

export default MyName;