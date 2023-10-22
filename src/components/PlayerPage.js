import dots from "./assets/3dots.png"
import back from "./assets/back.png"
import backward from "./assets/backward.png"
import pause from "./assets/pause.png"
import play from "./assets/play.png"
import forward from "./assets/forward.png"
import heart from "./assets/love.png"
import shuffle from "./assets/shuffle.png"
import rewind from "./assets/rewind.png"
import icon from "./assets/pfp.jpg"

import { useState } from "react"

const PlayerPage = (props)=>{
    const playerState = () =>{
        let pauseBtn = document.querySelector("#playerPlayer");
        if(props.playState)
        {
            pauseBtn.src = play;
        }else{
            pauseBtn.src = pause;
        }
    }
    
    const [duration, setDuration] = useState("0:00")
    const [currTime, setCurrTime] = useState("0:00")
    setInterval(()=>{
        let temp_duration =parseInt(props.audioLength()[1]);
        temp_duration = `${parseInt(temp_duration/60)}:${parseInt(temp_duration%60)}`;
        setDuration(temp_duration);

        let temp_currTime =parseInt(props.audioLength()[0]);
        let temp_seconds = temp_currTime%60;
        temp_currTime = `${parseInt(temp_currTime/60)}:`;

        if(temp_seconds<10)
        {
            temp_currTime += "0";
            temp_currTime += temp_seconds;
        }else
            temp_currTime += temp_seconds;

        setCurrTime(temp_currTime);


        //progress bar
        let progressBar = document.querySelector(".progress-thumb");
        temp_currTime =parseInt(props.audioLength()[0]);
        temp_duration =parseInt(props.audioLength()[1]);
        temp_currTime /= temp_duration;
        temp_currTime *= 100;
        if(progressBar)
            progressBar.style.width = `${temp_currTime}%`
    }, 1000)

    let progressBarClicked = (e) =>{
        let progressBar = document.querySelector(".progress-bar");
        let x = progressBar.getBoundingClientRect().right;
        let percentage = e.clientX/x;
        let duration = parseInt(props.audioLength()[1]);

        props.audioSeek(percentage*duration)
        percentage *= 100;
        let progressThumb = document.querySelector(".progress-thumb");
        progressThumb.style.width = `${percentage}%`

    }

    const shuffeToggle = () =>{
        let shuffle = document.querySelector(".shuffle")
        if(shuffle.style.backgroundColor == "grey")
            shuffle.style.backgroundColor = "transparent"
        else   
            shuffle.style.backgroundColor = "grey"
    }
    const repeatToggle = () =>{
        let repeat = document.querySelector(".repeat")
        if(repeat.style.backgroundColor == "grey")
            repeat.style.backgroundColor = "transparent"
        else   
            repeat.style.backgroundColor = "grey"
    }

    return(
        <div className = "player-flex">
            <div className = "player-navBar">
                <img src = {back} className = "back shadow onActive" onClick = {props.openHome}></img>
                <p>NOW PLAYING</p>
                <img src = {dots} className = "dots shadow onActive"></img>
            </div>

            <div className = "player-info">
                <img src = {props.songIcon[props.index]} className = "shadow"></img>
                <h3>{props.songName[props.index]}</h3>
                <p>{props.artist[props.index]}</p>
            </div>

            <div className = "player-progress">
                <div className = "progress-bar shadow" onClick = {progressBarClicked}>
                    <div className = "progress-thumb"></div>
                    <div className = "progress-dot shadow"></div>
                </div>
                <div>
                    <p>{currTime}</p>
                    <p>{duration}</p>
                </div>
            </div>

            <div className = "player-playerOptions">
                <div className = "playerOptions">
                    <img className = "backward" src = {backward} onClick = {props.audioPrev}></img>
                    <img className = "pause shadow" id="playerPlayer" src = {pause} onClick = {() =>{props.audioPlay(); playerState()}}></img>
                    <img className = "forward" src = {forward} onClick = {props.audioNext}></img>
                </div>
            </div>

            <div className = "player-extraOptions">
                <img src = {heart} className = "shadow onActive"></img>
                <img src = {shuffle} className = "shuffle shadow onActive" onClick = {shuffeToggle}></img>
                <img src = {rewind} className = "repeat shadow onActive" onClick = {repeatToggle}></img>
            </div>
        </div>
    )
}

PlayerPage.defaultProps = {
    songName : "Blinding Nights",
    artist : "The Weeknd",
    songIcon : "icon"
}
export default PlayerPage;