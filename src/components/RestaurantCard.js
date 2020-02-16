import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data/data.json'
class RestaurantCard extends React.Component{
    constructor(){
        super();
        this.state={
            list: data
        };
    }

    render(){
        return(
            <div className="cart">
                <Link to={{
                    pathname:`/order/${this.props.name}`}}>
                    <center><img src={this.props.thumbnail_image} alt={this.props.name}/></center>
                </Link>
                    <h3 id="hotel-title">{this.props.name}</h3>
                    <p>{this.props.cuisines}</p>
                    <p>Rating: {'★'.repeat(this.props.rating)}</p>
                    <p>Reviews: {this.props.reviews}</p>
            </div>
        );
    }
}

export default RestaurantCard