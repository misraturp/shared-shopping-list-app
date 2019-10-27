import React from 'react';
import shoppingList from './shoppingList';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }


  render(){
    return(
        <div className='tc'>
          <h1> shopping list </h1>
          <input type='text' />
          <shoppingList listOfItems={this.state.items} />
        </div>

      )
  }

}

export default App;