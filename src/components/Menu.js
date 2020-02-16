import React from 'react'

class Menu extends React.Component{

    constructor(){
        super();
        this.state = {
            price: '',
            quantity:0
        }
    }

    render(){
        return(
            <div>
                <h3 className='fname'>
                {this.props.name}
                </h3>
                    <div className='desc'>
                        <p>{this.props.desc}</p>
                        <button className="btn" value={this.props.price} onClick={()=>this.props.action(this.props.price,this.props.name,this.state.quantity)}>Add</button>
                    </div>
                    <br/> 	
                    <p className='amount'>{'\u20B9'}  {this.props.price} </p>
                    
            </div>
            
        )
    }
}

export default Menu;