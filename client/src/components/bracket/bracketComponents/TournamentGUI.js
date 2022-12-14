import React from 'react'
import BracketGUI from './BracketGUI'

//Component for tournament information. Main purpose is to hold all the brackets in the tournament.
const TournamentGUI = ({tournament, setTournament, isCreator}) => {
  return (
    <div id='tournament'>
      {tournament.map((bracket, i) =>
        <BracketGUI key={i} bracket={bracket} tournament={tournament} setTournament={setTournament} isCreator={isCreator}/>
      )}
    </div>
  )
}

export default TournamentGUI