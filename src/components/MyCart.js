import React from 'react'

class MyCart extends React.Component{
    render(){
        return(
            <div>
                <p id="pitem"> {this.props.name} <br/><br/>
                        <input className="ip" type="button" value="-" onClick={()=>this.props.decrement(this.props.quantity)}/>
                        <input className="ip" id="tx-w" type="text" value={this.props.quantity}/>
                        <input className="ip" type="button" value="+" onClick={()=>this.props.increment(this.props.quantity)}/>
                </p>  
            </div>
        )
    }
}

export default MyCart