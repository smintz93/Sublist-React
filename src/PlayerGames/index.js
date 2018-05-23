import React, {Component} from 'react'
import PlayerInfoModal from '../PlayerInfoModal'
import './style.css'


// This is what you see when you are logged in on Team Side

class PlayerGames extends Component {
	constructor(){
		super()
		this.state = {
			games: [],
			modalOpen: false,
			availPlayers: []

		}
	}

	getAvailPlayers = async (e) => {
		e.preventDefault();
		const id = e.currentTarget.id;

		const availplayersJson = await fetch("http://localhost:9292/available/games/players/" + id, {
			credentials: 'include'
		})
		const availPlayers = await availplayersJson.json()

			console.log(availPlayers, "<-----this is availPlayers")
		this.setState({
			availPlayers: availPlayers,
			modalOpen: true
		})
	}	

	render(){

		console.log(this.state, "this is state in render in the PlayerGames Component")

		const gamesList = this.props.games.map((game, i) => {
		// console.log(game, "<--- This is game in gamesList");
			return <li className="games"key={game.id}> 
				{game.game_date}  <br/>
				{game.game_time} PM <br/>
				Team {game.team1_id} VS. Team {game.team2_id} <br/>
				<button id={game.id} onClick={this.getAvailPlayers}>View Players</button></li>

		})

		return (
			<div>
				{ this.state.modalOpen ? <PlayerInfoModal availPlayers={this.state.availPlayers} /> : null  }

				<div className="container">
					<h2 className="schedule">Game Schedule -- Click to see who's available for a certain game</h2>
				 	{gamesList}
				</div>

			</div>	


		)
	}
	
	
}


export default PlayerGames;