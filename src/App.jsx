// import './App.css'
import Header from "./components/Header"
import Navbar from './components/Navbar';
import Game from './components/Game';
import ProductApp from './components/ProductApp';
import { useState } from 'react';
import { getTotalExp, shuffle } from './common/helpers';
import { muslimArmy, qurayshArmy } from './mock/warriors';

import Team from './components/Team';
import ChangeColor from './components/changeColor';
import Greeting from './components/Greeting';
import HideItem from './components/HideItem';
import NumberGeneration from './components/NumberGeneration';
import LightBulbToggle from './components/LightBulbToggle';
import RandomJoker from './components/RandomJoker';
import CreateCounter from './components/CreateCounter';
import Forms from './components/Forms';
import ChangeInputColor from './components/Forms/ChangeInputColor';
import TemperaturConvert from './components/TemperaturConvert';
import EmojiPicker from './components/EmojiPicker';
import FormatName from './components/FormatName';
import ShowHidePassword from "./components/ShowHidePasspord";
import InputSearchFilter from "./components/InputSearchFilter"

const confettiColors = ['#ffd166', '#ef476f', '#06d6a0', '#118ab2', '#ffffff'];
const TEAM_SIZE = 4;
const withForm = (warrior) => ({
  ...warrior,
  base_experience: warrior.base_experience + Math.floor(Math.random() * 61) - 30,
});

const createTeams = () => ({
  team1: shuffle(muslimArmy).slice(0, TEAM_SIZE).map(withForm),
  team2: shuffle(qurayshArmy).slice(0, TEAM_SIZE).map(withForm),
});

function App() {
  // const [teams, setTeams] = useState(createTeams);
  // const [round, setRound] = useState(1);
  // const [showBanner, setShowBanner] = useState(true);
  

  // const exp1 = getTotalExp(teams.team1);
  // const exp2 = getTotalExp(teams.team2);
  // const isDraw = exp1 === exp2;

  // const winnerName = exp1 > exp2 ? 'İslam ordusu' : 'Qureyş müşrikləri';
  // const winnerTeam = exp1 > exp2 ? teams.team1 : teams.team2;
  // const best = [...winnerTeam].sort((a, b) => b.base_experience - a.base_experience)[0];

  // const handleStartGame = () => {
  //   setTeams(createTeams());
  //   setShowBanner(true);
  //   setRound((r) => r + 1);
  // };

  // const muslimWon = exp1 > exp2;
  // const qurayshWon = exp2 > exp1;

  return (
    <>
      {/* <Header />
      <Navbar /> */}
       {/* <Game /> */}
       {/* <ChangeColor/> */}
       {/* <ProductApp /> */}
       {/* <Greeting /> */}
       {/* <HideItem/> */}
        {/* <NumberGeneration/>
        <LightBulbToggle/>
        <ChangeColor/>
        <CreateCounter /> */}
                {/* <ChangeInputColor/> */}

        <Forms/>
                {/* <RandomJoker/> */}

        {/* <TemperaturConvert/> */}
        {/* <EmojiPicker/> */}
        {/* <FormatName /> */}
        {/* <ShowHidePassword/> */}
        {/* <InputSearchFilter/> */}
    </>


  )
}

export default App