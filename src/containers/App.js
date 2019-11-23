import React from 'react';
import Shoplist from '../components/shoppinglist';
import InputBox from '../components/Input';
// import Menu from '../components/Menu';
import Navigation from '../components/Navigation';
import Signin from '../components/Signin';
import Register from '../components/Register';
import {items} from './items';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      items: items,
      inputfield: '',
      route: 'signin',
      isSignedIn: false
    }

  }

  handleChange = (event) => {
    this.setState({inputfield: event.target.value});
  }
  
  addClicked = () => {
    let arr = this.state.items;
    let new_item_name = this.state.inputfield.toLowerCase();

    if(arr.some(el => el.name.toLowerCase() === new_item_name)){
      let new_item_quantity = arr.find(o=>o.name.toLowerCase()===new_item_name).quan+1;
      console.log(new_item_quantity)
      this.setState(prevState => ({
        items: prevState.items.map(
          el => el.name.toLowerCase() === new_item_name? { ...el, quan: new_item_quantity }: el
        )

      }))
      console.log(this.state.items)
    }
    else{
      // make first letter capital before adding to array
      new_item_name = new_item_name[0].toUpperCase()+new_item_name.slice(1); 
      let latest_id = arr.slice(-1)[0].id;
      let newID = latest_id+1;
      let newItem = {id: newID, name:new_item_name, quan:1}
      arr.push(newItem)
      this.setState({items: arr});
    }
    this.setState({inputfield:''});
  }

  keyPressed = (event) => {
    if(event.key === 'Enter'){
      this.addClicked();
    }
  }

  onRouteChange = (to_page) => {
    if(to_page==='signin'){
      this.setState({isSignedIn: false});
    } else if(to_page === 'home'){
      this.setState({isSignedIn: true});
    }
      this.setState({route: to_page});
  }


  render(){
    return(
        <div className='tc'>
          <h1 className='f1'> shopping list </h1>
          {this.state.isSignedIn 
            ?
            <div>
              <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
              <InputBox inputValue={this.state.inputfield} addClicked = {this.addClicked} onKeyPress={this.keyPressed} changed={this.handleChange}/>
              
              <div className='bodyContent'>
                <Shoplist listOfItems = {this.state.items}/>
              </div>
            </div>
            :(this.state.route==='signin'
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
            )
          }
        </div>
          );
        }

}

export default App;

