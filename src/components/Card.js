import React from 'react';
import './Card.css'

const Card = ({name, quantity, increaseClick, decreaseClick, deleteClicked, doneClicked}) => {
	return(
		<div className = 'wholecard'>
        	<button type="button" 
		        className="btn ma2 btn-dark" onClick={()=>doneClicked(name)}>Done</button>

			<div className = 'innercard bg-yellow br3 pa2 ma2 w-30 shadow'>

				<p id='itemname'> {name} - {quantity} </p>

				<div>
				<button type="button" className="btn btn-secondary mh1" onClick={()=>increaseClick(name)}>+</button>

				<button type="button" className="btn btn-secondary mh1" onClick={()=>decreaseClick(name)}>-</button>
				</div>

			</div>
	        	<button type="button" 
			        className="btn btn-dark" onClick={()=>deleteClicked(name)}>Delete</button>
        </div>
		);

}

export default Card;