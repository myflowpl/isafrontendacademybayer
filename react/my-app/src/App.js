import MyName from './MyName';
import { Contact } from './Contact';

const data = {
    phone: '111 222 333',
    address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 }, 
    email: 'moj@mail.com'
}

function App() {

  return (
    <>
        <MyName name="Kamil" />
        <MyName name="Kamil" surname="Richert" />
        <Contact data={data} />
    </>
  );
}

export default App;
