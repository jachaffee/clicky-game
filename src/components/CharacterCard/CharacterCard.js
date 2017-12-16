import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
	<div className="card">
		<div className="image-container">
			<a onClick={() => props.chooseCharacter(props.char)}
				className={props.playerScore === 0}
			>
				<img alt={props.char} src={props.image} />
			</a>
		</div>
	</div>
);

export default CharacterCard;