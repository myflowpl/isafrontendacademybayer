import { useEffect } from 'react';

export const Users = () => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(data => {
                console.log(data)
            })
    }, []);

    return <h1>Users</h1>
}