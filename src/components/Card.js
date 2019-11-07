import React from 'react';
import './Card.css'

const Card = ({name, quantity, increaseClick, decreaseClick}) => {
	return(
		<div>
			<div className = 'bg-yellow f3 br3 pa2 ma3 bw2 fl w-60'>
				<p> {name} - {quantity} </p>
				<div className='quan_buttons'>
					<button type="button" className="btn btn-secondary" onClick={increaseClick}>+</button>

					<button type="button" className="btn btn-secondary" onClick={decreaseClick}>-</button>
				</div>

			</div>

	        <div>
	        	<button 
			        type="button" 
			        className="btn btn-dark"
			        >Delete</button>
	        </div>
        </div>
		);

}

export default Card;