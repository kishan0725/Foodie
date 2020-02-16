import React from 'react';
import '../styles/LoginStyle.css'
import Front from '../images/FB.jpg'
import TextInput from '../components/TextInput'
class LoginPage extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        };
    }

    onChangeUser=(event)=>{
        this.setState({username:event.target.value})
    }

    onChangePass=(event)=>{
        this.setState({password:event.target.value})
    }

    click=()=>{
        if(this.state.username === 'kishan' && this.state.password === 'kishan123'){
            this.props.history.push(`/hotels`);
        }
        else{
            window.alert("Invalid Username or Password. Try Again!")
        }
    }


    render(){
        return(
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
           
            <div id = "container">
            <div id="id1">
                <img src={Front} height="668" width="700" alt="Banner"/>
            </div>

            <div id="id2">
                {/* <center><img src={AppLogo} alt="logo"/></center> */}
                <center><h1 id="logoApp">FOODIE</h1></center>
                    <div id="id3">
                    
                    <center><h2>LOG IN</h2><br/>
                    { this.state.clickable && 
                    <div>Username: {this.state.username} <br/>
                    Password: {this.state.password}</div>}
                    <form action="#" id="form">
                        <TextInput type="text" name="username" placeholder="Enter Username"  onChange={(e)=>{this.setState({username: e.target.value})}} />
                        <TextInput type="password" name="password" placeholder="Enter Password"  onChange={(e)=>{this.setState({password: e.target.value})}}/>
                        
                    </form>
                    </center>
                    <br/>
                    <span style={{marginLeft:'123px'}}>New User? <a href="#">Click Here</a></span>
                    <br/><br/>
                    <center>
                        
                            <input type="submit" name="signin" id="btn" value="Login" onClick={this.click} />
                       
                    </center>

            

                </div>
            </div>
        </div>
        </div>
        )
    };
}

export default LoginPage;