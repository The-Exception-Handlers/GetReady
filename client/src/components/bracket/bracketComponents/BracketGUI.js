import React from 'react'
import RoundGUI from './RoundGUI'

const BracketGUI = ({bracket, tournament, setTournament, isCreator}) => {
  return (
    <div id={bracket.type} className='bracket'>
      <h3 className='bracketHeader'>Bracket</h3>

      {bracket.rounds.map((round, i) =>
        <RoundGUI key={i} brackettype={bracket.type} round={round} width={`${100/bracket.rounds.length}%`} tournament={tournament} setTournament={setTournament} isCreator={isCreator}/>
      )}
      
      <div className="clear"/>
    </div>
  )
}

export default BracketGUI
