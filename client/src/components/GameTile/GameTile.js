import React, { useState, useEffect } from "react";
import { GameTileData } from "./GameTileData";
import {FiEdit} from "react-icons/fi";
import './GameTile.css';


const GameTile = (props) => {

    let gameTile = props.params.game;


    const [auth, setAuth] = useState(props.params.user_id);

    //const [state] = useContext(AuthContext);
    //var state = {id:3}; //temp
    //const { auth } = useContext(AuthContext);

    const [editPermission, setEditPermission] = useState(props.params.editPermission);
    const [task, setTask] = useState(true);
    const [overlay, setOverlay] = useState(false);

    useEffect(() => {
        if(props.params.user_id === gameTile.user){
            setEditPermission(true);
        } else if (props.params.user_id !== gameTile.user){
            setEditPermission(false);
        }
    }, [])

    const showDetails = () => {
        if (gameTile.content === "GAME"){
            setOverlay(true);
            setTask(2);
        }
        if (gameTile.content === "TOURNAMENT"){
            setOverlay(true);
            setTask(1);
        }
    }

    const stopOverlay = () => {
        setOverlay(false);
        setTask(0);
    }

    const editDetails = (e) => {
        e.stopPropagation();
        setOverlay(true);
        setTask(3)
    }
        
        return(
            <>
            <div className={overlay ? "tournament-overlay-active" : "tournament-overlay"}>
                <div className="tournament-overlay-screen" onClick={stopOverlay}></div>
                    {task === 1 && (
                        <div className="tournament-view-outer">
                            {/* <Tournament params={gameTile}/> */}
                        </div>
                    )}
                    {task === 2 && (
                        <div className="tournament-game-outer">

                        </div>
                    )}
                    {task === 3 && (
                        <div className="tournament-edit-outer">
                            {/* <UpdateTournament params={gameTile}/> */}
                        </div>
                    )}
            </div>
            <div className="tile-layout" onClick={showDetails} data-testid="ShowDetails" >
                <div className="tile-image-outer">
                    <img src={gameTile.img} alt={gameTile.alt} className='tile-image' />
                </div>
                <div className="tile-info">
                    <div className="tile-name" data-testid='TitleTest'>
                        {gameTile.name}
                    </div>
                    <div className={editPermission ? "tile-edit-button-active" : "tile-edit-button"} onClick={editDetails}  data-testid="EditButton">
                        <FiEdit className="edit-button-symbol"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameTile