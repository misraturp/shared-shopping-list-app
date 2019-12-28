import React from 'react';
import SLItem from './SLItem';

class SL_list extends React.Component {
    constructor(props){
    super()
  }

  render(){
    const { listOfSls } = this.props;
    return(
        <div>
          {
            listOfSls.map((sl_item,index) => {
              let random_number = Math.floor((Math.random() * 1000) + 1)
              let image_url = "https://picsum.photos/id/"+ random_number +"/200/300/?blur=3"
              return(
                <SLItem key={sl_item.id} id={sl_item.shopping_list_id} name={sl_item.shopping_list_name} slCLicked={this.props.sl_clicked} image_url={image_url} />
              );
            }
          )}

        </div>
        )
    }

}

export default SL_list;
