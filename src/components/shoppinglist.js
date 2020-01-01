import React from 'react';
import Card from './Card';

class Shoplist extends React.Component {
  constructor(props){
    super()
  }

  render(){
  	// console.log(this.props.increaseClick)
  	const { listOfItems } = this.props;
  	console.log(listOfItems);
  	return(
  		<div>
				{
					listOfItems.map((item, index) => {
						return(
							<Card key={item.id}
							name={item.item}
							quantity={item.quantity}
							doneClicked={this.props.doneClicked}
							increaseClick={this.props.increaseClick}
							decreaseClick={this.props.decreaseClick}
							deleteClicked={this.props.deleteClicked}
							done={item.done} />
						);
					}
				)}


			</div>
  		)
  	}
}

export default Shoplist;



				
			