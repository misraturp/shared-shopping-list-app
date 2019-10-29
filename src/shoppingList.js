import React from 'react';
import Card from './Card';

const Shoplist = ({listOfItems}) => {
	return(
			<div>
				{
					listOfItems.map((item, index) => {
						return(
							<Card key={item.id}
							name={item.name}
							quantity={item.quan} />
						);
					}
				)}


			</div>

		);
}

export default Shoplist;



				
			