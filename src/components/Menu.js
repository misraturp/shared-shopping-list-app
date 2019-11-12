import React from 'react';

const Menu = () => {
	return(
		<svg width={window.innerWidth/2} height={window.innerHeight}>
		   <circle 
		      cx={window.innerWidth/2} 
		      cy={300} 
		      r="300"
		      fill='#A40E4C'
				   />
		</svg>
		);
}

export default Menu;

/*<svg width={window.innerWidth} height={window.innerHeight}>
			<circle 
			cx={600} 
			cy={100} 
			r='500' 
			fill="red" />
		</svg>*/