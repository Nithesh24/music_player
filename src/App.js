// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import HomePage from "./components/HomePage"
import PlayerPage from './components/PlayerPage';

//importing songs
import _7rings from "./components/songs/7rings_ariana.mp3"
import blankSpace from "./components/songs/blankSpace_taylor.mp3"
import blindingLights from "./components/songs/blindingLights_weeknd.mp3"
import calmDown from "./components/songs/calmDown_rema.mp3"
import countingStars from "./components/songs/countingStars_republic.mp3"
import heatWaves from "./components/songs/heatWaves_animals.mp3"
import ikVaariAa from "./components/songs/ikVaariAa.mp3"
import katyRoar from "./components/songs/katy_roar.mp3"
import reminder from "./components/songs/reminder_weeknd.mp3"
import seeYouAgain from "./components/songs/seeYouAgain_wiz.mp3"
import shakeItOff from "./components/songs/shakeItOff_taylor.mp3"
import shapeOfYou from "./components/songs/shapeOfYou_ed.mp3"
import sorry from "./components/songs/sorry_justin.mp3"
import starBoy from "./components/songs/starBoy_weeknd.mp3"
import stay from "./components/songs/stay_justin.mp3"
import sugar from "./components/songs/sugar_maroon.mp3"
import sunFlower from "./components/songs/sunFlower_post.mp3"
import underTheInflunce from "./components/songs/underTheInflunce_chris.mp3"
import uptownFunk from "./components/songs/uptownFunk_bruno.mp3"
import weBelongTogether from "./components/songs/weBelongTogether_mariah.mp3"

// song icons
import _00 from "./components/songIcon/00.jpg"
import _01 from "./components/songIcon/01.jpg"
import _02 from "./components/songIcon/02.png"
import _03 from "./components/songIcon/03.png"
import _04 from "./components/songIcon/04.png"
import _05 from "./components/songIcon/05.png"
import _06 from "./components/songIcon/06.jpg"
import _07 from "./components/songIcon/07.png"
import _08 from "./components/songIcon/08.png"
import _09 from "./components/songIcon/09.png"
import _10 from "./components/songIcon/10.png"
import _11 from "./components/songIcon/11.png"
import _12 from "./components/songIcon/12.png"
import _13 from "./components/songIcon/13.png"
import _14 from "./components/songIcon/14.png"
import _15 from "./components/songIcon/15.png"
import _16 from "./components/songIcon/16.jpg"
import _17 from "./components/songIcon/17.jpg"
import _18 from "./components/songIcon/18.png"
import _19 from "./components/songIcon/19.png"

const songs = [_7rings, blankSpace, blindingLights, calmDown, countingStars, heatWaves, ikVaariAa, katyRoar
, reminder, seeYouAgain, shakeItOff, shapeOfYou, sorry, starBoy, stay, sugar, sunFlower, underTheInflunce,
uptownFunk, weBelongTogether
];
const artist =["Ariana Grande", "Taylor Swift ", "The Weeknd", "Rema", "OneRepublic", "Glass Animals", "Arijit Singh", "Katy Perry", 
  "The Weeknd", "Wiz Khalifa", "Taylor Swift", "Ed Sheeran", "Justin Bieber", "The Weeknd", "Justin Bieber", "Maroon 5", "Post Malone", "Chris Brown",
  "Bruno Mars", "Mariah Carey"
];
const songName = ["7 rings", "Blank Space", "Blinding Lights", "Calm Down", "Counting Stars" , "Heat Waves", "Ik Vaari Aa", "Roar",
"Reminder", "See You Again", "Shake it Off", "Shape Of You", "Sorry", "Star Boy", "Stay", "Sugar", "Sunflower", "Under The Influnce", 
"UpTown Funk", "We Belong Together"
];
const songIcons = [ _00, _01, _02, _03, _04, _05, _06, _07, _08, _09, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19];

function App() {

  const [playState, setPlayState] = useState(false);
  const [index, setIndex] = useState(0);

  const [currentPage, setPage] = useState("home");

  const audioPlay = ()=>{
    let audioControl = document.querySelector("#audio");
    if(playState)
    {
      audioControl.pause();
      setPlayState(false)
    }else{
      audioControl.play();
      setPlayState(true)
    }
  }
  const audioNext = () =>{
    setIndex((index+1)%20);
    let audioControl = document.querySelector("#audio");
    audioControl.load();
    audioControl.play();
  }
  const audioPrev = () =>{
    if(index == 0)
      setIndex(19);
    else
      setIndex(index-1);

    let audioControl = document.querySelector("#audio");
    audioControl.load();
    audioControl.play();
  }
  const audioChange = (newIndex) =>{
    setIndex(newIndex);
    let audioControl = document.querySelector("#audio");
    audioControl.load();
    audioControl.play();
    setPlayState(true);
  }

  const openPlayer = () =>{
    setPage("player")
  }
  const openHome = () =>{
    setPage("home")
  }

  const insideBody = (currentPage) =>{
    switch(currentPage)
    {
      case "home": 
        return <HomePage audioPlay = {audioPlay} audioNext ={audioNext} audioPrev = {audioPrev} audioChange = {audioChange} openPlayer = {openPlayer}
        playState = {playState} songs = {songs} songName = {songName} artist = {artist} songIcon = {songIcons} index = {index}/>

      case "player":
        return <PlayerPage openHome = {openHome}/>
    }
  }
  return (
    <div className = "body-container">
      <audio id = "audio">
        <source src = {songs[index]}></source>
      </audio>
      {/* <HomePage audioPlay = {audioPlay} audioNext ={audioNext} audioPrev = {audioPrev} audioChange = {audioChange} openPlayer = {openPlayer}
      playState = {playState} songs = {songs} songName = {songName} artist = {artist} songIcon = {songIcons} index = {index}/>

      <PlayerPage /> */}

      {insideBody(currentPage)};
    </div>
  );
}

export default App;
