import React from 'react';
import './SignIn.css';
import {APP_URL} from '../variables';

class SignIn extends React.Component{
	constructor(props){
		super();
		this.state = {
			familyName:'',
			signInPassword:''
		}
	}

	onFamilyNameChange = (event) => {
		this.setState({familyName: event.target.value});
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}

	onSubmitSignIn = () => {
		fetch(APP_URL + '/signin',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				family_name: this.state.familyName,
				password: this.state.signInPassword
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user.id){
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
		.catch(err=>console.log('error while trying to fetch user'))
	}

	keyPressed = (event) => {
    	if(event.key === 'Enter'){
     	 this.onSubmitSignIn();
    	}
	}

	render(){
		const { onRouteChange } = this.props;
		
		return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center form">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Family Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-red w-100" 
				        		onChange={this.onFamilyNameChange}
				        		type="text" 
				        		name="family-name"  
				        		id="family-name" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-red w-100" 
				      			onKeyPress={this.keyPressed}
				        		onChange={this.onPasswordChange}
				        		type="password" 
				        		name="password"  
				        		id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={this.onSubmitSignIn} 
				      			className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      			type="submit" 
				      			value="Sign in" />
				    </div>
				    <div className="lh-copy mt3">
				      <p onClick={()=>onRouteChange('register')} className="f6 link dim black db">Register</p>
				    </div>
				  </div>
				</main>
			</article>
		)
	}

}

export default SignIn;

