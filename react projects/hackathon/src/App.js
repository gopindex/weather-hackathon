import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            city: '',
            coord: null,
            temp: null,
            weather: '',
            loading: false
        };
    }
    onChange = (e) => {
        // console.log(e.target.name, e.target.value);
        this.setState({
            city: e.target.value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=e1b44d4dd1c0de4ea129eead96d0767a`);
        console.log(res.data);
        this.setState({
            coord: res.data.coord,
            temp: res.data.main.temp,
            weather: res.data.weather[0].main,
            loading : true
        })
    }
    render() {
        return (
            <>
                <div className=" modal-container " id="modal-container ">
                    <div className="modal" id="nameIntro" style={{ color: 'aliceblue' }}>
                        <form onSubmit={this.onSubmit}>
                            <label htmlFor="fname ">Enter The City Name:</label><br />
                            <input
                                type="text"
                                id="fname"
                                name="city"
                                value={this.state.city}
                                onChange={this.onChange}
                                required
                            />
                            <br />
                            <input type="submit" value="Submit" id="submit" />
                        </form>
                    </div>
                </div>
                {this.state.loading && (
                    <div className="Weather">
                        <h1> City : {this.state.city} </h1>
                        <h1> Weather : {this.state.weather} </h1>
                        <h1> Temperature : {this.state.temp} F</h1>
                        <h1> Latitude  : {this.state.coord.lat} </h1>
                        <h1> Longitude  : {this.state.coord.lon} </h1>
                    </div>
                )}
            </>
        )
    }
}
export default App;