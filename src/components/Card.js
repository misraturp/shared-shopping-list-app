import React from 'react';
import './Card.css'

const Card = ({name, quantity, done, increaseClick, decreaseClick, deleteClicked, doneClicked}) => {
	let div_class = `innercard br3 pa2 ma2 w-30 shadow ${done ? " done" : " undone"}`

	return(
		<div className = 'wholecard'>
        	<button type="button" 
		        className="btn ma2 btn-dark" onClick={()=>doneClicked(name)}>Done</button>

		    	<div className = {div_class}>

				<p id='itemname' className='fw8 f3'> {name} </p> 

				<div className='right-of-card'>
					<h2 className='white mr3'> {quantity} </h2>

					<div>
					<button type="button" className="btn btn-secondary mh1" onClick={()=>increaseClick(name)}>+</button>

					<button type="button" className="btn btn-secondary mh1" onClick={()=>decreaseClick(name)}>-</button>
					</div>

				</div>

			</div>
	        	<button type="button" 
			        className="btn btn-dark" onClick={()=>deleteClicked(name)}>Delete</button>
        </div>
		);

}

export default Card;