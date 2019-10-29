import React from 'react';
import './Card.css'

const Card = ({name, quantity}) => {
	return(
		<div className = 'bg-yellow f3 br3 pa2 ma3 bw2 dim fl w-60'>
			<p> {name} - {quantity} </p>

			
			
		</div>
		);

}

export default Card;