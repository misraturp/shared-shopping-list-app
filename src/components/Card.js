import React from 'react';
import './Card.css'

const Card = ({name, quantity, increaseClick, decreaseClick}) => {
	return(
		<div className = 'wholecard'>
			<div className = 'innercard bg-yellow br3 pa2 ma2 w-30 shadow'>

				<p id='itemname'> {name} - {quantity} </p>

				<div>
				<button type="button" className="btn btn-secondary mh1" onClick={increaseClick}>+</button>

				<button type="button" className="btn btn-secondary mh1" onClick={decreaseClick}>-</button>
				</div>

			</div>

	        	<button type="button" 
			        className="btn btn-dark">Delete</button>
        </div>
		);

}

export default Card;