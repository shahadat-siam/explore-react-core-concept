import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11)
    const  hundleAdd= () =>{
        const newTeam = team+1;
        setTeam(newTeam)
    }
    const hundleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }
    const teamStyle = {
        border:'2px solid purple',
        borderRadius:'10px',
        padding:'20px',
        margin:'20px'
    }
    return (
        <div style={teamStyle}>
            <h2>Player : {team} </h2>
            <button onClick={hundleAdd}>Add Player</button>
            <button onClick={hundleRemove}>Remove Player</button>
        </div>
    )
}