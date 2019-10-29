import React from 'react';

const InputBox = ({changed, addClicked}) => {
	return(
		<div>
			<input className='ma2'
				onChange={changed} 
				type='text' /> 
	        <button 
		        type="button" 
		        className="btn btn-dark"
		        onClick={addClicked}>Add</button>

        </div>
		)

}

export default InputBox;