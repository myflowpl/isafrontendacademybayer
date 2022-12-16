import MyName from './MyName';
import {Contact} from './Contact';
import {MyFavouriteDishes} from './MyFavouriteDishes';

const data = {
    phone: '111 222 333',
    address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 }, 
    email: 'moj@mail.com'
}

const dishes = [
    { id: 1, name: 'Baklava' },
    { id: 2, name: 'Gnocchi' },
    { id: 3, name: 'Pizza' },
]

export const AboutMe = () => (
    <>
        <MyName name="Kamil" />
        <MyName name="Kamil" surname="Richert" />
        <Contact data={data} />
        <MyFavouriteDishes dishes={dishes} />
    </>
)
