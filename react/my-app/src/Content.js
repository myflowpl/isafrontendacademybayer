import { Routes, Route } from 'react-router-dom';
import { Wrapper } from './Wrapper'
import { AboutMe } from './about-me/AboutMe'
import { Game } from './game/Game';
import { GameClass } from './game/GameClass';
import { Users } from './users/Users';
import { MyForm } from './forms/MyForm';
import { MyBetterForm } from './forms/MyBetterForm';
import { MyBoostedForm } from './forms/MyBoostedForm';

export const Content = () => (
    <Wrapper>
        <Routes>
            <Route path="/" element={<h1>Welcome to our site!</h1>} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/forms" element={<>
                    <MyBoostedForm />
                    <MyBetterForm />
                    <MyForm />
                </>} />
            <Route path="/game" element={<>
                    <GameClass name="Just Another Game" />
                    <Game name="Catan" />
                </>} />
            <Route path="/users" element={<Users />} />
        </Routes>
    </Wrapper>
)