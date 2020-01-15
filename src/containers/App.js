import React from 'react';
import Shoplist from '../components/shoppinglist';
import InputBox from '../components/Input';
// import Menu from '../components/Menu';
import SL_list from '../components/ShoppingListList';
import Navigation from '../components/Navigation';
import Signin from '../components/Signin';
import Register from '../components/Register';
// import {items} from './items';
import logo from './list.png';
import './App.css';

const initial_state = {
  isSignedIn: false,
  route: 'signin',
  inputfield: '',
  latest_id: 5,
  user_related:{
    family_id: 0,
    family_name: '',
    list_of_sls: [],
    active_sl_id: 0,
    items:[]
  }
}

class App extends React.Component {
  constructor(){
    super()
    this.state = initial_state

    // {
    //   items: items,
    //   inputfield: '',
    //   route: 'signin',
    //   isSignedIn: false,
    // }

  }

  handleChange = (event) => {
    this.setState({inputfield: event.target.value});
    console.log(this.state.inputfield)
  }

  loadItems = (active_sl_id) => {

    console.log(this.state.user_related.list_of_sls)
    console.log(active_sl_id)
    fetch('http://localhost:3030/items',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        shopping_list_id: active_sl_id
      })
    })
    .then(res=>res.json())
    .then(data=>{
      data = data.sort((a, b) => (a.id > b.id) ? 1 : -1)
      this.setState({
          user_related:{
            ...this.state.user_related,
            items:data
          }
        })
    })
  }

  loadUser = (data) => {

    console.log(data)

    this.setState({ user_related: {
      ...this.state.user_related,
      family_id: data.family_id,
      family_name:data.family_name
    }})

    fetch('http://localhost:3030/shopping_lists',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        family_id: this.state.user_related.family_id
      })
    })
    .then(response=>response.json())
    .then(data=>{
        // let shopList_names = data.map(a => a.shopping_list_name)
        // let shopList_ids = data.map(a => a.shopping_list_id)

        this.setState({
          user_related:{
            ...this.state.user_related,
            list_of_sls: data,
            // list_of_sls_ids: shopList_ids,
            active_sl_id: data[0].shopping_list_id,
          }
        })
      return (data[0].shopping_list_id)
      })
    .then(this.loadItems)
  }
  
  addClicked = () => {

    if(this.state.inputfield !== ''){

      let arr = this.state.user_related.items;

      // format new input to look like all items in database
      let new_item_name = this.state.inputfield.toLowerCase();
      new_item_name = new_item_name[0].toUpperCase()+new_item_name.slice(1); 

      // if the item already exists, only increase its quantity
      if(arr.some(el => el.item === new_item_name)){

        this.increaseClick(new_item_name)
      }
      // if this is a new item, add it to the list, with quantity 1
      else{
        fetch('http://localhost:3030/addItem',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
            shopping_list_id: this.state.user_related.active_sl_id,
            item: new_item_name
          })
        })
        .then(list => list.json())
        .then(data=>{

          data = data.sort((a, b) => (a.id > b.id) ? 1 : -1)
          this.setState({
              user_related:{
                ...this.state.user_related,
                items:data
              }
            })
        })
        .catch(err=>console.log('error while adding new item'))

      }
      this.setState({inputfield:''});
    }
  }

  increaseClick = (item_name) => {

    fetch('http://localhost:3030/increaseQuantity',{
      method:'put',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        shopping_list_id: this.state.user_related.active_sl_id,
        item: item_name
      })
    })
    .then(list => list.json())
    .then(data=>{

      data = data.sort((a, b) => (a.id > b.id) ? 1 : -1)
      this.setState({
          user_related:{
            ...this.state.user_related,
            items:data
          }
        })
    })
    .catch(err=>console.log('error while updating item quantity'))

  }

  decreaseClick = (item_name) => {
    fetch('http://localhost:3030/decreaseQuantity',{
      method:'put',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        shopping_list_id: this.state.user_related.active_sl_id,
        item: item_name
      })
    })
    .then(list => list.json())
    .then(data=>{
      data = data.sort((a, b) => (a.id > b.id) ? 1 : -1)
      this.setState({
          user_related:{
            ...this.state.user_related,
            items:data
          }
        })
    })
    .catch(err=>console.log('error while updating item quantity'))
  }

  deleteClicked = (item_name) => {

    fetch('http://localhost:3030/removeItem',{
      method:'delete',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        shopping_list_id: this.state.user_related.active_sl_id,
        item: item_name
      })
    })
    .then(list => list.json())
    .then(data=>{
      data = data.sort((a, b) => (a.id > b.id) ? 1 : -1)
      this.setState({
          user_related:{
            ...this.state.user_related,
            items:data
          }
        })
    })
    .catch(err=>console.log('error while deleting item'))

  }

  doneClicked = (item_name) => {

    fetch('http://localhost:3030/doneItem',{
      method:'put',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        shopping_list_id: this.state.user_related.active_sl_id,
        item: item_name
      })
    })
    .then(response=>response.json())
    .then(data=>{
      data = data.sort((a, b) => (a.id > b.id) ? 1 : -1)
      this.setState({
            user_related:{
              ...this.state.user_related,
              items: data
            }
          })
        }
    )
  }

  slClicked = (sl_id) => {
    this.setState({
          user_related:{
            ...this.state.user_related,
            active_sl_id:sl_id
          }
        })
    this.loadItems(sl_id)
  }

  addNewSL = (name) => {

    console.log(name)
    fetch('http://localhost:3030/addShoppingList',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        shopping_list_name: name,
        family_id: this.state.user_related.family_id
      })
    })
    .then(response => response.json())
    .then(data=>{
        console.log(data)
        this.setState({
          user_related:{
            ...this.state.user_related,
            list_of_sls: data
          }
        })
      return (data[0].shopping_list_id)
      })
    .catch(err=>console.log('error while adding new list'))
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
          <app-header>
            <title className='ml4 mt4 '>
              <img className='w3 h3' src={logo} /> 
              <h1 className='f1 app-title tl underline'> shopping list </h1>
            </title>
            <Navigation className='navigation' onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
          </app-header>
          {this.state.isSignedIn 
            ?
            <div>
                <InputBox inputValue={this.state.inputfield} addClicked = {this.addClicked} onKeyPress={this.keyPressed} changed={this.handleChange}/>
              
              <div className='bodyContent'>
                <div className='left-page'>
                  <Shoplist listOfItems = {this.state.user_related.items} increaseClick={this.increaseClick} decreaseClick={this.decreaseClick} deleteClicked={this.deleteClicked} doneClicked={this.doneClicked}/>
                </div>
                <div className='right-page'>
                  <SL_list listOfSls={this.state.user_related.list_of_sls} sl_clicked={this.slClicked} addNewSL={this.addNewSL} />
                </div>
              </div>
            </div>
            :(this.state.route==='signin'
            ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            )
          }
        </div>
          );
        }

}

export default App;

