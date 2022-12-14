import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { GameTileData } from "../../components/GameTile/GameTileData";
import GameTile from "../../components/GameTile/GameTile";
import { GameTile_TestData } from "../../components/GameTile/GameTitle_TestData";
import './Dashboard.css';
import * as BiIcons from 'react-icons/bi';
import { ContactUs } from "../../components/ContactUs/ContactUs";

const Dashboard = () => {

    const [tournamentList, setTournamentList] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        //Axios function to load the data into GameTileData objects 

    }, [])
    

    //Load sample data 
    useEffect(() => {
        GameTile_TestData.forEach(element => {
            let gameTile = new GameTileData(element.id,element.name,element.img,element.alt);
            setTournamentList(tournamentList => [...tournamentList,gameTile]);
        });
    }, [])
    
    const backToLanding = () => {
        return navigate('/');
    }

    return(
        <div className="dashboard-page">
            <div className="dashboard-topbar">
                <div onClick={backToLanding} className='dash-back-button'>
                    <div className='dash-back-button-icon'>
                        <BiIcons.BiArrowBack/>
                    </div>
                    <div>
                        Back
                    </div>
                </div>
                <div className="dashboard-heading">
                    <span>
                        Your Page
                    </span>
                </div>
            </div>
            <div className="user-tounaments-outer">
                <div className="user-tounaments-heading">
                    <span>
                        Your Tournaments
                    </span>
                </div>
                <div className="user-tounaments-inner">
                    {tournamentList.map((element)=>{
                        return(
                            <GameTile game={element}/>
                        )
                    })}
                </div>
            </div>
            <div className="user-tounaments-outer">
                <div className="user-tounaments-heading">
                    <span>
                        Participating
                    </span>
                </div>
                <div className="user-tounaments-inner">
                    {tournamentList.map((element)=>{
                        return(
                            <GameTile game={element}/>
                        )
                    })}
                </div>
            </div>
            <div className="user-tounaments-outer">
                <div className="user-tounaments-heading">
                    <span>
                        Tournaments History
                    </span>
                </div>
                <div className="user-tounaments-inner">
                    {tournamentList.map((element)=>{
                        return(
                            <GameTile game={element}/>
                        )
                    })}
                </div>
            </div>
            <div className="contact-us">
                <ContactUs />
            </div>
        </div>
    )
}

export default Dashboard