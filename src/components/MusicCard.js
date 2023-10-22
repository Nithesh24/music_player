import defaultIcon from "./assets/pfp.jpg"

const MusicCard = (props) =>{

    return(
        <div className = "musicCard">
            <img className = "musicIcon shadow" src = {props.icon} onClick={props.onClick_fun}></img>
            <h3 className = "musicName">{props.name}</h3>
            <h3 className = "musicArtist">{props.artist}</h3>
        </div>
    )
}

MusicCard.defaultProps = {
    name : "Meow Meow",
    artist : "Bagad Billa",
    icon : defaultIcon
}
export default MusicCard;