import React from 'react';
import '../styles/LoginStyle.css'
import Front from '../images/FB.jpg'
import TextInput from '../components/TextInput'
import AltLogin from '../components/AltLogin';



class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    onChangeUser = (event) => {
        this.setState({ username: event.target.value })
    }

    onChangePass = (event) => {
        this.setState({ password: event.target.value })
    }

    click = () => {
        if (this.state.username === 'ade', "john", "Agata" && this.state.password === 'ade123', 'john123', 'Agata123') {
            this.props.history.push(`/hotels`);
        }
        else {
            window.alert("Invalid Username or Password. Try Again!")
        }
    }


    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <div id="container">


                    <div id="id2">
                        <center><h1 id="logoApp">THE CAFeeE</h1>
                            <hr id="line" />
                            <center id="logoAppsm">Eat In or Take Away</center></center>
                        <center id="id3">Before you place your order, you will need to log in</center>
                        <br />
                        <div>

                            <center className="id2">Login<br />
                                {this.state.clickable &&
                                    <div>Username: {this.state.username} <br />
                                        Password: {this.state.password}</div>}
                                <form action="#" id="form">
                                    <TextInput type="text" name="username" placeholder="Enter Username" onChange={(e) => { this.setState({ username: e.target.value }) }} />
                                    <TextInput type="password" name="password" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />

                                </form>
                            </center>
                            <center>

                                <input type="submit" name="signin" id="btn" value="Login" onClick={this.click} />

                            </center>
                            <AltLogin />
                            <br />
                            <span style={{ marginLeft: '123px' }}>New User? <a href="#">Click Here</a></span>
                            <br /><br />



                            <div id="id1">
                                <img src={Front} height="auto" width="100%" alt="Banner" />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default LoginPage;