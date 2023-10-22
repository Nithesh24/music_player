import dots from "./assets/3dots.png"
import back from "./assets/back.png"
import backward from "./assets/backward.png"
import pause from "./assets/pause.png"
import forward from "./assets/forward.png"
import heart from "./assets/love.png"
import shuffle from "./assets/shuffle.png"
import rewind from "./assets/rewind.png"
import icon from "./assets/pfp.jpg"

const PlayerPage = (props)=>{
    return(
        <div className = "player-flex">
            <div className = "player-navBar">
                <img src = {back} className = "back shadow" onClick = {props.openHome}></img>
                <p>NOW PLAYING</p>
                <img src = {dots} className = "dots shadow"></img>
            </div>

            <div className = "player-info">
                <img src = {icon} className = "shadow"></img>
                <h3>{props.songName}</h3>
                <p>{props.artist}</p>
            </div>

            <div className = "player-progress">
                <div className = "progress-bar shadow">
                    <div className = "progress-thumb"></div>
                    <div className = "progress-dot shadow"></div>
                </div>
                <div>
                    <p>1:00</p>
                    <p>2:39</p>
                </div>
            </div>

            <div className = "player-playerOptions">
                <div className = "playerOptions">
                    <img className = "backward" src = {backward}></img>
                    <img className = "pause shadow" src = {pause}></img>
                    <img className = "forward" src = {forward}></img>
                </div>
            </div>

            <div className = "player-extraOptions">
                <img src = {heart} className = "shadow"></img>
                <img src = {shuffle} className = "shadow"></img>
                <img src = {rewind} className = "shadow"></img>
            </div>
        </div>
    )
}

PlayerPage.defaultProps = {
    songName : "Blinding Nights",
    artist : "The Weeknd"
}
export default PlayerPage;