import { Wrapper } from './Wrapper'
import { AboutMe } from './about-me/AboutMe'
import { Game } from './game/Game';
import { GameClass } from './game/GameClass';
import { Users } from './users/Users';
import { MyForm } from './forms/MyForm';

function App() {

  return (
    <Wrapper>
        <MyForm />
        <Users />
        <GameClass name="Just Another Game" />
        <Game name="Catan" />
        <AboutMe />
    </Wrapper>
  );
}

export default App;
