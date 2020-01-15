import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn){
		return(
		<nav className='mr4' style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={()=>onRouteChange('signin')} className='f3 link ba dim black pa2 pointer'> Sign Out </p>
		</nav>
		);
	} else{
		return(
		<nav className='mr4' style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={()=>onRouteChange('signin')} className='f3 link dim ba black pa2 pointer'> Sign In </p>
			<p onClick={()=>onRouteChange('register')} className='f3 link dim ba black pa2 pointer'> Register </p>
		</nav>
		);
	}
}

export default Navigation;

