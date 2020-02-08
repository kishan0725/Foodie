import React from 'react';
import '../styles/HotelStyle.css'
import User from '../images/kishan.jpg'
import data from '../data/data.json'
import RestaurantCard from '../components/RestaurantCard'
class Hotels extends React.Component {
    constructor(){
        super();
        this.state={
            list: data
        };
    }


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
                        <img src={User} alt="profile" id="img" height="45" width="45"/>
                    </div>
                </div>
            </div>
            
            <div className="maincart">
            {this.state.list.map(
                x => 
                    <RestaurantCard thumbnail_image={x.thumbnail_image} name = {x.name} cuisines = {x.cuisines} rating = {x.rating}/>
                    
            )}
            
            </div>
        </div>
        )
    };
}

export default Hotels;