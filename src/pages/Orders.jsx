import React from 'react'
import '../styles/OrderStyle.css'
import User from '../images/kishan.jpg' 
import Menu from '../components/Menu'
import data from '../data/data.json'
import MyCart from '../components/MyCart'

class Orders extends React.Component {
    constructor(){
        super();
        this.state = {
            list: data,
            id:'',
            newList:'',
            price:'',
            name:'',
            total:0,
            quantity:0,
            clickable: false
        };
    }

    componentWillMount(){
        const hotel = this.props.history.location.pathname.slice(7)
        const List = this.state.list.filter(function (rec) { return rec.name === hotel})
        this.setState({
            id:hotel,
            newList: List
        })
    }

    childHandler = (ChildPrice,ChildName,ChildQuantity) => {
        
        this.setState(
            {price: ChildPrice,
            name: ChildName,
            quantity : ChildQuantity+1,
            clickable: true }
        )};

    incrementQuantity = (incQuan) => {
        this.setState(
            {
                quantity: incQuan+1,
                // total: this.state.quantity*p
                
            }
        )
    };

    decrementQuantity = (decQuan) => {
        if(this.state.quantity>=1){
            this.setState(
                {
                    quantity: decQuan-1,
                    
                }
            )
        }
        
    };

    total = (p,q) => {
        this.setState(
            {
                total:p*q
            }
        )
    }
    
    // setname = (n) => {
    //     this.setState({
    //         newList:this.state.list.filter(function(rec){ return rec.name==n})
    //     })
    // }

    render(){
        return(
        <div>
            <div className="nav">
                <div id="logo">
                    <h2>FOODIE</h2>
                </div>

                <div id="user">
                    <div className="name">Hello, Kishan</div>
                    <div className="profile">
                        <img src={User} id="img" height="45" width="45" alt="profile"/>
                    </div>
                </div>
            
                
            </div>

            <div id="content">
                <div id="head">
                    <h1 className='hname'>{this.state.newList.map(x => x.name)}</h1>
                    <h5 className='aname'> &#xf3c5; {this.state.newList.map(x => x.address)}</h5>
                    <div id='items'>
                        <center><h2>Order Now</h2></center>
                        <br/>

                        {this.state.newList.map (
                            x => x.menu.map(item => <Menu 
                                                        desc={item.desc} 
                                                        price={item.price} 
                                                        name={item.name}
                                                        action={this.childHandler} />)
                        )		
                                        
                        }

                    </div>
                </div>
                <div id="panel">
                    <div id="logo">               
                    </div> 
                    <div id="right">
                        <div id= "right-in">
                            <h4>My Cart</h4>
                                
                            { this.state.clickable && 
                                <div>
                                    <MyCart 
                                        name={this.state.name}
                                        price={this.state.price}
                                        quantity={this.state.quantity} 
                                        increment={this.incrementQuantity} 
                                        decrement={this.decrementQuantity}>
                                    </MyCart>
                                </div>
                            }
    
                            <div id="total">
                                <p id="total"> Total amount: 
                                    <span className="spn">{'\u20B9'}  {this.state.total}</span>
                                </p>
                                <input id="pay" type="button" value="Calculate"
                                onClick = {() => this.total(this.state.price,this.state.quantity)} />
                                <br/>
                                <input id="pay" type="button" value="Pay Now"/>
                            </div>
                        </div>                
                    </div>
                </div>

            </div>
        </div>
        )
    };
}

export default Orders;