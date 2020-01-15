import React from 'react';
import SLItem from './SLItem';

class SL_list extends React.Component {
    constructor(props){
    super()
    this.state = {
      showForm:false,
      newSLname: ''
    }
  }

  handleChange = (event) => {
    this.setState({newSLname:event.target.value})
  }

  showNewSLForm = () => {
    if(this.state.showForm){
      this.setState({showForm: false});
    }else{
      this.setState({showForm: true});
    }
  }

  keyPressed = (event) => {
    if(event.key === 'Enter'){
      this.props.addNewSL(this.state.newSLname)
    }
  }

  render(){
    const { listOfSls, addNewSL } = this.props;
    return(
        <div className='mr3'>
            {
              listOfSls.map((sl_item,index) => {
                let random_number = Math.floor((Math.random() * 1000) + 1)
                let image_url = "https://picsum.photos/id/"+ random_number +"/200/300/?blur=3"
                return(
                  <SLItem key={sl_item.id} id={sl_item.shopping_list_id} name={sl_item.shopping_list_name} slCLicked={this.props.sl_clicked} image_url={image_url} />
                );
              }
            )}
          <button type="button" className="btn mt5 btn-secondary mh1" onClick={this.showNewSLForm}>Add New Shopping List</button>
          {this.state.showForm
            ? <article className="bab--black-10 ma4 shadow-5 center b--transparent">
                        <label className="dc fw6 mr3" htmlFor="email-address">List name</label>
                        <input className="pa2 mb4 mt4 input-reset ba bg-transparent hover-bg-black hover-white" 
                            onChange={this.handleChange}
                            onKeyPress={this.keyPressed}
                            type="text" 
                            name="family-name"  
                            id="family-name" />
                        <button type="button" className="btn ml3 btn-secondary" onClick={()=>addNewSL(this.state.newSLname)}>Add</button>
              </article>
              : <div></div>
          }
        </div>
        )
    }

}

export default SL_list;
