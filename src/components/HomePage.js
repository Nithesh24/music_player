import pfp from "./assets/pfp.jpg";
import searchIcon from "./assets/searchIcon.png";
import MusicCard from "./MusicCard";
import backward from "./assets/backward.png";
import pause from "./assets/pause.png";
import forward from "./assets/forward.png";

const HomePage = (props) =>{

    const fun = ()=>{
        let box = document.querySelector("#menuCheckBox")
        // console.log(box)
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
                <img src = {pfp} className = "profileIcon shadow"></img>
            </div>

            <div id = "searchBar">
                <input className = "searchBar shadow" type = "text" placeholder = "search your song.."></input>
                <img className = "searchIcon" src = {searchIcon}></img>
            </div>

            <h1>Trending Songs</h1>
            <div className = "trendySongs songRow">
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
            </div>

            <h1>Popular Songs</h1>
            <div className = "popularSongs songRow">
            <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
            </div>

            <div className = "player shadow">
                <img className = "playerIcon shadow" src = {pfp}></img>
                <div>
                    <h5>Blinding Nights</h5>
                    <p>The weeeknd</p>
                </div>
                <div className = "playerOptions">
                    <img className = "backward" src = {backward}></img>
                    <img className = "pause shadow" src = {pause}></img>
                    <img className = "forward" src = {forward}></img>
                </div>
            </div>
        </div>
    );
}

export default HomePage;