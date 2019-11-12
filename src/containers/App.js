import React from 'react';
import Shoplist from '../components/shoppinglist';
import InputBox from '../components/Input';
import Menu from '../components/Menu';
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


  render(){
    return(
        <div className='tc'>
          <h1 className='f1'> shopping list </h1>
          <InputBox inputValue={this.state.inputfield} addClicked = {this.addClicked} onKeyPress={this.keyPressed} changed={this.handleChange}/>
          
          <div className='bodyContent'>
            <Shoplist listOfItems = {this.state.items}/>
            <Menu className='weirdCircle' />
          </div>

        </div>

      );
  }

}

export default App;

