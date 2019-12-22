import React from 'react';
import Card from './Card';


class Shoplist extends React.Component {
  constructor(props){
    super()
  }

  render(){
  	const { listOfItems } = this.props;
  	return(
  		<div>
				{
					listOfItems.map((item, index) => {
						return(
							<Card key={item.id}
							name={item.name}
							quantity={item.quan}
							increaseClick={this.props.increaseClick}
							decreaseClick={this.props.decreaseClick}
							deleteClicked={this.props.deleteClicked} />
						);
					}
				)}


			</div>
  		)
  }

 }

export default Shoplist;



				
			