import React from 'react';
import listItem from './item';

const shoppingList = ({listOfItems}) => {
	return(
		<div>
		{
		listOfItems.map((item, index) => {
			return(
			<listItem name={item.name}
			quantity={item.quantity} />
			);
			})

		}
		</div>

		)
}

export default shoppingList;