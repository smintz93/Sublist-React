import React from 'react';
import './style.css'

const Games = (props) => {
	console.log(props, "<--- this is props in gamess")
	const gamesList = props.games.map((game, i) => {

		
		return( 

			<li className="games" data-gid={game.id} key={game.id}>{game.game_time} PM<br/>
				{game.game_date} <br />
				Team {game.team1_id} VS. Team {game.team2_id} <br/>
				<input type="checkbox" name="checkbox" id={game.availability_id} checked={game.available === true} onChange={props.handleCheck} />
			</li>
		)

	})

	return (

		<div>

			<form>	
				<h4 className="username">Hi {props.username}</h4>
				<button onClick={props.doLogout}className='logout'>Log Out</button>
				<h1 className="schedule">Game Schedule</h1>
				<h4 className="schedule">Check the games you are available for!</h4>
			 	<ul>{gamesList}</ul>
			 	<button className='submit'>Submit Your Games</button>
			</form>	

		</div>

	)
}


export default Games;
