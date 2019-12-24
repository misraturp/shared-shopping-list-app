import React from 'react';

class Register extends React.Component{
	constructor(props){
		super();
		this.state = {
			family_name: '',
			email: '',
			password: ''
		}
	}

	onFamilyNameChange = (event) => {
		this.setState({family_name: event.target.value});
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	}
	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3030/register',{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({
				family_name: this.state.family_name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response=>response.json())
		.then(user=>{
			if(user.id){
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			}
		})
		.catch(err=>console.log('error while registering user.'))
	}

	render(){

		return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Family Name</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        		onChange={this.onFamilyNameChange}
				        		type="text" 
				        		name="family-name"  
				        		id="family-name" />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        		onChange={this.onEmailChange}
				        		type="email" 
				        		name="email-address"  
				        		id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        		onChange={this.onPasswordChange}
				        		type="password" 
				        		name="password"  
				        		id="password" />
				      </div>
				    </fieldset>
				    <div className="">
				      <input onClick={this.onSubmitRegister} 
				      			className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" 
				      			type="submit" 
				      			value="Sign up" />
				    </div>
				  </div>
				</main>
			</article>
		)

	}


}

export default Register;

