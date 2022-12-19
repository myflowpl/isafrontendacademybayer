import { Wrapper } from './Wrapper'
import { AboutMe } from './about-me/AboutMe'
import { Game } from './game/Game';
import { GameClass } from './game/GameClass';
import { Users } from './users/Users';
import { MyForm } from './forms/MyForm';
import { MyBetterForm } from './forms/MyBetterForm';

function App() {

  return (
    <Wrapper>
        <MyBetterForm />
        <MyForm />
        <Users />
        <GameClass name="Just Another Game" />
        <Game name="Catan" />
        <AboutMe />
    </Wrapper>
  );
}

export default App;
