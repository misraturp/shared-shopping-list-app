import React from 'react';
import Shoplist from './shoppinglist';
import InputBox from './Input';
import {items} from './items';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      items: items,
      inputfield: ''
    }

  }


  handleChange = (event) => {
    this.setState({inputfield: event.target.value});
  }
  
  addClicked = () => {
    let arr = this.state.items;
    let latest_id = arr.slice(-1)[0].id;
    let newID = latest_id+1;
    let newItem = {id: newID, name:this.state.inputfield, quan:1}
    arr.push(newItem)
    this.setState({items: arr, inputfield:''});
  }


  render(){
    return(
        <div className='tc'>
          <h1 className='f1'> shopping list </h1>
          <InputBox addClicked = {this.addClicked} changed={this.handleChange}/>
          <Shoplist listOfItems = {this.state.items}/>
        </div>

      );
  }

}

export default App;

//<Shoplist items = {items}/>