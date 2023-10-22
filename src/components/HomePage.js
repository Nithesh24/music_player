import { useState } from "react";

import pfp from "./assets/pfp.jpg";
import searchIcon from "./assets/searchIcon.png";
import MusicCard from "./MusicCard";
import backward from "./assets/backward.png";
import pause from "./assets/pause.png";
import play from "./assets/play.png";
import forward from "./assets/forward.png";

const HomePage = (props) =>{
    
    const fun = ()=>{
        let box = document.querySelector("#menuCheckBox")
        let navBarContent = document.querySelector(".navBar-content")

        if( navBarContent.style.display == "" ||  navBarContent.style.display == "none")
            navBarContent.style.display = "flex";
        else
        {
            navBarContent.classList.add("navBarOut");
            
            setTimeout(()=>{navBarContent.style.display = "none";navBarContent.classList.remove("navBarOut");}, 300)
        }
            

    }
    const visitGit = () =>{
        window.location.href = "https://github.com/Nithesh24/music_player";
    }
    const playerState = () =>{
        let pauseBtn = document.querySelector(".pause");
        if(props.playState)
        {
            pauseBtn.src = play;
        }else{
            pauseBtn.src = pause;
        }
    }
    const newAudio = () =>{
        let pauseBtn = document.querySelector(".pause");
        pauseBtn.src = pause;
    }

    //search bar functin;
    const searchBarOnClick = ()=> {
        let searchBar = document.querySelector(".searchBar");
        let searchList = document.querySelector(".searchList");
        searchList.style.display = "flex"
        props.songName.map((i) =>{
            let element = document.createElement("div");
            element.innerHTML = i;
            element.classList.add("search-item")
            searchList.appendChild(element);
            element.addEventListener("click" , (e) =>{
                let index = props.songName.indexOf(e.target.innerHTML)
                props.audioChange(index);
            })
        })

        searchBar.addEventListener("keydown", (e) =>{

            searchList = document.querySelector(".searchList");
            let child = searchList.lastElementChild;
            
            while(child)
            {
                searchList.removeChild(child);
                child = searchList.lastElementChild;
            }
            props.songName.map((i) =>{
                let element = document.createElement("div");
                
                if((i.substr(0, e.target.value.length).toLowerCase()) == e.target.value)
                {
                    element.innerHTML = i;
                    element.classList.add("search-item")
                    searchList.appendChild(element);
                    element.addEventListener("click" , (e) =>{
                        let index = props.songName.indexOf(e.target.innerHTML)
                        props.audioChange(index);
                    })
                }
            })
        }) 

        
    }

    const hideSearchList = () =>{
        setTimeout(()=>{
            let searchList = document.querySelector(".searchList");
        let child = searchList.lastElementChild;
        
        while(child)
        {
            searchList.removeChild(child);
            child = searchList.lastElementChild;
        }
        searchList.style.display = "none"
        }, 500)
    }
    return(
        <div className = "home-flex">
            <div className = "navBar">
                <div className = "menuBar">
                    <input type = "checkbox" id = "menuCheckBox" onClick = {fun}></input>

                    <div className = "bar"></div>
                    <div className = "bar"></div>
                    <div className = "bar"></div>
                </div>
                <img src = {pfp} className = "profileIcon shadow" onClick={visitGit}></img>
                <div className = "navBar-content">
                    This is 2nd task given by coding raja in our Internship program
                    <br></br>
                    <br></br>
                    The music player made with react js. made from scratch.
                </div>
            </div>

            <div id = "searchBar">
                <input className = "searchBar shadow" type = "text" placeholder = "search your song.." onClick = {searchBarOnClick} onBlur={hideSearchList}></input>
                <img className = "searchIcon" src = {searchIcon}></img>
                <div className = "searchList"></div>
            </div>

            <h1>Trending Songs</h1>
            <div className = "trendySongs songRow">
                <MusicCard name ={props.songName[0]} artist = {props.artist[0]} icon = {props.songIcon[0]} onClick_fun = {()=>{props.audioChange(0); newAudio()}}/>
                <MusicCard name ={props.songName[1]} artist = {props.artist[1]} icon = {props.songIcon[1]} onClick_fun = {()=>{props.audioChange(1); newAudio()}}/>
                <MusicCard name ={props.songName[2]} artist = {props.artist[2]} icon = {props.songIcon[2]} onClick_fun = {()=>{props.audioChange(2); newAudio()}}/>
                <MusicCard name ={props.songName[3]} artist = {props.artist[3]} icon = {props.songIcon[3]} onClick_fun = {()=>{props.audioChange(3); newAudio()}}/>
                <MusicCard name ={props.songName[4]} artist = {props.artist[4]} icon = {props.songIcon[4]} onClick_fun = {()=>{props.audioChange(4); newAudio()}}/>
                <MusicCard name ={props.songName[5]} artist = {props.artist[5]} icon = {props.songIcon[5]} onClick_fun = {()=>{props.audioChange(5); newAudio()}}/>
                <MusicCard name ={props.songName[6]} artist = {props.artist[6]} icon = {props.songIcon[6]} onClick_fun = {()=>{props.audioChange(6); newAudio()}}/>
                <MusicCard name ={props.songName[7]} artist = {props.artist[7]} icon = {props.songIcon[7]} onClick_fun = {()=>{props.audioChange(7); newAudio()}}/>
                <MusicCard name ={props.songName[8]} artist = {props.artist[8]} icon = {props.songIcon[8]} onClick_fun = {()=>{props.audioChange(8); newAudio()}}/>
                <MusicCard name ={props.songName[9]} artist = {props.artist[9]} icon = {props.songIcon[9]} onClick_fun = {()=>{props.audioChange(9); newAudio()}}/>
            </div>

            <h1>Popular Songs</h1>
            <div className = "popularSongs songRow">
                <MusicCard name ={props.songName[10]} artist = {props.artist[10]} icon = {props.songIcon[10]} onClick_fun = {()=>{props.audioChange(10); newAudio()}}/>
                <MusicCard name ={props.songName[11]} artist = {props.artist[11]} icon = {props.songIcon[11]} onClick_fun = {()=>{props.audioChange(11); newAudio()}}/>
                <MusicCard name ={props.songName[12]} artist = {props.artist[12]} icon = {props.songIcon[12]} onClick_fun = {()=>{props.audioChange(12); newAudio()}}/>
                <MusicCard name ={props.songName[13]} artist = {props.artist[13]} icon = {props.songIcon[13]} onClick_fun = {()=>{props.audioChange(13); newAudio()}}/>
                <MusicCard name ={props.songName[14]} artist = {props.artist[14]} icon = {props.songIcon[14]} onClick_fun = {()=>{props.audioChange(14); newAudio()}}/>
                <MusicCard name ={props.songName[15]} artist = {props.artist[15]} icon = {props.songIcon[15]} onClick_fun = {()=>{props.audioChange(15); newAudio()}}/>
                <MusicCard name ={props.songName[16]} artist = {props.artist[16]} icon = {props.songIcon[16]} onClick_fun = {()=>{props.audioChange(16); newAudio()}}/>
                <MusicCard name ={props.songName[17]} artist = {props.artist[17]} icon = {props.songIcon[17]} onClick_fun = {()=>{props.audioChange(17); newAudio()}}/>
                <MusicCard name ={props.songName[18]} artist = {props.artist[18]} icon = {props.songIcon[18]} onClick_fun = {()=>{props.audioChange(18); newAudio()}}/>
                <MusicCard name ={props.songName[19]} artist = {props.artist[19]} icon = {props.songIcon[19]} onClick_fun = {()=>{props.audioChange(19); newAudio()}}/>
            </div>

            <div className = "player shadow">
                <img className = "playerIcon shadow" src = {props.songIcon[props.index]} onClick = {props.openPlayer}></img>
                <div onClick = {props.openPlayer}>
                    <h5>{props.songName[props.index]}</h5>
                    <p>{props.artist[props.index]}</p>
                </div>
                <div className = "playerOptions">
                    <img className = "backward" src = {backward} onClick = {props.audioPrev}></img>
                    <img className = "pause shadow" src = {play} onClick = {() =>{props.audioPlay(); playerState()}}></img>
                    <img className = "forward" src = {forward} onClick = {props.audioNext}></img>
                </div>
            </div>
        </div>
    );
}

export default HomePage;