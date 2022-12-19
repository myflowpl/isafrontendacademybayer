import { Wrapper } from './Wrapper'
import { AboutMe } from './about-me/AboutMe'
import { Game } from './game/Game';
import { Users } from './users/Users';

function App() {

  return (
    <Wrapper>
        <Users />
        <Game name="Catan" />
        <AboutMe />
    </Wrapper>
  );
}

export default App;
